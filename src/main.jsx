import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Chat from './screens/Chat'
import ChatsHome from './screens/ChatsHome'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile/:userId',
    element: <Profile />
  },
  {
    path: '/chat',
    element: <ChatsHome />
  },
  {
    path: '/chat/:userId',
    element: <Chat />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
