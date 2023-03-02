import React, { useState, useEffect } from 'react';
import OrderValueChart from './charts/orderValueChart';

function OrderValue() {
  const [orderValueData, setOrderValueData] = useState({});

  useEffect(() => {
    getRevenueData();
  }, []);

  const getRevenueData = async () => {
    const response = await fetch(
      'https://assignment-1-fc7lwmf3uq-el.a.run.app/order-value'
    );
    const data = await response.json();
    setOrderValueData(data.data);
  };

  function calculateAveragePercentage(values, total) {
    const average = (total / values.length) * 100;
    return `+${average.toFixed()}%`;
  }
  return (
    Object.keys(orderValueData).length > 0 && (
      <div className='orderValueCard'>
        <div style={{ fontSize: '16px', fontWeight: 700, padding: '8px' }}>
          {'AVG Order Value'}
        </div>
        <div
          style={{
            padding: '0px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>
              {orderValueData?.total}
            </div>
            <div
              style={{
                marginLeft: '8px',
                width: 40,
                borderRadius: '24px',
                backgroundColor: '#10B981',
                padding: '4px',
                color: '#fff',
                fontSize: '10px',
                textAlign: 'center',
              }}
            >
              {calculateAveragePercentage(
                orderValueData?.values,
                orderValueData?.total
              )}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                border: '3px solid #6366F1',
                borderRadius: '50%',
              }}
            ></div>
            <span
              style={{ marginLeft: '4px', fontSize: '14px', color: '#64748B' }}
            >
              Current
            </span>
            <div
              style={{
                marginLeft: '8px',
                width: '8px',
                height: '8px',
                border: '3px solid #CBD5E1',
                borderRadius: '50%',
              }}
            ></div>
            <span
              style={{ marginLeft: '4px', fontSize: '14px', color: '#64748B' }}
            >
              Previous
            </span>
          </div>
        </div>
        <div style={{ height: '200px' }}>
          <OrderValueChart values={orderValueData?.values} />
        </div>
      </div>
    )
  );
}

export default OrderValue;
