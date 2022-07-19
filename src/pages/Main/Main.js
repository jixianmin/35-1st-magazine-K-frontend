/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import './Main.scss';

function Main() {
  const [slide, setSlide] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlide(slide + 1);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [slide]);

  // if (slide > 3) {
  //   setSlide(1);
  // }

  function prevSlide() {
    setSlide(slide - 1);
  }

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  const firstSlide = slide === 1;
  const lastSlide = slide === 3;

  return (
    <div className="slideContainer">
      <div className="slideImg">
        <img src={`/images/main/mainSlide${slide}.jpg`} alt="mainSlide1" />
        <button onClick={prevSlide} className="numLeft" disabled={firstSlide}>
          prev
        </button>
        <button onClick={nextSlide} className="numRight" disabled={lastSlide}>
          next
        </button>
        <div className="num">
          <h1 className="prevNum">{slide}</h1>
          <h1 className="nextNum">3</h1>
        </div>
        <div className="slideInfo">
          <span>MAGAZINE B</span>
          <span>ISSUE NO.90</span>
          <div>LEMAIRE</div>
          <p>
            1991년 프랑스 파리에서 크리스토프 르메르가 설립한 르메르는
            <br />
            일상복이야말로 옷에 내재된 가능성을 유연하게 포현하는 평식임을
            보여줍니다.
          </p>
          <a>SHOP NOW</a>
        </div>
      </div>
      {/* <div className="slideImg">
          <img src="/images/main/mainSlide2.jpg" alt="mainSlide2" />
        </div>
        <div className="slideImg">
          <img src="/images/main/mainSlide3.jpg" alt="mainSlide3" />
        </div> */}
    </div>
  );
}
export default Main;
