import Loader from '../components/Loader';
import { getData } from '../api/getApiData';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const Species = () => {
  const {
    status,
    error,
    data: species,
  } = useQuery({ queryKey: ['species'], queryFn: () => getData('species') });

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <View info={species} />
  );
};

export default Species;
