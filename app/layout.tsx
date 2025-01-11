import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Онлайн курс Ірини Рудницької',
  description: 'Навчіться відстоювати свої кордони без почуття провини',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

