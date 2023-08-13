import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import "./blog.css";
function Blog() {
  return (
    <div className="gpt3__blog section__padding ">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gtp3__blog-group-a">
          <div className="gtp3__blog-group-a__blog-card">
            <img src={blog01} alt="blog01" />
            <div className="gtp3__blog-group-a__blog-card-text">
              <p>Sep 26, 2021</p>
              <h2>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="gtp3__blog-group-b">
          <div className="gtp3__blog-group-b__blog-card">
            <img src={blog02} alt="blog02" />
            <div className="gtp3__blog-group-b__blog-card-text">
              <p>Sep 26, 2021</p>
              <h2>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
          <div className="gtp3__blog-group-b__blog-card">
            <img src={blog03} alt="blog03" />
            <div className="gtp3__blog-group-b__blog-card-text">
              <p>Sep 26, 2021</p>
              <h2>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
          <div className="gtp3__blog-group-b__blog-card">
            <img src={blog04} alt="blog04" />
            <div className="gtp3__blog-group-b__blog-card-text">
              <p>Sep 26, 2021</p>
              <h2>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
          <div className="gtp3__blog-group-b__blog-card">
            <img src={blog05} alt="blog05" />
            <div className="gtp3__blog-group-b__blog-card-text">
              <p>Sep 26, 2021</p>
              <h2>
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </h2>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
