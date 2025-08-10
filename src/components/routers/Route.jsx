import React from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { Outlet } from 'react-router'

function Route() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Route