import React from 'react'
import styles from '/styles/Home.module.css'

function Sign() {
  return (
    <div className={styles.sign}>
    <p className={styles.sitext}>Sign Up to Open investupdates </p>
    <form>
    <input className={styles.signinput}/>
    <button className={styles.signbutton}>Subscribe Now</button>
    <p className={styles.signdec}>
    By submitting this form, you are agreeing to 
    receive marketing communications from G2.
    </p>
    </form>
    </div>
  )
}

export default Sign