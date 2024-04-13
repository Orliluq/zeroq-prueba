import { SearchIcon } from './icons/searchIcon';
import { Props } from './types';

export const Search: React.FC<Props> = ({ search, onChange, office, onClick }) => {
  return (
    <div className="search-bar bg-blue-gray-700 py-2 px-4 rounded-1 mb-4 flex justify-between items-center">
      <div className="search-input-container flex items-center">
        <span className="search-icon relative flex align-center justify-center bg-white py-5 rounded-1">
          <SearchIcon />
        </span>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Buscar sucursal"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          className="search-input w-full px-4 py-2 rounded-1 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};