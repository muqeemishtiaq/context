import React from 'react'
import './App.css'
import Context from './components/Context'
import Item from './components/Item'
import Cart from './components/cart'
function App() {
 
  return (
    <>
     < Context />
     <Item name="Iphone 14 Pro" price="999" />
      <Item name="MacBook Pro" price="2099" />
      <Item name="Ipad Pro" price= "799"/>
      <Item name="Apple watch" price="399"/>
      <Cart />
    </>
  )
}

export default App
