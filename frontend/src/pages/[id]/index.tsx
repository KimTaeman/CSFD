import React from 'react';
import { useParams } from 'react-router';

function Page() {
  const {id} = useParams();

  return (
    <div>
      This is an example of file based routing params: {id}
    </div>
  );
}

export default Page;