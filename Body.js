import Image from 'next/image'
import React from 'react'
import styles from '/styles/Home.module.css'
function Body() {
  return (
    <div>
    <section className={styles.background+" "+styles.firstsec}>
    <div className={styles.boxmain}>
        <div className={styles.firsthalf}>
  <p className={styles.textbig}>FINTRACT GLOBAL</p>
       <p className={styles.textsmall}>
       Fintract Global takes your privacy very seriously.<br/>
        We may process your personal information for carefully<br/>
         considered and specific purposes which are in our interests<br/>
          and enable us to enhance the  services we provide. 
       </p>
      
        </div>
      <div className={styles.get} > Get started</div>
      <div className={styles.knowmore}>Know More</div>
    </div>
</section>
    </div>
  )
}

export default Body