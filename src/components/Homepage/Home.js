import Hero from "../Homepage/Hero";
import Services from "./Services";
import Connect from "./Connect";
import ConnectTwo from "./ConnectTwo";
import Testimonial from "./Testimonial";
import CustomerService from "./CustomerService";
import Blog from "./Blog";
import SendEmail from "./SendEmail";
import Footer from "./Footer";
import "../IpadStyles/ipadStyles.css";
import "../samsungStyles.css";
import "../Card/card.module.css";
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Connect />
      <ConnectTwo />
      <Testimonial />
      <CustomerService />
      <Blog />
      <SendEmail />
      <Footer />
    </>
  );
}

export default Home;
