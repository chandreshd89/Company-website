import BlogCard from "../Card/Blog-card";
import Button from "../Button/Button";
function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container csContainerheight">
          <div>
            <h2>Our Blog</h2>
            <h3>
              Value proposition accelerator product
              <br /> management venture
            </h3>
          </div>
          <div className="blogMart  flex jus__space--between col-center">
            {[
              {
                img: "../Images/service-1.png.png",
                text: "Pitch termsheet backing  validation focus release.",
                imgManager: "../Images/Ellipse 4.png",
                name: "Chandler Bing",
              },
              {
                img: "../Images/service-2.png.png",
                text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
                imgManager: "../Images/Ellipse 4 (1).png",
                name: "Rachel Green",
              },

              {
                img: "../Images/service-3.png.png",
                text: "Beta prototype sales iPad gen-z marketing network effects value proposition.",
                imgManager: "../Images/Ellipse 4 (2).png",
                name: "Monica Geller",
              },
            ].map((data) => {
              return (
                <BlogCard
                  img={data.img}
                  title="Category"
                  date="November 22,2021"
                  text={data.text}
                  imgManager={data.imgManager}
                  name={data.name}
                />
              );
            })}
          </div>
          <div className="flex jus__Item--center  ">
            <Button textBtn="Load More" className="bkgWhite" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
