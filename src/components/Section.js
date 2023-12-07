// Section.js
import React from 'react';

const Section = ({ bgColor, margin, children }) => {
    const sectionStyle = {
        backgroundColor: bgColor || 'white',
        margin: margin || '0',
        padding: '20px', // Add default padding or adjust as needed
    };

    return <section className={`bg-${bgColor} my-${margin} p-4`} style={sectionStyle}>{children}</section>;
};

export default Section;
