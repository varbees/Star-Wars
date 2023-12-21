import Loader from '../components/Loader';
import { getFilms } from '../api/getFilms';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const Films = () => {
  const {
    status,
    error,
    data: films,
  } = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
  });

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <div className='w-full'>
      <View films={films} />
    </div>
  );
};

export default Films;
