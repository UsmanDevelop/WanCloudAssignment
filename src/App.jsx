import Home from './Pages/Home'
import Content from './Pages/Content'
import NotFound from './Pages/NotFound'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/showusers' element={<Content/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
