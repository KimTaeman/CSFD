import EditIcon from '@/assets/edit.svg';

interface CardProps {
  title: string;
  description: string;
  stage: 'hidden' | 'shown';
  type?: 'freshman' | 'senior'; 
}

function HintCard({ title, description, stage, type = 'freshman' }: CardProps) {
  const getCardStyles = () => {
    if (type === 'freshman') {
      return stage === 'shown' ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-50';
    }
    return 'bg-white bg-opacity-100'; // Default for other types
  };

  return (
    <div
      className={`relative h-32 w-[94%] rounded-4xl p-3 lg:h-55 lg:w-128 lg:rounded-4xl lg:p-4 ${getCardStyles()}`}
    >
      <h2 className="text-sm font-bold text-black lg:text-lg">{title}</h2>
      <p className="text-xs text-black lg:text-sm">{description}</p>
      
      {/* Edit icon for senior type */}
      {type === 'senior' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={EditIcon} 
            alt="Edit" 
            className="w-12 h-12 lg:w-20 lg:h-20 opacity-70"
          />
        </div>
      )}
    </div>
  );
}

export default HintCard;
