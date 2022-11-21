import { Typography, Box } from '@mui/material';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Box
      border="1px solid  black"
      display="flex"
      justifyContent="space-between"
      height="50px"
      sx={{ backgroundColor: 'white' }}
    >
      <Box sx={{ ml: 5, mt: 1, cursor: 'pointer' }}>
        <Typography variant="h6">Welcome</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="500px"
        sx={{ mt: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">Home</Typography>
        <Typography variant="h6">Logbook</Typography>
        <Typography variant="h6">Transaction</Typography>
        <Typography variant="h6">Logout</Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
