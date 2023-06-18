import './globals.css'
import Nav from './Nav'
import { Inter } from 'next/font/google'
import AuthContext from './auth/AuthContext'
import QueryWrapper from './QueryWrapper'

export const metadata = {
  title: 'Post it',
  description: 'Generated by create next app'
}

const inter = Inter({
  preload: true,
  subsets: ['latin']
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body
        className={`${inter.className} px-4 sm:max-w-lg sm:mx-auto bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200`}
      >
        <QueryWrapper>
          <AuthContext>
            <Nav />
            {children}
          </AuthContext>
        </QueryWrapper>
      </body>
    </html>
  )
}
