import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import { Provider } from "react-redux"
import { Home } from "./components/index"
import store from "./store"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
