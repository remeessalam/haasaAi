import React from "react";
// import line from "../assets/images/line.png";
import {
  appDevelopmentWorkflow,
  generalDevelopmentWorkflow,
  webDevelopmentWorkflow,
} from "../data/constant";
import {
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
  FaUsers,
  FaBolt,
} from "react-icons/fa";

const WorkFlow = ({ page }) => {
  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We stay at the forefront of technology and continuously seek new, more effective ways to address challenges.",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Quality",
      description:
        "We are committed to delivering the highest quality solutions that not only meet but exceed expectations.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We conduct our business with honesty, respect, and transparency, building long-term relationships based on trust.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We believe in working as a team — with both our clients and our internal teams — to deliver the best possible results.",
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Agility",
      description:
        "In a rapidly changing world, we are flexible and adaptable, ensuring that our solutions remain relevant and impactful.",
    },
  ];

  let workflow;

  if (page === "web-development") {
    workflow = webDevelopmentWorkflow;
  } else if (page === "app-development") {
    workflow = appDevelopmentWorkflow;
  } else {
    workflow = generalDevelopmentWorkflow;
  }
  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      {/* Our Approach Section */}
      <div className="wrapper">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Approach
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
            <p>
              At the heart of everything we do is a customer-centric approach.
              We firmly believe that each business is unique, and that's why we
              take the time to fully understand your goals, challenges, and
              vision.
            </p>
            <p>
              Once we've built that understanding, we work closely with you to
              create a solution tailored to your specific needs. This
              collaborative and customized approach ensures that we deliver
              impactful, results-driven solutions.
            </p>
            <p>
              We also value transparency, so we maintain open communication
              throughout the entire process — from ideation to deployment. By
              doing so, we ensure that all your expectations are met and that
              you stay involved at every step.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="text-primary-600 bg-primary-50 p-3 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
