import React from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/20/solid';
import { formatoTime } from '../../utils/index';
import { Props, OfficeItemProps } from '../types/index';

export const OfficeCard: React.FC<Props> = ({ office, onClick }) => {
  const { lines, name, online } = office || {};

  const waiting = (lines || []).reduce((acc: number, line: any) => acc + line.waiting, 0);
  const elapsed = (lines || []).reduce((acc: number, line: any) => acc + line.elapsed, 0) / (lines || []).length;

  const handleCardClick = () => {
    if (onClick && office) {
      onClick(office);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCardClick();
    }
  };

  return (
    <div
      className={`card bg-gray-100 w-full md:w-96/100 mx-auto mt-5 min-w-0 h-40 flex flex-col justify-between rounded-md shadow-md px-6 py-6 hover:bg-gray-500 cursor-pointer ${!online ? 'bg-gray-300' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <h1 className="text-xl mb-12 px-5 font-bold text-white">{name}</h1>
      <div className="px-5 flex mt-5 justify-between text-white">
        <div className="flex items-end mr-2">
          <UserIcon className="h-6 w-6 fill-current text-white" />
          <span>{waiting}</span>
        </div>
        <div className="flex items-end">
          <ClockIcon className="h-6 w-6 fill-current text-white" />
            <span>{formatoTime(elapsed)}</span>
            </div>
        </div>
      </div>
  );
};