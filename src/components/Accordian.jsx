import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Accordian = () => {
  return (
    <div className='w-1/10 h-full pl-[16px] pr-[14px] py-[10px]'>
      <Sidebar>
        <Menu>
          <SubMenu
            className='bg-[#03123d] text-white hover:bg-pink-500'
            label='Films'
            component={<Link to='/films' />}
          >
            <MenuItem
              className='bg-[#03123d] hover:bg-pink-500'
              component={<Link to='/films/1' />}
            >
              Film 1
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Accordian;
