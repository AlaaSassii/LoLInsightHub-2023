import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar'
import PageNotFound from './routes/pageNotFound'
import { navLinks } from './helpers/navlinks'
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/search' element={<h1>search</h1>} />
        <Route path='/games' element={<h1>games</h1>} />
        <Route path='/contactus' element={<h1>contactus</h1>} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <input type="text" placeholder='input test' />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
  )
}

export default App
