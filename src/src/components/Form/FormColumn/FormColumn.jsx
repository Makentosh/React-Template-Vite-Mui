import { Grid } from '@mui/material';

export const FormColumn = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={3}
      {...props}
    />
  );
};
