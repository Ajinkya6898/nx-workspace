import { useState } from 'react';
import axios from 'axios';

/* eslint-disable-next-line */
export interface SharedGetDataProps {
  apiLink: string;
}

export function SharedGetData(props: SharedGetDataProps) {
  const api = props.apiLink;

  const [fetchData, setFetchData] = useState([]);
  const [hasError, setHasError] = useState('');

  const handleData = () => {
    axios
      .get(api)
      .then((res) => setFetchData(res.data))
      .catch((err) => setHasError(err.data));
  };

  console.log(fetchData);
  console.log('Err ' + hasError);
  
  return (
    <div>
      <button onClick={handleData}>Get data</button>
    </div>
  );
}

export default SharedGetData;
