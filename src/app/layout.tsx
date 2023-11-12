import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'B&M University',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk-UA">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
