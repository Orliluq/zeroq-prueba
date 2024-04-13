import React from 'react';
import { OfficeCard } from './officeCard';
import { Office, OfficeListProps } from '../types';

const OfficeList: React.FC<OfficeListProps> = ({ offices, onClick }) => {
  return (
    <div className="office-card-container">
      {offices.map((office) => (
        <OfficeCard key={office.name} office={office} onClick={onClick} />
      ))}
    </div>
  );
};

export default OfficeList;