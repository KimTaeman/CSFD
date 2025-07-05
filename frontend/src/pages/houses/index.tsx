import HousesButton from '@/components/house/HouseButton';
import HouseDetail from '@/components/house/HouseDetail';

const Page = () => {
  return (
    <div className="min-h-svh bg-contain bg-position-[50%_0] bg-[#15022f] bg-no-repeat bg-[url('/src/assets/bg-1.png')]">
      <div className="flex flex-col items-center justify-center space-y-9 py-10 px-4">
        <img className="mt-25 w-full max-w-[420px] animate-none has-[+button:hover]:animate-wiggle-more animate-infinite" src="/src/assets/ethera.png" />
        <HousesButton />
        <HouseDetail />
      </div>
    </div>
  );
};

export default Page;
