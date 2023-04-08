import AboutUs from './home'
import Hero from "../components/home/hero"
import HomeLayout from '../layouts/home'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
    </>
  )
}

Home.layout = HomeLayout
export default Home;

