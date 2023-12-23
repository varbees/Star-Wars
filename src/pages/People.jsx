import Loader from '../components/Loader';
import { getData } from '../api/getApiData';
import { useQuery } from '@tanstack/react-query';
import View from '../components/Layout/View';

const People = () => {
  const {
    status,
    error,
    data: people,
  } = useQuery({
    queryKey: ['people'],
    queryFn: () => getData('people'),
  });

  console.log(people);

  // TODO: Get names from urls in species for people

  // const { status: speciesStatus, data: species } = useQuery({
  //   queryKey: ['species'],
  //   queryFn: () => getData('species'),
  //   enabled: !status && people,
  // });
  // console.log(species);

  // const speciesMap = {};
  // speciesStatus === 'success' &&
  //   species.forEach(item => {
  //     speciesMap[item.url] = item.name;
  //   });
  // console.log(speciesMap);

  // people.forEach(item => {
  //   console.log(item.species);
  //   const updatedSpecies = item.species
  //     ? item.species.map(url => speciesMap[url] === url)
  //     : 'unknown';
  //   console.log(updatedSpecies);
  //   // item.species = updatedSpecies;
  // });
  // console.log(people);

  return status === 'pending' ? (
    <Loader />
  ) : status === 'error' ? (
    <div className='w-full flex justify-center items-center'>
      Error: {error.message}
    </div>
  ) : (
    <div className='w-full'>
      <View info={people} />
    </div>
  );
};

export default People;
