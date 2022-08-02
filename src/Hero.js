import Button from "./components/Button/Button";

function Hero() {
  return (
    <>
      <div className="backGround-color ">
        <div className="container">
          <div className="ellipse__position">
            <img src="../Images/Ellipse 9.png" alt="ellipse-9" />
          </div>
          <div className=" flex jus__space--between">
            <div className="company__logo">
              <img src="../Images/Logo.png" alt="Company-logo" />
            </div>
            <nav className="company__Header--nav">
              <a href="#">Product</a>
              <a href="#">Services</a>
              <a href="#">About</a>
              <button className="Login__button">Log In</button>
            </nav>
          </div>
          <section className="hero flex jus__space--between">
            <div className="hero__template flex flex__col--center">
              <h1>
                Save time by building
                <br /> fast with Boldo Template
              </h1>
              <p>
                Funding handshake buyer business-to-business metrics ipad
                partnership.
              </p>
              <p>
                First mover advantage innovator success deployment nn-disclosure
              </p>
              <div className="button__wrapper flex">
                {" "}
                <Button text="Buy Template" />
                <Button text="explore " />
              </div>
            </div>
            <div className="hero__image">
              <img src="../Images/hero graphics.svg" alt="hero__graphics" />
            </div>
          </section>
          <div className="logos">
            <img src="../Images/Logos.png" alt="Logos" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
