import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`w-full flex items-center fixed top-0 z-40 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-sm" : "bg-transparent"
        } px-4 sm:px-8 lg:px-16 py-4 sm:py-6`}
    >
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link
          to='/'
          className='flex items-center'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[20px] sm:text-[26px] lg:text-[36px] font-bold cursor-pointer'>
            Ceylan's Portfolio
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${active === nav.id ? "text-white" : "text-slate-500"
                } hover:text-white text-[16px] lg:text-[20px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {active === nav.id && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-quaternary"></div>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex justify-end items-center'>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-6 h-6 object-contain'
            />
          </button>

          <div
            className={`${!toggle ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
              } fixed top-[60px] right-0 h-screen w-[240px] bg-primary/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out`}
          >
            <ul className='list-none flex flex-col items-start p-6 gap-6'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-full font-medium cursor-pointer text-[16px] ${active === nav.id ? "text-quaternary" : "text-white/70"
                    } hover:text-white transition-colors duration-300`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full py-2">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
