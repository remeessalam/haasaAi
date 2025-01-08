import { Link as ScrollLink } from "react-scroll";

export default function SideNavigation() {
  const navItems = [
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "about", label: "About" },
    { id: "ourapproach", label: "Our Approach" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-1 top-1/2 -translate-y-1/2 z-50">
      <ul className="hidden lg:flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              activeClass="bg-secondary text-primary"
              className="  rounded-lg block hover:scale-105  group cursor-pointer text-white bg-primary transition-all duration-300"
            >
              <div className=" flex flex-wrap w-[7rem]    duration-300  whitespace-nowrap  px-2 py-1 rounded shadow-md text-sm  group-hover:opacity-100 transition-all">
                {item.label}
              </div>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
