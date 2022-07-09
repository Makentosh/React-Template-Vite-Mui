import { Grid } from '@mui/material';

export const FormContainer = (props) => {
  return (
    <Grid
      container
      // style={{
      //   marginTop: 0,
      //   marginLeft: 0,
      //   width: '100%'
      // }}
      spacing={3}
      {...props}
    />
  );
};
