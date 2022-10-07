import React from 'react'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
function Abt() {
  return (
    <>
    <div className={styles.ab}>FinTract Global</div>
    <div className={styles.ad}>
    71-75, Sheldon Street,
Convent Garden London
WC2h 9JQ
<br/>
+44-2037373227
<br/>
contact@fintract.co.uk
    </div>
    <div className={styles.ab1}>Services</div>
    <div className={styles.ad1}>
    Works

    About us
    </div>
    <div className={styles.ab2}>Blog</div>
    <div className={styles.ad2}>
   Career 

   Contact
    </div>
    <div className={styles.ab3}>Our channels</div>
 <div className={styles.linked}></div>
 <div className={styles.twit}></div>
 <div className={styles.gmai}></div>
 <div className={styles.faceb}></div>
 <div className={styles.copyri}>
 copyright ©2021 All rights reserved.
 </div>
    </>
  )
}

export default Abt