import Toggle from './components/common/toggle/toggle'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar'
import PageNotFound from './routes/pageNotFound'
function App() {
  return (
    <>
      <Navbar links={[{ name: 'home', path: '/' }, { name: 'Champion & Match Hub', path: '/search' }, { name: 'games', path: '/games' }]} />

      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/search' element={<h1>search</h1>} />
        <Route path='/games' element={<h1>games</h1>} />
        <Route path='/contactus' element={<h1>contactus</h1>} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App
