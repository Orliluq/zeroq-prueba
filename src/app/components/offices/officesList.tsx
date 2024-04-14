import React from 'react';
import { OfficeCard } from './officeCard';
import { OfficeListProps } from '../types';

const OfficeList: React.FC<OfficeListProps> = ({ offices, onClick }) => {
  return (
    <div className="office-card-container">
      {offices.map((office) => (
        <OfficeCard key={office.name} office={office} onClick={() => onClick(office.id)} id={0} search={''} onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        } } />
      ))}
    </div>
  );
};