// InfoBox.js
import React from 'react';

const InfoBox = ({ title, value, percentage, icon, gradientFrom, gradientTo, iconBgShadow, borderColor }) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-${gradientFrom} to-${gradientTo} text-white shadow-${iconBgShadow} shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
        {icon}
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{title}</p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{value}</h4>
      </div>
      <div className="border-t p-4" style={{ borderColor }}>
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong>{percentage}</strong>&nbsp;than last week
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
