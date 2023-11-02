import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Florian from "../assets/images/People/Florian.jpg";
import Patick from "../assets/images/People/Patick.jpg";
import Paul from "../assets/images/People/Paul.jpg";
import cyan from "../assets/images/People/cyan.jpg";
import daniel from "../assets/images/People/daniel.jpg";
import emily from "../assets/images/People/emily.jpg";
import lena from "../assets/images/People/lena.jpg";
import michael from "../assets/images/People/michael.jpg";
import sarah from "../assets/images/People/sarah.jpg";
import sophie from "../assets/images/People/sophie.jpg";
import HeadTitle from "./HeadTitle";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "The website is beautiful! It's exactly what we needed, and the process was smooth and efficient.",
      author: "Micheal Gough",
      position: "USA",
      image: michael,
    },
    {
      quote:
        "I couldn't be happier with Webybuild's service. They delivered on time, and their creativity shone through with a fantastic user interface.",
      author: "Paul Wagner",
      position: "Germany",
      image: Paul,
    },
    {
      quote:
        "I am incredibly pleased with the results we got from the web development team. They really know their stuff!",
      author: "Cian Doyle",
      position: "Ireland",
      image: cyan,
    },
    {
      quote:
        "I've worked with a lot of web developers, but this experience was by far the best. Highly recommend!",
      author: "Patrick Byrne",
      position: "Ireland",
      image: Patick,
    },
    {
      quote:
        "The team at this web development company is not only skilled but also very understanding of our needs. Super happy",
      author: "Lena Meyer",
      position: "Germany",
      image: lena,
    },
    {
      quote:
        "From the first meeting to the final launch, everything was top-notch. Great job",
      author: "Emily Martin",
      position: "Canada",
      image: emily,
    },
    {
      quote:
        "Our new website has exceeded our expectations. It's user-friendly and looks amazing",
      author: "Daniel Tremblay",
      position: "Canada",
      image: daniel,
    },
    {
      quote:
        "Working with these developers was a breath of fresh air. They took our ideas and turned them into something wonderful.",
      author: "Sophie Williams",
      position: "Australia",
      image: sophie,
    },
    {
      quote:
        "This company understands the importance of a good web presence. They delivered beyond our hopes",
      author: "Sarah Weber",
      position: "Switzerland",
      image: sarah,
    },
    {
      quote:
        "The website they built is a game-changer for our business. Thank you for your hard work",
      author: "Florian Baumann",
      position: "Switzerland",
      image: Florian,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the auto-slide speed
    pauseOnHover: true,
  };

  return (
    <>
      <HeadTitle
        titleOne="Our"
        highlight="Clients"
        subTitle="Webybuild delivered a highly functional website with 99% uptime, timely deliveries, effective communication through Google Meet, chat, and email, all while maintaining reliability and efficiency."
      />
      <section className="bg-gray-900 p-4">
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 "
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <blockquote>
                    <p className="text-lg lg:text-2xl font-light text-white ">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={testimonial.image}
                      alt="profilepicture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <div className="pr-3 font-medium text-white">
                        {testimonial.author}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 ">
                        {testimonial.position}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
