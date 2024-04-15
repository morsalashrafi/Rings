import React from "react";
import Slider from "react-slick";
import Saya from "../assets/images/saya.png";

function Say() {
  const say = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

   const groomData = [
     {
       name: "Jacksmith sand",
       message:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
       imgSrc: Saya,
     },

     {
       name: "Jacksmith sand",
       message:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
       imgSrc: Saya,
     },

     {
       name: "Jacksmith sand",
       message:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
       imgSrc: Saya,
     },
   ];

  return (
    <div className="says">
      <div className="container">
        <div className="titlePage">
          <h2>What Is Says Our GROOMS</h2>
        </div>
        <div>
          <Slider {...say}>
            {groomData.map((groom, index) => (
              <div key={index} className="say-content">
                <div className="readert">
                  <div className="readert_img text_align_center">
                    <figure>
                      <img src={groom.imgSrc} alt="#" />
                    </figure>
                  </div>
                  <div className="readert_text">
                    <h3>{groom.name}</h3>
                    <p>{groom.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Say;
