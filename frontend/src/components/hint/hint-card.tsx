interface CardProps {
  title: string;
  description: string;
  stage: 'hidden' | 'shown';
  type?: 'freshman'; // For future expansion
}

function HintCard({ title, description, stage, type = 'freshman' }: CardProps) {
  const getCardStyles = () => {
    if (type === 'freshman') {
      return stage === 'shown' 
        ? 'bg-white bg-opacity-100' 
        : 'bg-white bg-opacity-50';
    }
    return 'bg-white bg-opacity-100'; // Default for other types
  };

  return (
    <div className={`w-128 h-57 rounded-4xl p-4 ${getCardStyles()}`}>
      <h2 className="text-lg font-bold text-black">{title}</h2>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
}

export default HintCard;