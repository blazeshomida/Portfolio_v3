import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

const Button = ({children, variation, elementType, href, type}) => {
    const className = `${styles['button']} ${styles[variation]}`
  return (
    <>
    {elementType === 'link' 
    ? <Link className={className} href={href}>{children}</Link>
    : <button type={type} className={className}>{children}</button>}
    </>
  )
}

export default Button