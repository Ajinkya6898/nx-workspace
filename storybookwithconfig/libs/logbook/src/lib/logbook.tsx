import { Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
/* eslint-disable-next-line */
export interface LogbookProps {}

type displayCity = {
  firstName: string;
  lastName: string;
  city: string;
  payment: number;
  btn: string;
};

export function Logbook(props: LogbookProps) {
  const [details, setDetails] = useState<displayCity | null>(null);
  useEffect(() => {
    axios.get(`/assets/logbook/city.json/`).then((res) => setDetails(res.data));
  }, []);
  // console.log(details);

  return (
    <Box
      width="300px"
      margin="auto"
      border="1px solid black"
      textAlign="center"
      borderRadius="10px"
    >
      <Typography marginTop="10px" variant="subtitle1">
        First Name - {details?.firstName}
      </Typography>
      <Typography marginTop="10px" variant="subtitle1">
        Last Name - {details?.lastName}
      </Typography>
      <Typography marginTop="10px" variant="subtitle1">
        City - {details?.city}
      </Typography>
      <Typography marginTop="10px" variant="subtitle1">
        Payment - {details?.payment}$
      </Typography>
      <Box my="10px">
        <Button variant="contained">{details?.btn}</Button>
      </Box>
    </Box>
  );
}

export default Logbook;
