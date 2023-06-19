import React from 'react'
import styles from './index.module.scss'

const Form = ({children}) => {
  return (
    <form action="https://formsubmit.co/bshomida@gmail.com" method="POST" className={styles['form']} >
      <input type="hidden" name="_subject" value="New form submission!" />
      {children}
      </form>
  )
}

export default Form