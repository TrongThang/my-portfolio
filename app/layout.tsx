import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Phan Trọng Thắng",
  description: "Full Stack Developer chuyên phát triển ứng dụng web và hệ thống IoT",
  keywords: "Full Stack Developer, Node.js, React, TypeScript, IoT, Portfolio",
  authors: [{ name: "Trọng Thắng" }],
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description: "Full Stack Developer chuyên phát triển ứng dụng web và hệ thống IoT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
