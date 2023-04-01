import React from 'react';

const Links = ({routes}) => {
    return (
        <li className='text-white mr-0 md:mr-8 p-2 pl-4 w-36 md:w-auto hover:bg-purple-500'>
            <a href={routes.path}>{routes.name}</a>
        </li>
    );
};

export default Links;