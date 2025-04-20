import { Html, Head, Main, NextScript } from "next/document";
//sayfanın tamamına uygulanacak olan html değişikliklerini yapar
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main /> {/* Sayfanın içeriği buraya render edilir */}
        <NextScript />{/* Gerekli Next.js scriptleri buraya eklenir */}
      </body>
    </Html>
  );
}
