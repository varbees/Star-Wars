import Loader from '../components/Loader';
import { getData } from '../api/getApiData';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const Planets = () => {
  const {
    status,
    error,
    data: planets,
  } = useQuery({ queryKey: ['planets'], queryFn: () => getData('planets') });

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <View info={planets} />
  );
};

export default Planets;
