import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* HLS.js for video streaming */}
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1"></script>
        
        {/* Fonts */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.cdnfonts.com/css/myriad-pro');
          
          * {
            font-family: 'Myriad Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          }
        ` }} />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
