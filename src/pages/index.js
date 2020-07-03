import React from 'react';
import Layout from '../components/layout/Layout';
import HeroImage from '../images/hero.jpg';

import Feedback from '../sections/feedback/index.js';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Friends of <br />Gordon Cottage
          </h1>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            Friends of Gordon Cottage provide funding and support to Gordon Cottage Child Development Centre (CDC), based in Kelty, Fife.
          </p>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            Gordon Cottage CDC provide a play based approach to assessment and therapy for children who have a wide variety of additional support needs. Our aim is to work with parents to enhance the abilities of all children who have development problems. We believe that every child has the right to the opportunity to fulfil their full potential.
          </p>
        </div>
        <div className="lg:w-1/2 lg:self-center lg:ml-2 mt-2 lg:mt-0">
          <img src={HeroImage} alt="Image of a ladybird, drawn by a child" />
        </div>
      </div>
    </section>
    <Feedback></Feedback>
  </Layout>
);
