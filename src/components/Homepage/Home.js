import Hero from "./Hero";
import Services from "./Services";
import Connect from "./Connect";
import ConnectTwo from "./ConnectTwo";
import Testimonial from "./Testimonial";
import CustomerService from "./CustomerService";
import Blog from "./Blog";
import SendEmail from "./SendEmail";
import Footer from "./Footer";

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
