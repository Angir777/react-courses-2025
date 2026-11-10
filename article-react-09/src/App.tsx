
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import Contact from './views/Contact';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <>
      <div className="card">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<UserProfile />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
