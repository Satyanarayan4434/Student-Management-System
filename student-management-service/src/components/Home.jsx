import TopHeader from './Top-header'
import Buttons from './Buttons';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <TopHeader />
        <Buttons />
      </div>
    </div>
  );
};

export default Home;
