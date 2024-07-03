import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Detail from './components/deatil.jsx'
import Home from './components/home.jsx'
import {Provider} from 'react-redux';
import { store } from './store/store.js'
import Wishlist from './components/wishlist.jsx'

const route = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>}>
      <Route  path='/' element={<Home/>}></Route>
      <Route  path='/detail' element={<Detail/>}></Route>
      <Route  path='/wishlist' element={<Wishlist/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>
)
