import Header from './components/header';
import Hero from './components/hero';
import Partners from './components/partners';
import Demo from './components/demo';
import Features from './components/features';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className='bg-primary'>
      <Header />
      <Hero />
      <Partners />
      <Demo />
      <Features />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
