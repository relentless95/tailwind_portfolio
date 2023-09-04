import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            numquam dignissimos blanditiis perspiciatis! Minus a dolorum
            distinctio possimus quos culpa aspernatur vel, totam voluptatum
            reprehenderit autem debitis ullam. Eos, quaerat. Aliquam incidunt
            iure animi doloremque est velit provident molestias laboriosam,
            optio explicabo voluptatem quam alias mollitia quidem in neque
            magni! Commodi facilis hic sit quos nihil. Accusamus, fugiat!
            Numquam, qui.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
