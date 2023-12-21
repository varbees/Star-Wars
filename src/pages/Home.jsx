import { Outlet } from 'react-router-dom';
import Accordian from '../components/Accordian';

const Home = () => {
  return (
    <div className='flex'>
      <Accordian />
      <Outlet />
    </div>
  );
};

export default Home;
