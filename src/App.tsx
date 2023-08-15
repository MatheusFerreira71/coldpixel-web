
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import { Computer } from './assets/Computer';
import { Phone } from './assets/Phone';
import { ShoppingCart } from './assets/ShoppingCart';
import { Utilities } from './assets/Utilities';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
      <main>
        <header>
          <Navbar />
          <section className="banner container">
            <div className="left-content">
              <p className="banner-subtitle">E-COMMERCE E DESENVOLVIMENTO WEB</p>
              <p className="banner-title">
                <span className="primary">Cold</span>
                <span className="secondary">Pixel</span>
              </p>
              <p className="banner-text">Agência digital especializada em e-commerces, landing pages,</p>
              <p className="banner-text">intengrações e outros inúmeros serviços voltados para WEB</p>
            </div>
            <div className="right-content">
              <div className="icons">
                <Computer />
                <div className="icon2">
                  <Phone />
                </div>
                <div className="icon3">
                  <ShoppingCart />
                </div>
                <Utilities />
              </div>
              <img src="woman.png" alt="Foto do banner" className="bottom-align" />
            </div>
          </section>
        </header>
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
