import BlogCard from "./components/Card/Blog-card";
import Button from "../src/components/Button/Button";
function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container  flex jus__space--between">
          {" "}
          <BlogCard
            img="../Images/service-1.png.png"
            title="Category"
            date="November 22,2021"
            text="Pitch termsheet backing  validation focus release."
            imgManager="../Images/Ellipse 4.png"
            name="Chandler Bing"
          />
          <BlogCard
            img="../Images/service-2.png.png"
            title="Category"
            date="November 22,2021"
            text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            imgManager="../Images/Ellipse 4 (1).png"
            name="Rachel Green"
          />
          <BlogCard
            img="../Images/service-3.png.png"
            title="Category"
            date="November 22,2021"
            text="Beta prototype sales iPad gen-z marketing network effects value proposition."
            imgManager="../Images/Ellipse 4 (2).png"
            name="Monica Geller"
          />
        </div>
        <div className="flex jus__Item--center">
          <Button text="Load More" id="bkgWhite" />
        </div>
      </section>
    </>
  );
}

export default Blog;
