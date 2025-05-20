import { Button, HStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(data);

  return (
    <div>
      <header>
        <h1>AAAAAAAAAAAAAAAAAAA</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('example')} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  );
};
