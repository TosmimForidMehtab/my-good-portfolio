import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { github } from '../assets/icons';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const Contact = () => {

    const formRef = useRef(null);

    const [form, setform] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setcurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = (e) => {
        setcurrentAnimation('walk');
    };

    const handleBlur = (e) => {
        setcurrentAnimation('idle');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        setcurrentAnimation('hit');
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Tosmim",
                from_email: form.email,
                to_email: "johnhowardtest@gmail.com",
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({
                show: true,
                text: 'Message sent successfully',
                type: 'success'
            });

            setTimeout(() => {
                hideAlert();
                setcurrentAnimation('idle');
                setform({ name: '', email: '', message: '' });
            }, 3000);

            setform({ name: '', email: '', message: '' });
        }).catch((error) => {
            setIsLoading(false);
            setcurrentAnimation('idle');
            console.log('FAILED...', error);
            showAlert({
                show: true,
                text: 'Failed to send message',
                type: 'danger'
            });
        });
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-container h-full'>
            {alert.show && <Alert {...alert} />}
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Let's Talk</h1>

                <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} ref={formRef}>
                    <label className='text-black-500 font-semibold'>
                        What can I call you?
                        <input
                            name='name'
                            className='input'
                            type="text"
                            placeholder='eg. Damian'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Let's exchange emails
                        <input
                            name='email'
                            className='input'
                            type="email"
                            placeholder='eg. desmondamian@example.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Wanna say something?
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='I love your work.'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>

                    <button className='btn' type='submit' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>

                <div className='mt-10 btn-front flex justify-center items-center gap-2'>
                    {
                        socialLinks && socialLinks.map((item) => (
                            <Link
                                to={item.link}
                                key={item.name}
                                className='w-[25px] h-[25px]' target='_blank'
                                rel='noreferrer noopenner'>
                                <img src={item.iconUrl} alt={item.name} className='w-full h-full object-contain hover:scale-150 transition-all drop-shadow' />
                            </Link>
                        ))
                    }
                </div>

            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas camera={{ position: [0, 0, 5], fov: 70, near: 0.1, far: 1000 }}>
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;