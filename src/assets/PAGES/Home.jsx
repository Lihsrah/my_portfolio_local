import React, { useEffect, useRef } from "react";
import "../CSS/Home.css";
import hero_img from "../IMAGES/heroimg.svg"

const Home = () => {
  const sections = useRef([]); // To store references to each section

  useEffect(() => {
    const currentSections = sections.current; // Store the current value of sections

    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.isIntersecting) {
          // Add the .show class when the section is in the viewport
          target.classList.add("show");
          target.classList.remove("hidden");
        } else {
          // Add the .hide class when the section is out of the viewport
          target.classList.remove("show");
          target.classList.add("hidden");
        }
      });
    }, observerOptions);

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Use the stored currentSections to ensure the cleanup is based on the correct value
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="home">
        <section
          id="section1"
          ref={(el) => (sections.current[0] = el)}
          className="home-intro hidden"
        >
          <div className="content">
            <div className="first_content">
              <p>
                <span>✌🏻</span>
                Hi there! I'm Harshil
              </p>
            </div>
            <div className="second_content">
              <h1>
                a <span>Backend Developer</span>. I help startups{" "}
                <span>launch</span> and <span>grow</span> their products
              </h1>
            </div>
            <div className="third_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                pariatur dignissimos rem, unde inventore molestiae ipsam ad!
                Fugit harum ipsa accusamus modi temporibus doloribus hic commodi
                expedita, eveniet reiciendis numquam?x
              </p>
            </div>
          </div>
          <div className="hero_icon">
            <img src={hero_img} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
