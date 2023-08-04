import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('is required'),
    age: yup
      .number()
      .typeError('Enter the number')
      .positive('positive number')
      .integer('is not integer')
      .required('is required'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Yup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} placeholder="firstName" />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} placeholder="age" />
      <p>{errors.age?.message}</p>

      <button type="submit">btn </button>
    </form>
  );
};
export default Yup;
