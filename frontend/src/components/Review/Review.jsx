import React, { useEffect } from 'react';
import Slider from "react-slick";
import { dataReviews } from '../../assets/dataReview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {

    const settings = {
        // accessibility: true,
        // arrows: true,
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        cssEase: "linear",
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

    useEffect(() => {
        const cards = document.querySelectorAll('.review-card');
        let maxHeight = 0;
        cards.forEach(card => {
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) maxHeight = cardHeight;
        });
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }, []);

    const truncateText = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };




  return (
    <>
        <style>
            {
                `.slick-slider:hover .slick-prev:before, .slick-slider:hover .slick-next:before {
                    color: grey;
                    font-size: 36px;

                }`
            }
        </style>
        {/* <div className="mx-auto"> */}
            <Slider {...settings}>
                {dataReviews.map((review, index) => (
                    <div key={index} className="p-2 h-auto min-h-[15rem] flex flex-col justify-between overflow-hidden rounded-lg shadow-xl review-card">
                        <div className="mb-1 text-xl font-bold text-gray-700 antialiased leading-snug" id="name">{review.name}</div>
                        <div className="mb-2 text-lg text-yellow-400 antialiased leading-snug" id="rating">{'\u2605'.repeat(review.rating)}</div>
                        <p className="text-base text-gray-700 antialiased leading-snug" id="description">{truncateText(review.comments,100)}</p>
                    </div>

                ))}
            </Slider>
        {/* </div> */}
    
    
    </>


  );
}

export default Review;