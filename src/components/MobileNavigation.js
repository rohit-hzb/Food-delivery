import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../contants/navigation'; // Adjust the import based on your actual path and export

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
      <div className='flex items-center justify-between'>
        {
          navigation.map((nav, index) => (
            <NavLink key={nav.label + "mobilenavigation"} to={nav.path} activeClassName="active">
              <div>
                {nav.icon}
              </div>
              <p>{nav.label}</p>
            </NavLink>
          ))
        }
      </div>
    </section>
  );
};

export default MobileNavigation;
