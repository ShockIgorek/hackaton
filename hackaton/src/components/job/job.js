import '../job/job.css'
import '../job/card.css'

import React from 'react';
// import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';

import * as data from '../../api/vacancy.json'

const word = JSON.parse(data);
console.log(word);



const Job = () => (
    <div className="job">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
            scrollOnDevice={true}
            pauseOnHover={true}
            autoCycle={true}
            cycleInterval={10000}
            animationDuration={400}
            dots={false}
            arrows={true}
            showSides={false}
            swipe={true}
            sidesOpacity={0.8}
            slidesSpacing={10}//отступ
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={4}
            
        >
        <div className="card">
          <p className="Title">
          Медицинская сестра кабинета гинеколога, медсестра функциональной диагностики
          </p>
        </div>
        <div className="card">

        </div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
        <div className="card">11</div>
        </InfiniteCarousel>
        </div>
)


export default Job;