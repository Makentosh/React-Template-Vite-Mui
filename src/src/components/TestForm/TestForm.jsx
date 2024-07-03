import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { autocomplete_options, radioButtons, select_options } from '../../utils';
import {
  FormColumn,
  FormContainer,
  FormRow,
  FormWrapper,
  MuiAutocompleteField,
  MuiCheckboxField,
  MuiDatePickerField,
  MuiPasswordField,
  MuiPhoneField,
  MuiRadioButtonFields,
  MuiSelectField,
  MuiSwitchField,
  MuiTextField,
} from '../Form';

export const TestForm = () => {
  const { ...methods } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit}
      methods={methods}
    >
      <FormContainer>
        <FormRow>
          <FormColumn sm={6}>
            <MuiTextField
              placeholder={'Введите текст'}
              label={'Лейб текст'}
              name={'text'}
            />
          </FormColumn>
          <FormColumn sm={6}>
            <MuiPhoneField
              name={'phone'}
              label={'Телефон'}
            />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn sm={6}>
            <MuiPasswordField
              label={'Пароль'}
              name={'password'}
              placeholder={'Введите пароль'}
            />
          </FormColumn>
          <FormColumn sm={6}>
            <MuiSwitchField
              name={'switch'}
              label={'Switch'}
            />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn sm={6}>
            <MuiAutocompleteField
              name={'autocomplete'}
              label={'Автокомплит'}
              placeholder={'автокомлит'}
              options={autocomplete_options}
            />
          </FormColumn>
          <FormColumn sm={6}>
            <MuiCheckboxField
              name={'checkbox'}
              label={'Чекбокс'}
            />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn sm={6}>
            <MuiSelectField
              name={'select'}
              fullWidth
              label={'Селект'}
              placeholder={'селект'}
              options={select_options}
            />
          </FormColumn>
          <FormColumn sm={6}>
            <MuiRadioButtonFields
              name={'radio'}
              buttons={radioButtons}
            />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn sm={6}>
            <MuiDatePickerField
              name={'date'}
              label={'Дата'}
            />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn>
            <Button
              type='submit'
              variant='contained'
            >
              Сохранить
            </Button>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormWrapper>
  );
};
