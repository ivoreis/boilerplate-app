import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import config from '@/lib/config'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{config.title}</title>
                <meta name="description" content={config.title} />
            </Head>
            <div role="main" className="flex flex-col items-stretch">
                <Header />
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
