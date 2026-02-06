import React from 'react'

const Container = ({ children, className = "" }) => {
    return (
        <div className={` max-w-[1300px] mx-auto border ${className}`}>
            {children}
        </div>
    );
};

export default Container;
