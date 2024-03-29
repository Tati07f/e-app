import Main from '../components/Main'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { contentFulClient } from '../hooks/useContentFul'
import ProductPage from '../components/ProductPage'

export default function Home({ products }) {
  return (
    <div >
      
      <Head>
        <title>Makra</title>
        <meta name="description" content="Beauty Product Online Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      {/* <ProductPage products={products} /> */}

    </div>
  )
}

// this getServerProps run on every request
export async function getServerSideProps (context) {
  try {
    const entries = await contentFulClient.getEntries({
      content_type: 'product'
    })

    return {
      props: {
        error: null,
        products: entries.items
      }
    }

  } catch (error) {
    return {
      props: {
        error: error.message,
        products: []
      }
    }
  }


  
}