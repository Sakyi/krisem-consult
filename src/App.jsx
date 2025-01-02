import React from "react"
import BannerDetails from "./components/bannerdetails/BannerDetails"
import Blogs from "./components/blogs/Blogs"
import ContactUs from "./components/contact -us/ContactUs"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import OverViewCounter from "./components/overviewcounter/OverViewCounter"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Services"
import SimpleBanner from "./components/simplebanner/SimpleBanner"
import PopUp from "./components/popup/PopUp"

function App() {

const [orderPopup, setOrderPopUp] = React.useState(false);

const handleOrderPopup = () => {
  setOrderPopUp(!orderPopup)
}

  return (
    <>
    <div className="dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero handleOrderPopup={handleOrderPopup} />
        <OverViewCounter />
        <BannerDetails reverse={true} />
        <BannerDetails reverse={false} />
        <Projects />
        <SimpleBanner />
        <Services />
        <Blogs/>
        <PopUp orderPopup={orderPopup} setOrderPopUp={setOrderPopUp} />
        <Footer />
    </div>
    </>
  )
}

export default App