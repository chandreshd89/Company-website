import Button from "./components/Button/Button";

function Connect(props) {
  return (
    <>
      <section className="connect">
        <div className="container flex jus__space--between">
          <div className="connect__image">
            <img
              className="connect-1"
              src="../Images/connect-1.png"
              alt="connect-1"
            />
            <img
              className="connect-2"
              src="../Images/connect-2.png"
              alt="connect-2"
            />
          </div>
          <div className="connect-text  flex flex__col--center">
            <h2>
              We connect our customers with the best,and help them keep up-and
              stay open.
            </h2>
            <div className="check-content flex ">
              <div className="check flex jus__Item--center">
                <img src="../Images/check.png.png" alt="check" />
              </div>
              <p>We connect our customers with the best.</p>
            </div>
            <div className="check-content flex ">
              <div className="check flex jus__Item--center">
                <img src="../Images/check.png.png" alt="check" />
              </div>
              <p>Advisor success customer launch party.</p>
            </div>
            <div className="check-content flex ">
              <div className="check flex jus__Item--center">
                <img src="../Images/check.png.png" alt="check" />
              </div>
              <p>Business-to-consumer long tail.</p>
            </div>
            <Button text="Start Now" className="flex align-self" />
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default Connect;
