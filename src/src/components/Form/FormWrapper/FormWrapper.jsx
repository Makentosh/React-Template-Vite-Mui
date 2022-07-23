import PropTypes from 'prop-types';
import { FormProvider } from 'react-hook-form';

export const FormWrapper = ({ children, onSubmit, methods }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  methods: PropTypes.object.isRequired,
};
