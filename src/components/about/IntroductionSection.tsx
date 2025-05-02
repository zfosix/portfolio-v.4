import React from 'react';
import { summaryMock } from '@/common/mocks/summary';
import {   BiLeaf as ProfileIcon, } from 'react-icons/bi';

interface SummaryProps {
  isDarkMode: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isDarkMode }) => {
  const borderColor = isDarkMode ? 'border-stone-700' : 'border-stone-300';
  const textColor = isDarkMode ? 'text-stone-300' : 'text-gray-700';
  const headingColor = isDarkMode ? 'text-stone-200' : 'text-gray-800';
  const subtitleColor = isDarkMode ? 'text-stone-400' : 'text-gray-600';
  const paragraphColor = isDarkMode ? 'text-stone-300' : 'text-neutral-800';

  return (
    <section className={`space-y-2 pb-3 bg-cover bg-no-repeat ${borderColor}`}>
      <div className={`border-b border-dotted pb-4 ${borderColor}`}>
        <div className="flex items-center space-x-3">
          <h1 className={`text-2xl md:text-3xl font-bold ${headingColor} flex items-center gap-2`}>
            <ProfileIcon className="text-2xl" />
            About
          </h1>
        </div>
        <p className={`mt-2 text-sm md:text-base ${subtitleColor}`}>
          A short story of me
        </p>
      </div>

      <div className={`space-y-4 pt-3 text-sm md:text-base ${textColor}`}>
        <div 
          data-testid="summary"
          className={`flex flex-col space-y-6 font-sans ${paragraphColor}`}
        >
          <p>{summaryMock.paragraphOne}</p>
          <p>{summaryMock.paragraphTwo}</p>
          <p>{summaryMock.paragraphThree}</p>
          <p>{summaryMock.paragraphFour}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;