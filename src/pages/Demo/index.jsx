import React, { memo, useEffect, useState } from 'react'
import { Button } from 'antd-mobile'
import { useNavigate, useParams } from 'react-router-dom'
import ScanCode from '@/components/ScanCode'

const Demo = () => {
  const navigate = new useNavigate()
  const params = new useParams()
  useEffect(() => {
    console.log(params.id)
  }, [])
  // 显示扫描组件
  const [scanOpen, setScanOpen] = useState(false)
  // 获取扫描结果函数传给扫码组件
  const getInfo = (data) => {
    console.log(data, 'scanOpenscanOpen')
    setScanOpen(false)
  }
  // 显示组件
  const showScan = () => {
    setScanOpen(!scanOpen)
  }
  const back = () => {
    navigate(-1)
  }
  return (
    <div>
      <Button color="primary" onClick={back} fill="outline">
        Outline
      </Button>
      <Button color="primary" onClick={showScan} fill="outline">
        showScan
      </Button>
      {scanOpen ? <ScanCode getInfo={getInfo} /> : null}
    </div>
  )
}
export default memo(Demo)
