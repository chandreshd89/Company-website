import Card from "../Card/Card";
import Button from "../Button/Button";

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
              {" "}
              <div className=" services flex  ">
                {[
                  {
                    img: "../Images/service-1.png.png",
                    title: "Cool feature title",
                    text: "Learning curve network effects return on investment.",
                    textBtn: "Explore Page",
                  },
                  {
                    img: "../Images/service-2.png.png",
                    title: "Cool feature title",
                    text: "Learning curve network effects return on investment.",
                    textBtn: " Cool feature title",
                  },

                  {
                    img: "../Images/service-3.png.png",
                    title: "Cool feature title",
                    text: "Learning curve network effects return on investment.",
                    textBtn: " Explore Page",
                  },
                ].map((data) => {
                  return (
                    <div className="services flex flex__col--center">
                      <Card
                        img={data.img}
                        title={data.title}
                        text={data.text}
                      />
                      <Button
                        className="flex align-self blank"
                        textBtn={data.textBtn}
                        startIcon={<i class="fa-solid fa-arrow-right"></i>}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
