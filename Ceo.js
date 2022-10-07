import Image from 'next/image'
import React from 'react'
import styles from '/styles/Home.module.css'
function Ceo() {
  return (
    <div className={styles.ceoback}>
    <p className={styles.quote}>
    “Over the years, I have built lasting relationships with my clients and team , whose professional success I believe to be closely linked with our long-term progress.”
    </p>
    <div className={styles.imh}
    />
    <div className={styles.ceoname}>Debasis Chakroborty</div>
    <div className={styles.ceoname1}>CEO  FinTract Global</div>
     </div>
  )
}

export default Ceo