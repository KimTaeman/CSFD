import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

interface House {
  students: {
    name: string;
    batch: 25 | 26;
    houseLeader: boolean;
  }[];
}

const Page = () => {
  const { house = '' } = useParams();
  const validHouse = ['alpha', 'eta', 'epsilon', 'iota'];

  const [houseInfo, setHouseInfo] = useState<House>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!validHouse.includes(house)) {
      navigate('/houses');
      return;
    }

    fetch(`http://localhost:3000/houses/${house}`)
      .then((response: any) => setHouseInfo(response));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [house]);

  return <div className="min-h-screen bg-cover bg-center">Current House: {house}</div>;
};

export default Page;
