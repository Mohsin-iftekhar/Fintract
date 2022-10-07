import React from 'react'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
function Clients() {
  return (
    <div className={styles.clients}>
    <div className={styles.cl}>Our Clients</div>
    <div className={styles.pay}></div>
    <div className={styles.amaz}></div>
    <div className={styles.buck}></div>
    <div className={styles.goog}></div>
    </div>
  )
}

export default Clients