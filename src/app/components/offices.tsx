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
      <Search search={search} onChange={handleChangeSearch} office={undefined}
      onClick={function (id: number): void {
        throw new Error('Function not implemented.');
      } } id={0} />
      <div className="flex-wrap grid grid-cols-1 md:grid-cols-4 grid-cols-auto gap-4 mx-auto">
        {offices.filter(filterOffices).map((office) => (
          <OfficeCard key={office.id} office={office}
            onClick={toggleOfficeStatus} search={''}
            onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          } } id={0} />
        ))}
      </div>
    </>
  );
};
