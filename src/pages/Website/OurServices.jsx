import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/our-services-banner.webp";
import { allServices, services } from "../../data/constant";
import line from "../../assets/images/line.png";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import SolveITNeeds from "../../components/Website/SolveITNeeds";

const OurServices = () => {
  return (
    <div className="landing-bg">
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          className="h-full object-cover w-full object-center"
          alt="banner"
          width="800"
          height="600"
        />
      </div>
      <div
        id="services"
        className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
      >
        <div className="blurred-blue left-[-10%] top-[-10%]"></div>
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Our Services</h6>
          </div>
          <h1
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-2xl capitalize"
          >
            We provide the best services
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl">
            At HAASA AI, we offer a wide array of tailored digital solutions to
            help businesses unlock their full potential. Our team works with the
            latest technologies and proven strategies to create solutions that
            are not only effective but also scalable and future-ready. We strive
            to empower businesses to grow, improve operational efficiency, and
            stay ahead of the competition in an increasingly digital world.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
          >
            {allServices.map((item) => (
              <ServiceItemCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default OurServices;
