import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="w-screen h-screen bg-main-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  )
}

export default App
