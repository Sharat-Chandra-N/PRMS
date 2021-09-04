import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Pages/Navbar'
import './App.css'
import BkGndImage from "./Pages/BkGndImage"
import Services from "./Pages/Services"
import MainInfo from "./Pages/MainInfo"
import ContactMe from "./Pages/ContactMe"
import Footer from "./Pages/Footer"
import TimeLineElements from "./Pages/TimeLineElements"
import Testimonial from './Pages/Testimonial'
import AboutUs from "./Pages/AboutUs"

function App() {
  return (
    <div>
      <Navbar />
      <BkGndImage />
      <Services />
      <MainInfo />
      <TimeLineElements />
      <Testimonial />
      <AboutUs />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
