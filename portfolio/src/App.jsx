import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Work from './components/Work'
import Footer from './components/Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <NavigationBar />
      <Work />
      <Footer />
    </div>
  )
}

export default App
