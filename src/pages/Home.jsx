import Navbar from '../components/navBar'
import Hero from '../components/hero'
import Nosotros from '../components/Nosotros'
import ProductSection from '../components/productSection'
import Footer from '../components/footer'
import productos from '../data/productos'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Nosotros />

        <ProductSection productos={productos} />
      </main>

      <Footer />
    </>
  )
}

export default Home