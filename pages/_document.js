import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return{...initialProps}
    }
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@500&display=swap" rel="stylesheet"/>
           <body>
           <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument