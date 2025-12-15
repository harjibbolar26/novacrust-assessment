import localFont from 'next/font/local'
import { Outfit } from 'next/font/google'

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/clash-display/ClashDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/clash-display/ClashDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/clash-display/ClashDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
})
