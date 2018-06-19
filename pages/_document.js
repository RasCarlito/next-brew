import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/static/css/bulma.min.css' />
          <link rel='stylesheet' href='/static/font-awesome/css/font-awesome.min.css' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
