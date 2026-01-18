import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* HLS.js for video streaming */}
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script>
      </Head>
      <body className="bg-black text-white" style={{ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
