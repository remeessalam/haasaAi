import React from "react";
import img1 from "../../assets/images/services-details/blockchain1.jpg";
import img2 from "../../assets/images/services-details/blockchain2.jpeg";
import { Link } from "react-router-dom";
import { allServices } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const BlockchainDevelopment = () => {
  const prev = allServices[9];
  const next = allServices[11];
  const servicedetails = allServices[10];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={servicedetails.img}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          {servicedetails.category}
        </h2>
        <p data-aos="fade-up" className="description text-secondary">
          {servicedetails.description}
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          What We Offer{" "}
        </h2>
      </div>
      <div className="grid lg:grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={servicedetails.img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="app development"
          />
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <ul className="pl-5">
            {servicedetails.offerings.map((obj, i) => (
              <li key={i} className="list-disc text-secondary font-semibold">
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-secondary">{servicedetails.servicedescription}</p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlockchainDevelopment;
