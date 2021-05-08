import Document, { Html, Head, Main, NextScript } from 'next/document';
import Analytics  from '../components/Analytics';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

          <meta name="google-site-verification" content="GxiDU6nH4tzaqE7mmbuwOY1MN0GIy3N1zD0zZtVeS4E" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        </Head>
        <DefaultSeo {...SEO} />
          <body>
            <Main />
            <NextScript />
            <Analytics />
          </body>
      </Html>
    )
  }
}