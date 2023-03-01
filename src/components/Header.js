import { ImSearch } from 'react-icons/im';
import { BsChevronDown } from 'react-icons/bs';
import { AiFillWechat } from 'react-icons/ai';
import { CgDanger } from 'react-icons/cg';
const Header = () => {
  return (
    <div className='header'>
      <div className='iconSet'>
        <div className='iconContainer'>
          <ImSearch color='#64748B' fontSize='small' />
        </div>
        <div className='iconContainer' style={{ margin: '0px 8px' }}>
          <AiFillWechat color='#64748B' fontSize='large' />
        </div>
        <div className='iconContainer'>
          <CgDanger color='#64748B' fontSize='large' />
        </div>
      </div>
      <div style={{ margin: '0px 16px' }}>|</div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
        <span>Zaid</span>
        <BsChevronDown color='#94A3B8' fontSize='small' />
      </div>
    </div>
  );
};

export default Header;
