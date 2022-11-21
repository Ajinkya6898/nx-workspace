import useStore from '../../../../zustand/data';
import { Button, Typography, Box } from '@mui/material';

/* eslint-disable-next-line */
export interface ZustandProps {}

export function Zustand(props: ZustandProps) {
  const data = useStore((state) => state.data);
  const loading = useStore((state) => state.loading);
  const errors = useStore((state) => state.errors);
  const fetchData = useStore((state) => state.fetch);
  const reset = useStore((state) => state.reset);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (errors) {
    return <h1>Can not load products. Please try again later</h1>;
  }
  return (
    <Box
      width="30%"
      margin="auto"
      border="1px solid black"
      borderRadius="20px"
      padding="20px"
      textAlign="center"
    >
      <Box display="flex" justifyContent="space-between" padding="20px">
        <Button variant="contained" onClick={fetchData}>
          Show Products
        </Button>
        <Button variant="contained" onClick={reset}>
          Reset Products
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">Title - {data.title}</Typography>
      </Box>
      <Box padding="20px">
        <img src={data.image} alt="" width="300px" height="300px" />
      </Box>
      <Box px="20px" py="10px">
        <Typography variant="h6">Price - {data.price}$</Typography>
      </Box>
    </Box>
  );
}

export default Zustand;
