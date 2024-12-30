import BannerDetails from "./components/bannerdetails/BannerDetails"
import Blogs from "./components/blogs/Blogs"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Hero1 from "./components/hero/Hero1"
import Navbar from "./components/navbar/Navbar"
import OverViewCounter from "./components/overviewcounter/OverViewCounter"
import SimpleBanner from "./components/simplebanner/SimpleBanner"

function App() {
  return (
    <>
    <div className="dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero />
        <OverViewCounter />
        <BannerDetails reverse={true} />
        <BannerDetails reverse={false} />
        <SimpleBanner />
        <Blogs/>
        <Footer />
    </div>
    </>
  )
}

export default App