import Pages from './Pages';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: '36px', height: '36px' }}
      >
        <path
          d='M29.6027427,18.5061163 C28.0715014,25.2680922 21.9527652,30 15.0194761,30 L2.66453526e-15,30 L2.66453526e-15,14.980545 C2.66453526e-15,8.04726576 4.73175053,1.9285382 11.4938999,0.397299002 C22.4922487,-2.09323917 32.0931205,7.50778303 29.6027427,18.5061163'
          fill='#b8238e'
        ></path>
        <polygon
          fill='#ffffff'
          fill-rule='nonzero'
          points='12.5749815 17.424987 12.5749815 11.1267597 5.93823626 11.1267597 5.93823626 17.424987 5.93823626 24.0617229 12.5749815 24.0617229 18.8732177 24.0617229 18.8732177 17.424987'
        ></polygon>
      </svg>
      <Pages />
    </div>
  );
};

export default Sidebar;
