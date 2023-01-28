import Navbar from './components/navbar'
import './globals.css'
import { Rubik } from '@next/font/google'

const rubik = Rubik({
  weight: ['400','700'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: "--font-rubik"
})


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={rubik.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    
      <body className='p-4'> 
      <div className='mx-5'>
        {children}
      </div>
        
      </body>
    </html>
  )
}
