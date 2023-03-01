const Banner = () => {
  return (
    <div className='banner'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 500 }}>
          Good afternoon, Zaid
        </h2>
        <h6
          style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#475569',
            lineHeight: '24px',
          }}
        >
          Here is what happening today
        </h6>
      </div>
    </div>
  );
};

export default Banner;
