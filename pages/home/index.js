import About from '../../components/home/abouts/about'
import Numerics from '../../components/home/abouts/numerics'
import Goal from '../../components/home/abouts/companyGoal'
import Members from '../../components/home/abouts/team'
import Testimonials from '../../components/home/abouts/testimonials'
import Contact from '../../components/home/abouts/contact'
import HomeLayout from '@/layouts/home'

const AboutUs = () => {
  return (
    <div>
      <About />
      <Numerics />
      <Goal />
      <Members />
      <Testimonials />
      <Contact />
    </div>
  );
}

AboutUs.layout = HomeLayout;
export default AboutUs;
