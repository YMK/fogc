import React from 'react';
import ContactForm from './contact-form';

export default () => (
    <section id="contact" className="pt-20">
        <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
            <ContactForm />
        </div>
        <div className="lg:w-1/2 lg:self-center lg:ml-2 mt-2 lg:mt-0 flex justify-center">
            Test
        </div>
        </div>
    </section>
);
