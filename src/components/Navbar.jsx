import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-[20px]'>
      <Link to='/'>
        <img src={Logo} alt='Star Wars Logo' />
      </Link>
      <input
        type='text'
        className='w-[216px] h-[32px] py-1 px-2 border-[1px] border-white placeholder:text-white rounded-[6px] align-center outline-none'
        placeholder='🔍 Search'
      />
    </nav>
  );
};

export default Navbar;
