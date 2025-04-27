
import Pet from '@/components/Pet';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5]/10 to-[#FDE1D3]/10 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#9b87f5]">Virtual Pet Dashboard</h1>
        <Pet />
      </div>
    </div>
  );
};

export default Index;
