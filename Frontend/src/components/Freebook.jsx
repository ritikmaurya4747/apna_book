import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

// Card banane ke liye qki ishme scroll tha so yaha se liya aur ye sab ipmort bhi kiye  (https://react-slick.neostack.com/)

function Freebook() {
  // Scroll ka code yahi hai
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // To json data filter
  const filterData = list.filter((data) => data.category === "Free");
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="">
          <h1 className="font-semibold text-xl pb-2">
            Free offered Courses Books
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, id
            et necessitatibus distinctio distinctio nesciunt dolorem minima esse
            reiciendis! Ipsum, eaque?
          </p>
        </div>

        <div className="">
          <Slider {...settings}>
            {filterData.map((item)=>(
                //parent to child data send in cards is child
                <Cards item = {item} key={item.id}/> 
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
