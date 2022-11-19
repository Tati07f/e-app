import '../styles/globals.css'
import Layout from '../components/Layout'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

library.add( faCartShopping, faUser)



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
