import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div>
          <h2>Our services</h2>
          <h3>
            Handshake infographic mass market
            <br />
            crowdfunding iteration
          </h3>
        </div>
        <div className="flex wrap">
          <div className="services__details">
            <div className="services__content flex ">
              <div className=" services flex flex__col--center ">
                <Card
                  img="../Images/service-1.png.png"
                  title="Cool feature title"
                  text="Learning curve network effects return on investment."
                />
                <Button
                  text="Explore Page"
                  startIcon={<i class="fa-solid fa-arrow-right"></i>}
                  className="blank flex align-self "
                />
              </div>
              <div className="services flex flex__col--center">
                <Card
                  img="../Images/service-2.png.png"
                  title="Cool feature title"
                  text="Learning curve network effects return on investment."
                />
                <Button
                  className="flex align-self blank"
                  text="Explore Page"
                  startIcon={<i class="fa-solid fa-arrow-right"></i>}
                />
              </div>
              <div className="services flex flex__col--center">
                <Card
                  img="../Images/service-3.png.png"
                  title="Cool feature title"
                  text="Learning curve network effects return on investment."
                />
                <Button
                  className="flex align-self blank"
                  text="Explore Page"
                  startIcon={<i class="fa-solid fa-arrow-right"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
