import Hero from "../../Hero";
import Services from "../../Services";
import Connect from "../../Connect";
import ConnectTwo from "../../ConnectTwo";
import Testimonial from "../../Testimonial";
import CustomerService from "./Sections/CustomerService";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Connect />
      <ConnectTwo />
      <Testimonial />
      <CustomerService />
    </>
  );
}

export default Home;
