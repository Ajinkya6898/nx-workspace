/* eslint-disable-next-line */
import { Button, TextField, Box } from '@mui/material';
export interface UibtnProps {
  btnText: string;
  variant: 'contained' | 'outlined' | 'text';
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
  label: string;
  sizeOfTextfield: 'small' | 'medium';
  colorForTextfield:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'info'
    | 'warning';
}

export function Uibtn(props: UibtnProps) {
  return (
    <Box>
      <Box margin="30px">
        <Button variant={props.variant} size={props.size} color={props.color}>
          {props.btnText}
        </Button>
      </Box>
      <Box margin="30px">
        <TextField
          label={props.label}
          size={props.sizeOfTextfield}
          color={props.colorForTextfield}
        ></TextField>
      </Box>
    </Box>
  );
}

export default Uibtn;
