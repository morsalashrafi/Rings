import React from 'react'
import BlogPost from "./BlogPost";
import BlogImg1 from "../assets/images/blog_img1.jpg";
import BlogImg2 from "../assets/images/blog_img2.jpg";

function BlogComponent() {
  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="titlePage">
            <h2>FROM THE BLOG</h2>
          </div>
          <div className="blog_bg">
            <BlogPost
              imageUrl={BlogImg1}
              date="06"
              month="Feb"
              author="Marriage"
              title="Tempor incididunt ut labore et dolore"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            />
            <BlogPost
              imageUrl={BlogImg2}
              date="06"
              month="Feb"
              author="Marriage"
              title="Tempor incididunt ut labore et dolore"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;