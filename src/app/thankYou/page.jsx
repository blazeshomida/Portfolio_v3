'use client'

import DashboardRow from '@/components/Dashboard/DashboardRow'
import Widget from '@/components/Widget'
import React from 'react'
import { usePathname } from "next/navigation";
import styles from './page.module.scss'


const ThankYou = () => {
    const page = usePathname()

  return (
    <DashboardRow page={page.slice(1)}>
        <Widget name={'thankyou'}>
            <div className={styles['widget-wrapper']}>
                <h1>Thank You!</h1>
            </div>
        </Widget>
    </DashboardRow>
  )
}

export default ThankYou