import Loader from '../components/Loader';
import { getData } from '../api/getApiData';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const Vehicles = () => {
  const {
    status,
    error,
    data: vehicles,
  } = useQuery({ queryKey: ['vehicles'], queryFn: () => getData('vehicles') });

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <View info={vehicles} />
  );
};

export default Vehicles;
