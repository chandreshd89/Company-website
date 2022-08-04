function SendEmail() {
  return (
    <>
      <section className="sendemail ">
        <div className="backGround-color bor-r ">
          <div className="sendemail__container ">
            <div className="ellipse__position--Two">
              <img src="/Images/Ellipse 9.png" alt="ellipse-9" />
            </div>
            <div className="email__wrapper col-center">
              <h2>
                An enterprise template to ramp <br />
                up your company website
              </h2>
              <form className="center">
                <input id="emailtext" type="email" value="Your Email Address" />
                <input id="submitBtn" type="submit" value="Start Now" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendEmail;
