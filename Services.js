import Image from 'next/image'
import React from 'react'
import styles from '../fintract/styles/Home.module.css'

function Services() {
  return (
    <div>
    <div className={styles.serv}>Our Services</div>
<section>
<div className={styles.a1}>Business</div>
<div className={styles.a2}>Technologies</div>
<div className={styles.a3}>Security</div>
<div >

<div>
<p className={styles.cardd}>
<Image src="/ic1.png" 
width={70}
height={58}
/>
<h1>Banking service</h1>
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic
   typesetting, remaining essentially unchanged.

</p>
</div>
<div>
<p className={styles.cardd1}>
<Image src="/bank.png" 
width={70}
height={58}
/>
<h1>Open Banking</h1>
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic
   typesetting, remaining essentially unchanged.

</p>
</div>
<div>
<p className={styles.cardd2}>
<Image src="/sme.png" 
width={70}
height={58}
/>
<h1>SME Landing</h1>
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic
   typesetting, remaining essentially unchanged.

</p>
</div>
<div>
<p className={styles.cardd3}>
<Image src="/per.png" 
width={70}
height={58}
/>
<h1>B2B</h1>
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic
   typesetting, remaining essentially unchanged.

</p>
</div>
</div>
</section>

    </div>
  )
}

export default Services