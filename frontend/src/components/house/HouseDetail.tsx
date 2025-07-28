import type { HouseData } from '@/types/house.types';

interface HouseDetailsProps {
  houseData: HouseData;
}

const HouseDetail = ({ houseData }: HouseDetailsProps) => {
  return (
    <div className="detail-box-border-glow detail-box-particles detail-box-shimmer font-inter w-full max-w-5xl transform rounded-3xl bg-black/20 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="relative z-10 flex flex-col items-start justify-start space-y-2 p-6">
        {/* Decorative Elements */}
        <div className="mb-6 flex w-full justify-center" />

        {/* Detail Paragraphs */}
        <blockquote className="space-y-4 text-pretty break-words hyphens-auto text-white md:text-lg [&>p]:indent-4 md:[&>p]:indent-8">
          <p>{houseData.detail1}</p>
          <p>{houseData.detail2}</p>
        </blockquote>

        {/* Decorative Elements */}
        <div className="mt-6 flex w-full justify-center">
          <div className="flex items-center space-x-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            <div className="pulse-custom text-2xl text-yellow-400">✦</div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
