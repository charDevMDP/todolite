'use client'
import Navbar from './components/navbar'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    
      <body className='p-4'> 
      <Navbar/>
      <div className='mx-5'>
        {children}
      </div>
        
      </body>
    </html>
  )
}
