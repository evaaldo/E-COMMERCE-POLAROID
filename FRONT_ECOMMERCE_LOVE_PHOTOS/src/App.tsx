import { About } from "./Components/About"
import { Delivery } from "./Components/Delivery"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Product } from "./Components/Product"
import './Styles/global.css'

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Product
          Id={10}
          Name="Polaroid de mesa"
          Description="Polaroid de mesa spotify. A polaroid de mesa com uma foto da escolha do cliente e o QR code do spotify para redirecionar à uma música desejada."
          Price="39.90"
          Base64=""
        />
        <Delivery />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
