import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>.
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-800 text-lg'>
                <p>I am learining new technologies and building projects. And these are some of the projects that I have completed. Feel free to check them out and share your feedback on my email or on github.</p>
            </div>

            <div className='flex flex-wrap gap-16 my-20'>
                {
                    projects.map((project) => (
                        <div className='lg:w-[400px] w-full' key={project.name}>
                            <div className='block-container w-12 h-12'>
                                <div className={`btn-back rounded-xl ${project.theme}`} />

                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img src={project.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain' />
                                </div>
                            </div>

                            <div className='mt-5 flex flex-col'>
                                <h4 className='text-2xl font-semibold font-poppins'>{project.name}</h4>
                                <p className='mt-2 text-slate-500'>{project.description}</p>
                                <div className='mt-5 flex items-center gap-2 font-poppins'>
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noreferrer noopenner'
                                        className='font-semibold text-blue-600'
                                    >
                                        View Project
                                    </Link>
                                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <hr className='border-slate-400' />
            <CTA />
        </section>
    );
};

export default Projects;;