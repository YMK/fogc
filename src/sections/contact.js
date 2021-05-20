import React from 'react';
import ContactForm from './contact-form';
import Heading from '../components/Heading';

export default () => (
    <section id="contact" className="pt-20">
        <div className="container mx-auto px-8 lg:flex">
            <div className="text-center lg:text-left lg:w-1/2">
                <ContactForm />
            </div>
            <div className="lg:w-1/2 lg:ml-2 mt-2 lg:mt-0 flex self-stretch flex-col">
                <Heading>Find Us</Heading>
                <iframe scrolling="no" frameborder="0" className="pt-4 h-96 lg:h-5/6"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBv8W-Y8PDWdl4z3pg535ZT-pCqAVaznz4&amp;q=118 Cocklaw Street, Kelty, KY4 0DH" 
                    data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""
                ></iframe>
            </div>
        </div>
    </section>
);
