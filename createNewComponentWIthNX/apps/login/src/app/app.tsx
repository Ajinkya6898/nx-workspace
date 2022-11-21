// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Footer } from '@create-new-component-with-nx/footer';
import { Navbar } from '@create-new-component-with-nx/navbar';

export function App() {
  return (
    <>
      <Navbar />
      <Box
        width="20%"
        margin="auto"
        marginTop="10%"
        border="1px solid black"
        padding="20px"
        borderRadius="10px"
      >
        <Box textAlign="center">
          <Typography variant="h5">Sign In</Typography>
        </Box>
        <Box marginTop="30px">
          <TextField label="Enter Email Here" fullWidth />
        </Box>
        <Box marginTop="30px">
          <TextField label="Enter Password Here" fullWidth />
        </Box>
        <Box textAlign="center" marginTop="30px">
          <Button variant="contained">Sign In</Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
