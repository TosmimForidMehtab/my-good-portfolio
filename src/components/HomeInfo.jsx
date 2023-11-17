import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi! I am <span className='font-semibold'>Tosmim 😊</span>
            <br />
            A MERN stack developer
        </h1>
    ),
    2: (
        <InfoBox text='A fresher developer with MERN and other skills' link='/about' btnText='Leran more about me!' />
    ),
    3: (
        <InfoBox text="Created projects such as Web Apps, GUI Apps, Mobile Apps, Utility Programs and some APIs" link='/projects' btnText='View my projects' />
    ),
    4: (
        <InfoBox text="Like my work and skills? Let's work together!" link='/contact' btnText='Contact me' />
    )
};


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;