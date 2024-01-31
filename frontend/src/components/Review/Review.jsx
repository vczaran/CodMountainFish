import React from 'react';
import Slider from "react-slick";
import { dataReviews } from '../../assets/dataReview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {

    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    };




  return (
    <div className="mx-auto my-5 ">
        <Slider {...settings}>
            {dataReviews.map((review, index) => (
                <div key={index} className="p-2 h-auto min-h-[200px] flex flex-col justify-between overflow-hidden rounded-lg shadow-lg bg-white ">
                    <div className="mb-2 text-xl font-bold" id="name">{review.name}</div>
                    <div className="mb-4 text-lg text-yellow-400" id="rating">{'\u2605'.repeat(review.rating)}</div>
                    <p className="text-sm text-gray-600 " id="description">{review.comments}</p>
                </div>

            ))}
        </Slider>
    </div>
  );
}

export default Review;