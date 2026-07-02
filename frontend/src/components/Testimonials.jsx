import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "../styles/testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "Excellent facilities and experienced teachers. My child has improved a lot.",
    },

    {
      name: "Neha Verma",
      review:
        "Best school environment with discipline and quality education.",
    },

    {
      name: "Amit Singh",
      review:
        "Smart classes and extracurricular activities are outstanding.",
    },

    {
      name: "Priya Sharma",
      review:
        "Teachers are very supportive and caring. Highly recommended.",
    },

    {
      name: "Vikas Kumar",
      review:
        "The school provides excellent academics and sports facilities.",
    },

    {
      name: "Sunita Verma",
      review:
        "Great atmosphere and modern infrastructure. Very satisfied.",
    },
  ];

  return (
    <section className="testimonials">

      <h1>What Parents Say</h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>{item.review}</p>

              <h3>{item.name}</h3>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Testimonials;