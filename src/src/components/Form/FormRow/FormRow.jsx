import PropsTypes from 'prop-types';
import { Grid } from '@mui/material';

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
