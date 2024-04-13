import { Offices } from './components/offices';

export default function Home() {
  return (
    <div className="grid grid-cols-auto gap-4 max-w-7xl mx-auto px-6 py-4">
      <Offices />
    </div>
  );
}
