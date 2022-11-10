import React from "react";
import styled from "styled-components";
import img1 from "../assets/subs.png";


export default function Subcribe() {

    return (
        <Section id="subcribe">
            <img alt="qq" src={img1} />
            <div className="content">

                <h3>Get special offers, and more from Traveler</h3>
                <p>Subscribe to see secret deals prices drop the moment you sign up!</p>
                <div className="sub">
                    <input type="text" placeholder="Email address" />
                    <button>Subcribe</button>
                </div>
            </div>

        </Section>
    );
}

const Section = styled.section`
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  img {
    width: 100%;
    border-radius: 1rem 0 0 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    .sub {
      display: flex;
      padding: 0.5rem;
      border-radius: 1rem;
          
      input {
        padding-left: 10px;
          
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
