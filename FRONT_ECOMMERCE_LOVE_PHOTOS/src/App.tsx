import { About } from "./Components/About"
import { Delivery } from "./Components/Delivery"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Products } from "./Components/Products"
import './Styles/global.css'

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Products />
        <Delivery />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
