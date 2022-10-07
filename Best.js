import React from 'react'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
function Best() {
  return (
    <div>
    <div className={styles.why}>Why are We the best</div>
    <section className={styles.carwhy}>
    <br/>
    <Image src="/clock.png" 
width={80}
height={88}
/>
<br/><br/>
    <h1>On Time<br/></h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text
 ever since the 1500s, when an unknown
</p>
    </section>
    <section className={styles.carwhy2}>
    <br/>
    <Image src="/secure.png" 
width={80}
height={88}
/>
<br/><br/>
    <h1>Security<br/></h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text
 ever since the 1500s, when an unknown
</p>
    </section>
    <section className={styles.carwhy3}>
    <br/>
    <Image src="/timer.png" 
width={80}
height={88}
/>
<br/><br/>
    <h1>Fast Work<br/></h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text
 ever since the 1500s, when an unknown
</p>
    </section>
    </div>
  )
}

export default Best