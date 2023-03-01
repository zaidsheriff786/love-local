import Banner from './Banner';
import Header from './Header';
import OrderValue from './orderValue';
import Revenue from './Revenue';
import Sales from './Sales';

const Container = () => {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <Sales />
      <div className='containerWrapper'>
        <Revenue />
        <OrderValue />
      </div>
    </div>
  );
};

export default Container;
