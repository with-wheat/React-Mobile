import React from 'react'
import { Button } from 'antd-mobile'

import styles from './index.module.less'
import Forms from './form'
import { useNavigate } from 'react-router-dom'
import Banner from '@/components/banner/index'

const Home = () => {
  const navigate = useNavigate()
  const toPath = () => {
    navigate('/demo/1234')
  }
  return (
    <div className={styles.demo}>
      <Banner />
      <div onClick={toPath} className={styles.demo1}>
        跳转路由
      </div>
      <Forms />
    </div>
  )
}

export default Home
