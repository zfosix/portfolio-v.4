import React from 'react';
import { summaryMock } from '@/common/mocks/summary';

interface SummaryProps {
  isDarkMode: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isDarkMode }) => {
  return (
    <section
      className={`pb-6 ${
        isDarkMode ? 'border-stone-700' : 'border-stone-300'
      }`}
    >
      <div
        className={`border-b border-dotted pb-4 ${
          isDarkMode ? 'border-stone-700' : 'border-stone-300'
        }`}
      >
        <div className="flex items-center space-x-3">
          <h1
            className={`text-2xl md:text-3xl font-bold ${
              isDarkMode ? 'text-stone-200' : 'text-gray-800'
            }`}
          >
            About
          </h1>
        </div>
        <p
          className={`mt-2 text-sm md:text-base ${
            isDarkMode ? 'text-stone-400' : 'text-gray-600'
          }`}
        >
          A short story of me
        </p>
      </div>
      <div
        className={`space-y-4 pt-3 text-sm md:text-base ${
          isDarkMode ? 'text-stone-300' : 'text-gray-700'
        }`}
      >
        <div
          data-testid="summary"
          className={`flex flex-col space-y-6 font-sans ${
            isDarkMode ? 'text-stone-300' : 'text-neutral-800'
          }`}
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