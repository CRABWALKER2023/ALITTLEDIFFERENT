import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Little Different | Italian Children\'s Clothing Sale',
  description: 'Final sale on handmade Italian children\'s clothing. Up to 70% off.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
