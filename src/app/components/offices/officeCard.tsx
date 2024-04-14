import { UserIcon } from '@heroicons/react/20/solid';
import { ClockIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { formatoTime } from '../../utils/index';
import { Props } from '../types/index';

export const OfficeCard: React.FC<Props> = ({ office, onClick }) => {
  const [isOnline, setIsOnline] = useState(office?.online || false);

  const handleCardClick = () => {
    if (onClick && office) {
      onClick(office.id);
    }
  };

  const handleStatusChange = () => {
    setIsOnline(!isOnline);
  };

  const { lines = [], name } = office || {};

  const waiting = lines.reduce((acc: number, line: any) => acc + line.waiting, 0);
  const elapsed = lines.reduce((acc: number, line: any) => acc + line.elapsed, 0) / (lines.length || 1);

  return (
    <div className="relative">
      <button
        className={`card bg-gray-100 w-full md:w-96/100 mx-auto mt-5 min-w-0 h-40 flex flex-col justify-between rounded-md shadow-md px-6 py-6 hover:bg-gray-500 cursor-pointer ${isOnline ? 'bg-blue-500' : 'bg-red-500'}`}
        onClick={handleCardClick}
        onKeyDown={handleCardClick}
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
      </button>
      <button onClick={handleStatusChange} className={`absolute bottom-0 right-0 mb-2 mr-2 text-white px-4 py-2 rounded-md ${isOnline ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'}`}>
        {isOnline ? 'Offline' : 'Online'}
      </button>
    </div>
  );
};
