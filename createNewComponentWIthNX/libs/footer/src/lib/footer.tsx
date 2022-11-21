import styles from './footer.module.css';
import { Typography, Box } from '@mui/material';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box
      width="99%"
      position="absolute"
      bottom="0"
      sx={{ backgroundColor: '#4b7fab' }}
      textAlign="center"
      color="white"
    >
      <Typography variant="h6" height="40px" paddingTop="10px">
        © 2001 - 2022 Dealertrack Registration and Titling Solutions, Inc. All
        rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
