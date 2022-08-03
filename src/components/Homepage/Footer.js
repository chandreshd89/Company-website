function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container flex jus__space--between">
          <div className="rights flex flex__col--center jus__space--between">
            <img src="../Images/Logo.png" alt="logo" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <small>All rights reserved.</small>
          </div>
          <div className="landings flex flex__col--center jus__space--between">
            <h3>Landings</h3>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
          <div className="company flex flex__col--center jus__space--between">
            <h3>Company</h3>
            <a href="#">Home</a>
            <div>
              <a href="#">Careers</a>
              <span>Hiring!</span>
            </div>
            <a href="#">Services</a>
          </div>
          <div className="resources flex flex__col--center jus__space--between">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
