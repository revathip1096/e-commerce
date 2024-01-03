"use client"
import React from 'react'
import { useTheme } from '../_stores/theme'

function Themeprovider({children}) {
    const {theme}=useTheme()
  return (
    <html data-theme={theme} lang="en">
    <link rel="icon" type="image/x-icon" href="../icon.png"></link>
    
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
/>

    <body>{children}</body>
  </html>
  )
}

export default Themeprovider
