import React from "react";
import { CustomSection } from "./CustomSection";
import PlanImg1 from "../assets/images/plan_img.jpg";
import PlanImg2 from "../assets/images/plan_img1.jpg";
import PlanImg3 from "../assets/images/plan_img2.jpg";
const ServiceComponent = () => {
  const plans = [
    {
      imageSrc: PlanImg1,
      title: "FLOWER DECORATIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate",
      link: "#",
    },
    {
      imageSrc: PlanImg2,
      title: "BEST RESTAURANT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate",
      link: "#",
    },
    {
      imageSrc: PlanImg3,
      title: "HONEYMOON",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate",
      link: "#",
    },
  ];
  return (
    <div className="plane">
      <div className="container">
        <CustomSection
          title="Our Plane"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate"
        >
          <div className="row">
            {plans.map((plan, index) => (
              <Plan key={index} {...plan} />
            ))}
          </div>
        </CustomSection>
      </div>
    </div>
  );
};

export default ServiceComponent;

const Plan = ({ imageSrc, title, description, link }) => {
  return (
    <div className="col">
      <div className="plan_bax">
        <figure>
          <img src={imageSrc} alt="#" />
        </figure>
        <div className="plan_text">
          <h3>{title}</h3>
          <p>{description}</p>
          <a className="read_more" href={link}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

