import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CustomDrawer = ({ links }) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className=''>
            <button className=" z-30 h-full text-white" onClick={toggleDrawer}>
                <img
                    src={isOpen ? '/svg/menu-close.svg' : '/svg/menu.svg'}
                    className=' '
                    height={'auto'} width={25}
                    alt={isOpen ? 'menu close' : 'menu open'}
                />
            </button>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: isOpen ? 0 : '100%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-0 left-0 w-full bg-white  overflow-auto"
            >
                <div className='bg-primary py-5 px-4 flex justify-between space-x-2'>
                    <h5 className=''>{t('headings.mainMenu')}</h5>
                    <button className='' onClick={toggleDrawer}>
                        <img
                            src={'/svg/arrow-down.svg'}
                            className=' '
                            height={'auto'} width={25}
                            alt='arrow-down'
                        />
                    </button>
                </div>
                <ul className='px-2' >
                    {links.map((link, index) => (
                        <li key={index} className='py-4 text-md  border-b'>
                            <Link to={link.add} rel='follow index' className='flex items-center text-black'>
                                <img src={link.icon} className='mr-2 h-auto w-5' alt={link.title} />
                                <span>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default CustomDrawer;
