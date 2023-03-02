import { MdDateRange } from 'react-icons/md';
import { BiFilter } from 'react-icons/bi';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
function Section() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={avatar1} alt='Avatar1' className='avatar' />
        <img
          style={{ marginLeft: '-8px' }}
          src={avatar2}
          alt='Avatar2'
          className='avatar'
        />
        <img
          style={{ marginLeft: '-8px' }}
          src={avatar4}
          alt='Avatar4'
          className='avatar'
        />
        <img
          style={{ marginLeft: '-8px' }}
          src={avatar3}
          alt='Avatar3'
          className='avatar'
        />
        <div className='addNew'>+</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            background: '#FFFFFF',
          }}
        >
          <BiFilter />
        </div>
        <div
          style={{
            width: '160px',
            padding: '4px',
            marginLeft: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <MdDateRange fontSize='large' />
          <span style={{ fontSize: '12px', color: '#475569' }}>
            Oct 15,2022
          </span>
          <span style={{ fontSize: '12px', color: '#475569' }}>-</span>
          <span style={{ fontSize: '12px', color: '#475569' }}>
            Oct 31,2022
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section;
