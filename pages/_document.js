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
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' type='image/png' href='/static/favicon.png' />

          <title>Next Brew</title>

          <meta key='description' name='description' content='A Next.js application listing Brewdogs beers using the Punk API' />,

          <link rel='stylesheet' href='/static/css/bulma.min.css' />
          <link rel='stylesheet' href='/static/css/nprogress.css' />
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
