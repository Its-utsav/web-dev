import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Home from './components/home/Home.jsx'
import { User } from './components/user/User.jsx'
import Github, { gihubData } from './components/github/Github.jsx'

//  way 1
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [{
//     path: '',
//     element: <Home />,
//   },
//   {
//     path: 'about',
//     element: <About />
//   },
//   {
//     path: 'contact',
//     element: <Contact />
//   }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' loader={gihubData}  element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
