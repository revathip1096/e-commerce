"use client"
import Head from 'next/head';
import { useTheme } from '../_stores/theme';
import { useEffect } from 'react';

function Themeprovider({ children }) {
  const { theme,settheme } = useTheme();
  useEffect( ()=>{
   settheme(theme);
   console.log('theme123',theme);
  },[])


  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="../icon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        />
      </head>
      <body data-theme={theme}>{children}</body>
    </html>
  );
}
export default Themeprovider;