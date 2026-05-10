import SiteFooter from "./_components/site-footer";
import SiteHeader from "./_components/site-header";
import "./globals.css";

export const metadata = {
  title: "YAKINIKU AGE GUIDE | 年代別おすすめ焼肉部位ガイド",
  description:
    "10代から50代以上まで、年代に合った焼肉部位・焼き方・食べ方を上品に紹介する焼肉ガイド。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
