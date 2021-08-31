import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const loopFunc = (index) => {
    if (index > people.length - 1) return 0;

    if (index < 0) return people.length - 1;

    return index;
  };

  // const prevReview = () => {
  //   setIndex((index) => {
  //     let prev = index - 1;
  //     return loopFunc(prev);
  //   });
  // };

  // const nextReview = () => {
  //   setIndex((index) => {
  //     let next = index + 1;
  //     return loopFunc(next);
  //   });
  // };

  const prevReview = () => {
    setIndex((index) => loopFunc(index - 1));
  };

  const nextReview = () => {
    setIndex((index) => loopFunc(index + 1));
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // return randomNumber;
    setIndex(loopFunc(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevReview} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextReview} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
