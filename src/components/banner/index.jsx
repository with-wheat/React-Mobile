import React, { useRef } from 'react'
import { Swiper, Toast } from 'antd-mobile'

import styles from './index.module.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))

const Banner = () => {
  const ref = useRef(null)
  return (
    <>
      <Swiper autoplay loop>
        {items}
      </Swiper>
    </>
  )
}
export default Banner
