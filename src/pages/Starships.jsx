import Loader from '../components/Loader';
import { getData } from '../api/getApiData';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const Starships = () => {
  const {
    status,
    error,
    data: starships,
  } = useQuery({
    queryKey: ['starships'],
    queryFn: () => getData('starships'),
  });

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <View info={starships} />
  );
};

export default Starships;
