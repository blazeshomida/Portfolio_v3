'use client'

import React from 'react'
import styles from './index.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import DashboardRow from './DashboardRow'

const Dashboard = ({ children, className}) => {




  return (
        <motion.div layout layoutId='dashboard' className={`container ${styles['main-grid']} ${styles[className]}`}>
            
           {children}  
        </motion.div>
  )
}

export default Dashboard