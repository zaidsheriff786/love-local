import Banner from './Banner';
import Header from './Header';
import OrderValue from './orderValue';
import Revenue from './Revenue';
import Sales from './Sales';
import Section from './section';

const Container = () => {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <div style={{ margin: '0px 24px' }}>
        <Section />
      </div>
      <Sales />
      <div className='containerWrapper'>
        <Revenue />
        <OrderValue />
      </div>
    </div>
  );
};

export default Container;
