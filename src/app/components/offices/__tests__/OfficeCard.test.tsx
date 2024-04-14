import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import test, { describe } from 'node:test';
import { OfficeCard } from '../officeCard';

describe('OfficeCard component', () => {
  test('renders office name', () => {
    const office = {
      id: 1,
      name: 'Test Office',
      online: true,
      lines: [],
    };

   const { getByText } = render(
    <OfficeCard 
      office={office} 
      id={0} 
      search={''} 
      onChange={(): void => {
    throw new Error('Function not implemented.');
    }}
   />
  );
    const officeNameElement = getByText(/Test Office/i);
    expect(officeNameElement).toBeInTheDocument(); 
  });

  test('changes office status on button click', () => {
    const office = {
      id: 1,
      name: 'Test Office',
      online: true,
      lines: [],
    };

    const onClickMock = jest.fn();

    const { getByText } = render(
      <OfficeCard 
        office={office} 
        id={0} 
        search={''} 
        onChange={(): void => {
      throw new Error('Function not implemented.');
      }}
    />
  );
    const statusButton = getByText(/Offline/i);
    fireEvent.click(statusButton);
    expect(onClickMock).toHaveBeenCalledWith(office.id);
  });
});
