export const normalizePhoneValue = (value) => {
  return value.replace(/\D+/g, '');
};

export const setFormErrorByApi = (setErrors, errors) => {
  for (let error in errors) {
    setErrors(error, {
      type: `${error}-error-from-api`,
      message: errors[error],
    });
  }
};

export const select_options = [
  {
    value: '1',
    label: 'Тест 1',
  },
  {
    value: '2',
    label: 'Тест 2',
  },
  {
    value: '3',
    label: 'Тест 3',
  },
];

export const autocomplete_options = [
  {
    value: '555',
    label: 'Тест 555',
  },
  {
    value: '666',
    label: 'Тест 666',
  },
  {
    value: '777',
    label: 'Тест 777',
  },
];

export const radioButtons = [
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'male',
    label: 'Male',
  },
];
