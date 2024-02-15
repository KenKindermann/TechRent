// Hooks
import { useEffect } from "react";

// Libraries
import { Link } from "react-scroll";

const NavbarLinks = ({ showMobileNav, setShowMobileNav }) => {
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileNav]);

  return (
    <ul
      className={`flex gap-8 whitespace-nowrap ${
        showMobileNav
          ? `absolute inset-0 w-full h-full bg-slate-900 flex-col items-center justify-center transition-transform`
          : `-translate-x-full sm:-translate-x-0`
      }`}
    >
      <li className={`${showMobileNav ? `block` : `hidden lg:block`}`}>
        <Link
          to="dealsOfTheWeek"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Deals of the week
        </Link>
      </li>
      <li className={`${showMobileNav ? `block` : `hidden lg:block`}`}>
        <Link
          to="popular"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Popular
        </Link>
      </li>
      <li className={`${showMobileNav ? `block` : `hidden lg:block`}`}>
        <Link
          to="care-plus"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Care+
        </Link>
      </li>
      <li className={`${showMobileNav ? `block` : `hidden lg:block`}`}>
        <Link
          to="benefits"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Benefits
        </Link>
      </li>
      <li className={`${showMobileNav ? `block` : `hidden xl:block`}`}>
        <Link
          to="faq"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Faq
        </Link>
      </li>
      <li className={`${showMobileNav ? `block` : `hidden xl:block`}`}>
        <Link
          to="contact"
          smooth
          duration={500}
          className="transition duration:150 ease-out hover:text-pink-600 hover:ease-in cursor-pointer"
        >
          Contact
        </Link>
      </li>
      <img
        src="/src/assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
        alt="close button"
        className={`${showMobileNav ? `absolute top-6 right-4 cursor-pointer` : `hidden`}`}
        onClick={() => setShowMobileNav(false)}
      />
    </ul>
  );
};

export default NavbarLinks;
