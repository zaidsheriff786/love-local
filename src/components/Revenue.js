import React, { useState, useEffect } from 'react';
import BarChart from './charts/barChart';
function Revenue() {
  const [revenueData, setRevenueData] = useState({});

  useEffect(() => {
    getRevenueData();
  }, []);

  const getRevenueData = async () => {
    const response = await fetch(
      'https://assignment-1-fc7lwmf3uq-el.a.run.app/revenue'
    );
    const data = await response.json();
    setRevenueData(data.data);
  };

  return (
    Object.keys(revenueData).length > 0 && (
      <div className='revenueCard'>
        <div style={{ fontSize: '16px', fontWeight: 700, padding: '8px' }}>
          {'Direct Vs Indirect'}
        </div>
        <div style={{ padding: '0px 8px', display: 'flex' }}>
          <div
            style={{ display: 'flex', width: '200px', alignItems: 'center' }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                border: '3px solid #6366F1',
                borderRadius: '50%',
              }}
            ></div>
            <span
              style={{ marginLeft: '4px', fontSize: '24px', fontWeight: '700' }}
            >{`${revenueData?.totalRevenue?.direct}Cr`}</span>
            <span
              style={{ marginLeft: '16px', fontSize: '14px', color: '#64748B' }}
            >
              Direct
            </span>
          </div>
          <div
            style={{ display: 'flex', width: '200px', alignItems: 'center' }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                border: '3px solid #38BDF8',
                borderRadius: '50%',
              }}
            ></div>
            <span
              style={{ marginLeft: '4px', fontSize: '24px', fontWeight: '700' }}
            >{`${revenueData?.totalRevenue?.indirect}Cr`}</span>
            <span
              style={{ marginLeft: '16px', fontSize: '14px', color: '#64748B' }}
            >
              Indirect
            </span>
          </div>
        </div>
        <div style={{ height: '200px' }}>
          <BarChart revenue={revenueData?.revenue} />
        </div>
      </div>
    )
  );
}

export default Revenue;
