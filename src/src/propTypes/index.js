import PropTypes from 'prop-types';

export const defaultFieldsProps = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.object,
};

export const labelPlacementProps = PropTypes.oneOf(['end', 'start', 'top', 'bottom']);
