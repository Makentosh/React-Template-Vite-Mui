import { Grid } from '@mui/material';
import PropsTypes from 'prop-types';

export const FormRow = ({ children, ...props }) => {
  return (
    <Grid
      item
      xs={12}
      {...props}
    >
      <Grid
        container
        spacing={3}
      >
        {children}
      </Grid>
    </Grid>
  );
};

FormRow.propTypes = {
  children: PropsTypes.node,
};
