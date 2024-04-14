/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useFetcher } from '../../hooks/useFetch';
import { Office, OfficesResponse } from '../types/index';

export const useOfficesApi = () => {
  const { fetcher } = useFetcher();
  const [offices, setOffices] = useState<Office[]>([]);

  const toggleOfficeStatus = (id: number) => {
    const updatedOffices = offices.map((office) =>
      office.id === id ? { ...office, online: !office.online } : office
    );
    setOffices(updatedOffices);
  };

 
  const getOffices = async () => {
    try {
      const officesResponse = await fetcher<OfficesResponse>('/api/offices');
      setOffices(officesResponse.offices);
    } catch (error) {
      console.error('Error fetching offices:', error);
    }
  };

  useEffect(() => {
    const fetchOffices = async () => {
      await getOffices();
    };

    fetchOffices();

    const intervalId = setInterval(fetchOffices, 60000);
    return () => clearInterval(intervalId);
  }, [fetcher, getOffices]);


  return {
    offices,
    toggleOfficeStatus,
  };
};
