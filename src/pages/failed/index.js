import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Cancelled = () => {
  const router = useRouter()
  const { query } = router
  const { ref } = query

  return (
    <div className={styles.page}>
      <Head>
        <title>Snugg Neighborhood Payment</title>
      </Head>
      <div className={styles.content}>
        {ref ? (
          <>
            <p className={styles.header}>Sorry! Something went wrong.</p>
            <p>Your transaction failed. Please contact Snugg Neighborhood and present this reference number:</p>
            <p className={styles.referenceNum}>{ref}</p>
            <p className={styles.redirecting}><strong>Please check your card balance if an amount is deducted.</strong></p>
            {/* <p className={styles.redirecting}>Redirecting you back to the app</p>
            <p className={styles.clickHere}>Click here if you aren&#39;t redirected</p> */}
          </>
        ) : (
          <>
            <p className={styles.header}>Reference number is not valid</p>
            <p className={styles.redirecting}>Please try go back to the app and try again</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Cancelled