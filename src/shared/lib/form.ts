import * as yup from 'yup';

const nameValidation = yup
  .string()
  .trim()
  .matches(/^[A-Za-z]+$/, 'Обязательное поле');

const numberValidation = yup
  .string()
  .required('Обязательное поле')
  .matches(/^\d+$/, 'нужны только цифры') // Use /^\d+$/ to match only digits
  .min(4, 'требуется всего 4 цифры')
  .max(4, 'требуется всего 4 цифры');

const minMax = yup
  .string()
  .min(2, 'Минимум 2 символа')
  .max(30, 'Максимум 30 символов');

export const usersFormSchema = yup.object({
  firstName: nameValidation.required('Обязательное поле').concat(minMax),
  lastName: nameValidation.required('Обязательное поле').concat(minMax),
  middleName: nameValidation.required('Обязательное поле').concat(minMax),
  dob: yup.string().required('Обязательное поле'),
});

export const booksFormSchema = yup.object({
  title: yup.string().required('Обязательное поле').concat(minMax),
  author: yup.string().required('Обязательное поле').concat(minMax),
  publisher: yup.string().required('Обязательное поле').concat(minMax),
  year: numberValidation,
});
