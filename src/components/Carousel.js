// Import React library
import React from 'react';

// Import Slider component from react-slick library
import Slider from 'react-slick';

// Import CSS styles for the Slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Carousel component function
const Carousel = ({ children }) => {
    // Settings for the Slider component
    const settings = {
        dots: true,                 // Show dots navigation
        infinite: true,             // Enable infinite loop
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 2000,        // Autoplay speed (milliseconds)
        arrows: false,              // Hide arrows navigation
        speed: 500,                 // Transition speed (milliseconds)
        slidesToShow: 3,            // Number of slides to show at once
        slidesToScroll: 1,          // Number of slides to scroll
        responsive: [               // Responsive settings
            {
                breakpoint: 1024,   // Breakpoint for medium screens
                settings: {
                    slidesToShow: 2,        // Adjust slidesToShow for medium screens
                    slidesToScroll: 1,      // Adjust slidesToScroll for medium screens
                    infinite: true,         // Enable infinite loop
                    dots: true,             // Show dots navigation
                },
            },
            {
                breakpoint: 600,    // Breakpoint for small screens
                settings: {
                    slidesToShow: 1,        // Adjust slidesToShow for small screens
                    slidesToScroll: 1,      // Adjust slidesToScroll for small screens
                    initialSlide: 1,        // Initial slide to show
                },
            },
            {
                breakpoint: 480,    // Breakpoint for extra small screens
                settings: {
                    slidesToShow: 1,        // Adjust slidesToShow for extra small screens
                    slidesToScroll: 1,      // Adjust slidesToScroll for extra small screens
                },
            },
        ],
    };

    // Render the Slider component with settings and children components
    return (
        <Slider {...settings}>
            {React.Children.map(children, (child) => (
                <div>{child}</div>
            ))}
        </Slider>
    );
};

// Export the Carousel component
export default Carousel;
