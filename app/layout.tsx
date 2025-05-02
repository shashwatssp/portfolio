import type React from "react"
export const metadata = {
  title: "shashwatssp portfolio",
  description: "Terminal-style portfolio of Shashwat Shagun Pandey",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'