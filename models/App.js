import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import User from './components/User/User'
import Login from './components/Login/Login'
import Photo from './components/Photo/Photo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import ProtectedRoute from './components/Helper/ProtectedRoute'
import UserProfile from './components/User/UserProfile'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <ProtectedRoute path='conta/*' element={<User />} />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
