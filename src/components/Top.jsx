import React from "react";
import styled from "styled-components";
import img1 from "../assets/cafe.jpg";
import img2 from "../assets/restaurant.jpg";
import img3 from "../assets/hotel.jpeg";
import img4 from "../assets/market.jpg";
import img5 from "../assets/bar.jpg";
import img6 from "../assets/pub.jpg";

export default function Top() {
  const data = [
    {
      icon: img1,
      title: "Caffee",
      subTitle:
        "3 Location",
    },
    {
      icon: img2,
      title: "Restaurant",
      subTitle:
        "4 Location",
    },
    {
      icon: img3,
      title: "Hotel",
      subTitle:
        "5 Location",
    },
    {
      icon: img4,
      title: "Supermarket",
      subTitle:
        "7 Location",
    },
    {
      icon: img5,
      title: "Bar",
      subTitle:
        "2 Location",
    },
    {
      icon: img6,
      title: "Pub",
      subTitle:
        "1 Location",
    },
  ];
  return (
    <Section id="top">
      <div id="title" style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Top destinations</h2>
      </div>
      <div className="destinations">
        {data.map((service, index) => {
          return (

            <div className="destination">
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin: 2rem 0;
    .destination {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 0;
      background-color: aliceblue;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      text-align: center;
      font-size: 15px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .icon {
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .destinations {
      grid-template-columns: 1fr;
    }
  }
`;
