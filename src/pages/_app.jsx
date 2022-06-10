import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Igor | dev</title>
    </Head>
    <Header />
    <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
