function CustomerService() {
  return (
    <>
      <section className="customerservice">
        <div className="container ">
          <img src="/Images/customerservice.png" alt="customerservice" />

          <div className="textwrapper flex jus__space--between col-center ">
            <p>
              We connect our customers <br />
              with the best, and help them
              <br /> keep up-and stay open.
            </p>
            <div>
              <div className="accordion flex jus__space--between">
                We connect our customers with the best?{" "}
                <div className="small__circle flex jus__Item--center">
                  {" "}
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="accordion flex jus__space--between">
                Android research & development rockstar?
                <div className="small__circle flex jus__Item--center">
                  {" "}
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerService;
