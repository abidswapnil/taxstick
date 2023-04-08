import '@/styles/app.scss'

export default function App({ Component, pageProps }) {
  let Layout = Component.layout || Fragment

    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}

