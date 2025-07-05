import HousesButton from "@/components/house/HouseButton";
import HouseDetail from "@/components/house/HouseDetail";

const Page = () => {
    return (
        <div className="min-h-screen bg-cover bg-center md:bg-[url('/src/assets/bg-1.png')]">
            <div className="flex flex-col justify-center items-center space-y-9 py-10">
                <img className="w-[420px] h-[420px] mt-25" 
                    src="/src/assets/ethera.png" 
                />
                <HousesButton/>
                <HouseDetail/>
            </div>
        </div>
        
    );
}

export default Page;