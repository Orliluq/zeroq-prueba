/* const BASE_URL = 'http://localhost:3000'; */
const BASE_URL = 'https://zeroq-prueba.vercel.app';

export const useFetcher = () => {
  const fetcher = async <T>(url: string): Promise<T> => {
    try {
      const res = await fetch(`${BASE_URL}${url}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return await res.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };

  return {
    fetcher,
  };
};
