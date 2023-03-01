import React from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { RiArrowUpDownFill } from 'react-icons/ri';

const Pages = () => {
  return (
    <div className='pagesContainer'>
      <h5 style={{ fontSize: '12px', color: '#64748B' }}>PAGES</h5>
      <div style={{ marginTop: '12px' }}>
        <div
          style={{
            display: 'flex',
            padding: '8px 16px',
            backgroundColor: '#0F172A',
            fontSize: '14px',
            color: '#E2E8F0',
            alignItems: 'center',
          }}
        >
          <AiFillDashboard color='#E2E8F0' fontSize='large' />
          <span style={{ marginLeft: '4px' }}>Dashboard</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            fontSize: '14px',
            color: '#E2E8F0',
          }}
        >
          <RiArrowUpDownFill color='#94A3B8' fontSize='large' />
          <span style={{ marginLeft: '4px' }}>Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Pages;
