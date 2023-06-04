import { Html5Qrcode } from 'html5-qrcode'
import { useState, useEffect } from 'react'

const ScanCode = (props) => {
  const { getInfo } = props

  const [html5QrCodeInstance, setHtml5QrCodeInstance] = useState(null)

  useEffect(() => {
    let instance = null

    getCameraDevices().then((html5QrCode) => {
      instance = html5QrCode
      setHtml5QrCodeInstance(html5QrCode)

      html5QrCode &&
        html5QrCode.start(
          //environment后置 user前置
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 }
          },
          (decodedText, decodedResult) => {
            getInfo(decodedText)
          },
          (errorMessage) => {
            console.log('暂无扫描结果', errorMessage)
          }
        )
    })

    return () => {
      if (instance) {
        instance.stop().catch((err) => {
          console.log('停止扫描失败', err)
        })
      }
    }
  }, [])

  const getCameraDevices = async () => {
    try {
      const devices = await Html5Qrcode.getCameras()
      console.log('摄像头信息', devices)
      if (devices && devices.length) {
        const html5QrCode = new Html5Qrcode('reader')
        return html5QrCode
      }
    } catch (err) {
      console.log('获取设备信息失败', err)
    }
  }

  return (
    <div>
      <div id="reader" style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default ScanCode
