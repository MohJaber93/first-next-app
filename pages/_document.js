import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    console.log("testing");
    return (
      <Html lang="en">
        <Head>
          {/* description meta about the site  */}
          <meta name="description" content="A programming portfolio" />
          {/* For google crawler to tell it we don't want our page to be indexed */}
          <meta name="robots" content="noindex, nofollow" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>{`
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Itim", cursive;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
