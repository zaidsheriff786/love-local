import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiFillCaretRight } from 'react-icons/ai';
import LineChart from './charts/lineChart';
const Sales = () => {
  const [salesData, setSalesData] = useState({});

  useEffect(() => {
    getSalesData();
  }, []);

  const getSalesData = async () => {
    const response = await fetch(
      'https://assignment-1-fc7lwmf3uq-el.a.run.app/sales'
    );
    const data = await response.json();
    setSalesData(data.data);
  };

  function averageSalePercentage(currentWeek, lastWeek) {
    const lastWeekTotal = lastWeek.reduce((a, b) => a + b, 0);

    let average = (
      ((currentWeek - lastWeekTotal) / lastWeekTotal) *
      100
    ).toFixed();

    return `${average}%`;
  }

  return (
    <div className='sales'>
      {Object.keys(salesData).length > 0 &&
        Object.keys(salesData).map((entity, index) => {
          return (
            <div className='card' key={index}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <AiFillCaretRight
                  fontSize='large'
                  color={
                    entity === 'customers'
                      ? '#0284C7'
                      : entity === 'key_accounts'
                      ? '#334155'
                      : '#818CF8'
                  }
                  style={{ fontSize: '24px' }}
                />
                <FiMoreHorizontal fontSize='large' />
              </div>
              <div style={{ fontSize: '20px', padding: '8px' }}>
                {salesData[entity]?.title}
              </div>
              <div
                style={{
                  padding: '0px 8px',
                  fontSize: '12px',
                  color: '#94A3B8',
                }}
              >
                Sales
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                }}
              >
                <span style={{ fontSize: '24px', fontWeight: 700 }}>
                  {salesData[entity]?.currentWeekTotal}
                </span>
                <span
                  style={{
                    width: 36,
                    marginLeft: '16px',
                    borderRadius: '24px',
                    backgroundColor: averageSalePercentage(
                      salesData[entity]?.currentWeekTotal,
                      salesData[entity]?.lastWeek
                    ).includes('-')
                      ? 'orange'
                      : '#10B981',
                    padding: '4px',
                    color: '#fff',
                    fontSize: '12px',
                    textAlign: 'center',
                  }}
                >
                  {averageSalePercentage(
                    salesData[entity]?.currentWeekTotal,
                    salesData[entity]?.lastWeek
                  )}
                </span>
              </div>
              <div style={{ height: '120px' }}>
                <LineChart
                  currentWeek={salesData[entity]?.currentWeek}
                  lastWeek={salesData[entity]?.lastWeek}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Sales;
