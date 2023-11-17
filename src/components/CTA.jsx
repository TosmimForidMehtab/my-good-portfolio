import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>Have a project in mind? <br className='hidden sm:block' /> Let's work together!</p>

            <Link to="/contact" className='btn'>
                Contact Me
            </Link>
        </section>
    );
};

export default CTA;