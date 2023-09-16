import Logo from './components/common/logo'
import Container from './components/common/container'
import Tooltip from './components/common/tooltip'
import Alert from './components/common/alert'
import Toggle from './components/common/toggle/toggle'
import AnimatedWrapper from './components/common/animationWrapper'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/search' element={<h1>search</h1>} />
        <Route path='/games' element={<h1>games</h1>} />
        <Route path='/contactus' element={<h1>contactus</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />

      </Routes>
    </>
  )
}

export default App
