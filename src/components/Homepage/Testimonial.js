import ButtonArrow from "../Button/Button-Arrow";
import CardTest from "../Card/testimonial-card";

function Testimonial() {
  return (
    <>
      <section className="testimonials backGround-color">
        <div className="container">
          <div className="flex jus__space--between mb2">
            <h2>
              An enterprise template to ramp <br />
              up your company website
            </h2>
            <div>
              <ButtonArrow startIcon={<i class="fa-solid fa-arrow-left"></i>} />
              <ButtonArrow
                startIcon={<i class="fa-solid fa-arrow-right"></i>}
              />
            </div>
          </div>
          <div className="flex flex__wrap jus__space--between ">
            {[
              {
                img: "../Images/Ellipse 4.png",
                title:
                  "“Buyer buzz partner network disruptive non-disclosure agreement business”",
                name: "Albus Dumbeldore",
                manager: "Manager @ Howarts",
              },
              {
                img: "../Images/Ellipse 4 (1).png",
                title:
                  "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
                name: "Severus Snape",
                manager: "Manager @ Slytherin",
              },

              {
                img: "../Images/Ellipse 4 (2).png",
                title:
                  "“Release facebook responsive web design business model canvas seed money monetization.”",
                name: "Harry potter",
                manager: "  Manager @ Gryffindor",
              },
            ].map((data) => {
              return (
                <CardTest
                  title={data.title}
                  img={data.img}
                  name={data.name}
                  manager={data.manager}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
