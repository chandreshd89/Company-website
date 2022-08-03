function ConnectTwo() {
  return (
    <>
      <section>
        <div className="container flex jus__space--between">
          <div className="connect-text  flex flex__col--center">
            <h2>
              We connect our customers with the best,and help them keep up-and
              stay open.
            </h2>
            <div className="check-content  ">
              <button className="flex">
                <div className="ml-1">
                  {" "}
                  <img src="../Images/feather.png" alt="feather" />
                </div>
                We connect our customers with the best.
              </button>
            </div>
            <div className="check-content  ">
              <button className="flex">
                <div className="ml-1">
                  <img src="../Images/eye.png" alt="eye" />
                </div>
                Advisor success customer launch party.
              </button>
            </div>
            <div className="check-content">
              <button className=" flex  ">
                <div className="ml-1">
                  <img src="../Images/sun.png" alt="eye" />
                </div>
                Business-to-consumer long tail.
              </button>
            </div>
          </div>
          <div className="connect__image">
            <img
              className="connect-3"
              src="../Images/connect-3.png"
              alt="connect-3"
            />
            <img
              className="blankcard"
              src="../Images/blankcard.png"
              alt="connect-4"
            />
            <img className="pie" src="../Images/Pie Graphic.png" alt="pie" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ConnectTwo;
