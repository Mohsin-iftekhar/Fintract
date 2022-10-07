import React from 'react'
import styles from '../fintract/styles/Home.module.css'
function About() {
  return (
    <div>
    <div className={styles.about}>About Us</div>
    <div className={styles.aboutdesc}>
    Fintract Global takes your privacy very seriously.
     We may process your personal information far carefully considered and specific<br/>
      purposes which are in our interests and enable us to enhance the services we provide, but 
      which we believe also benefit our customers.
    </div>
    </div>
  )
}

export default About