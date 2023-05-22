import React from 'react'

import './home.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

export default function home() {
  return (
    <>
      <Header />
      <main className='container m-auto text-center'>
        <h1>Home page</h1>
      </main>
      <Footer/>
    </>
  )
}
