import React from "react";

function BlogPost(props) {
  return (
    <div className="row">
      <div className="blog_img">
        <figure>
          <img src={props.imageUrl} alt="#" />
        </figure>
        <span>
          {props.date}
          <br />
          {props.month}
        </span>
      </div>
      <div className="blog-right">
        <div className="marriage_text">
          <span>Post by: {props.author}</span>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <h4>
            <strong>Like</strong>{" "}
            <strong className="padd_right">Comment</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
