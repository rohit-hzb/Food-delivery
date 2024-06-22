import React from 'react'
import { MobileNavigation } from '../contants/navigation';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
      <div className='flex items-center justify-between'>
        {
          MobileNavigation.map((nav, index) => {
            return (
              <NavLink key={nav.label+"mobilenavigation"}>
                <div>
                  {nav.icon}
                </div>
                <p>{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </section>
  )
}

export default MobileNavigation;
