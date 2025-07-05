import HousesButton from '@/components/house/HouseButton';
import HouseDetail from '@/components/house/HouseDetail';

const Page = () => {
  return (
    <div className="min-h-svh bg-[#15022f] bg-[url('/src/assets/bg-1.png')] bg-contain bg-position-[50%_0] bg-no-repeat">
      <div className="flex flex-col items-center justify-center space-y-9 px-4 py-10">
        <img
          className="has-[+button:hover]:animate-wiggle-more animate-infinite mt-25 w-full max-w-[420px] animate-none"
          src="/src/assets/ethera.png"
        />
        <HousesButton />
        <HouseDetail />
      </div>
    </div>
  );
};

export default Page;
