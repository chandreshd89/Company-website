import ButtonArrow from "./components/Button/Button-Arrow";
import CardTest from "./components/Card/testimonial-card";

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
            <CardTest
              title="“Buyer buzz partner network disruptive non-disclosure agreement business”"
              img="../Images/Ellipse 4.png"
              name="Albus Dumbeldore"
              manager="Manager @ Howarts"
            />
            <CardTest
              title="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
              img="../Images/Ellipse 4 (1).png"
              name="Severus Snape"
              manager="Manager @ Slytherin"
            />
            <CardTest
              title="“Release facebook responsive web design business model canvas seed money monetization.”"
              img="../Images/Ellipse 4 (2).png"
              name="Harry potter"
              manager="Manager @ Gryffindor"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
