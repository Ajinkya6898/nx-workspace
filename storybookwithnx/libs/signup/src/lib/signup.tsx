import { Button, Box, TextField, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface SignupProps {}

export function Signup(props: SignupProps) {
  return (
    <Box
      width="23%"
      margin="auto"
      textAlign="center"
      border="1px solid black"
      padding="30px"
      marginTop="10%"
      borderRadius="20px"
    >
      <Typography mb="10px" variant="h5">
        Sign Up
      </Typography>
      <Box my="20px">
        <TextField label="Enter Email Here" fullWidth />
      </Box>
      <Box my="20px">
        <TextField label="Enter Password Here" fullWidth />
      </Box>
      <Box my="20px">
        <TextField label="Confirm Password " fullWidth />
      </Box>
      <Box my="20px">
        <Button variant="contained">Sign Up</Button>
      </Box>
    </Box>
  );
}

export default Signup;
