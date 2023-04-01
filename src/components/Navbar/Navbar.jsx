import React, { useState } from 'react';
import Links from '../Links/Links';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Products',
          path: '/products'
        },
        {
          id: 4,
          name: 'Services',
          path: '/services'
        },
        {
          id: 5,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 6,
          name: 'Hire Me!',
          path: '/hire'
        }
      ];
      
      const [open, setOpen] = useState(false)
    return (
        <nav className='bg-purple-600 p-2 md:p-0'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {
                    open ? <XMarkIcon className="h-6 w-6 text-purple-400" /> : <Bars4Icon className="h-6 w-6 text-purple-400" />
                }
            </div>
            <ul className={`md:flex absolute md:static bg-purple-400 md:bg-purple-600 ${open ? 'top-10' : '-top-72'}`}>
                {
                    routes.map(routes => <Links
                    key={routes.id}
                    routes={routes}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;