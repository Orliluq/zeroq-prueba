"use client";
import { useState } from 'react';
import { Office } from './types/index';
import { useOfficesApi } from './hooks/useOfficesApi';
import { OfficeCard } from '../components/offices/officeCard';
import { Search } from './search';

export const Offices = () => {
  const { offices, toggleOfficeStatus } = useOfficesApi();
  const [search, setSearch] = useState('');

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  const filterOffices = (office: Office) =>
    office.name.toLowerCase().includes(search.trim().toLowerCase());

  return (
    <>
      <Search
        search={search}
        onChange={handleChangeSearch}
        office={{ ...offices[0], className: '' }}
        id={0}
        onClick={() => { /* Empty handler if needed */ }} 
      />
      <div className="flex-wrap grid grid-cols-1 md:grid-cols-4 grid-cols-auto gap-4 mx-auto">
        {offices.filter(filterOffices).map((office) => (
          <OfficeCard
            key={office.id}
            office={office}
            onClick={() => toggleOfficeStatus(office.id)}
            search={''}
            id={office.id} 
            onChange={() => { /* Handle search change if needed */ }} 
          />
        ))}
      </div>
    </>
  );
};
