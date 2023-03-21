import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import { Provider } from 'react-redux'




export default function Home() {
  return (
    <>
      <Head>
        <title>Location de voiture laayoune</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
      </main>
    </>
  )
}