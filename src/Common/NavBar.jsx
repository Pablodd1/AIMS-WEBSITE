import * as React from 'react';
import CustomDrawer from './Slaves/drawer';
import LangSwitcherMenu from './Slaves/langSwitcherMenu';
import { Link } from 'react-router-dom';
import { CallMade, CallSharp } from '@mui/icons-material';

export default function NavBar({ links, styles }) {
    return (
        <nav
            className='border-b shadow-gray-400 shadow-xl bg-primary sticky top-0 w-full text-white flex items-stretch justify-between z-40'
        >
            <Link to={'/'} className='bg-white overflow-hidden rounded-r-full pr-4 shadow-inner shadow-gray-600' >
                <img
                    src={'/logo-short.png'}
                    className='mx-1 py-1'
                    height={'auto'} width={60}
                    alt='AI Medical Scriber'
                />
            </Link>
            <ul className="items-center justify-end space-x-5 min-h-full bg-transparent hidden md:flex" >

                {
                    links.map((x, i) =>
                        <li key={i} className=' min-w-max ' >
                            <Link
                                component={'a'}
                                underline='none'
                                to={x.add}
                                id={x.title + 'nav'}
                                rel='follow index'
                                className='flex items-end justify-center text-md font-normal fonst-sans tracking-wide '
                            >
                                {x.title}
                            </Link>
                        </li>
                    )
                }
                <li className="pl-4">

                </li>
            </ul>
            <div className='flex items-center justify-end ' >
                <a href='tel:+1 (786) 970-8366' className='mx-3'>
                   <CallSharp /> +1 (786) 970-8366
                </a>
                <LangSwitcherMenu size="small" />
                <ul className=' flex  md:hidden'>
                    <CustomDrawer styles={styles} links={links} />
                </ul>
            </div>
        </nav>

    )
}
