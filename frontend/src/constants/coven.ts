interface CovenData {
  name: string;
  role: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const covenData: Record<string, CovenData & { description: string; colorClass: string }> = {
  alchemireCoven: {
    name: 'Alchemire',
    role: 'Potion Brewer',
    image: '/assets/alchemire.png',
    imagePosition: 'right',
    description:
      'Masters of transformation, House Alchemire turns the ordinary into the extraordinary. Their quiet magic brews behind cauldrons and cat’s eyes, where knowledge and intuition stir as one.',
    colorClass: 'text-blue-400',
  },
  etheraCoven: {
    name: 'Ethera',
    role: 'Summoner',
    image: '/assets/ethera.png',
    imagePosition: 'left',
    description:
      'Ethera, the whisper of the unseen, governs the flow of thought and soul between the worlds. Witches attuned to Ethera speak with stars and weave dreams into spells.',
    colorClass: 'text-red-400',
  },
  isotarCoven: {
    name: 'Isotar',
    role: 'Visionary',
    image: '/assets/isotar.png',
    imagePosition: 'right',
    description:
      'With foresight and ancient knowledge, House Isotar bends the future through insight. They study hidden patterns in the world and use their wisdom to guide and change what is to come.',
    colorClass: 'text-green-400',
  },
  zireliaCoven: {
    name: 'Zirelia',
    role: 'Sorcerer',
    image: '/assets/zirelia.png',
    imagePosition: 'left',
    description:
      'The Fateweavers, Zirelians are stargazers and seers, drawn to omens and the hush of distant stars. With silent wings and murmured spells, they weave fate from shadow and light. Subtle as dusk, precise as starlight — where they walk, the future shifts.',
    colorClass: 'text-pink-400',
  },
};

export default covenData;
