"use client"
import React from 'react'
import { useTheme } from '../_stores/theme'

function Themeprovider({children}) {
    const {theme}=useTheme()
  return (
    <html data-theme={theme} lang="en">
    <body>{children}</body>
  </html>
  )
}

export default Themeprovider
