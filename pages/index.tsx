import IndexLayout from '../components/layouts/IndexLayout';
import Contractors from '../components/Contractors';
import ContractorDetail from '../components/ContractorDetail';
import RecentNews from '../components/RecentNews';
import About from '../components/About';

import style from './index.module.scss';

export default function IndexPage() {
  return (
    <IndexLayout>
      <main className={`${style.main}`}>
        <nav className='navbar'>
          <button>Home</button>
          <button>Directory</button>
          <button>News</button>
        </nav>
        <div className="bgContractor">
          <div className="ml-50 mt-50">
            <div className="font-100 font-weight font-sans-serif">Detroit contractors</div>
            <div className="font-30 font-sans-serif">Do you know what you really need? A quality contractor</div>
          </div>
          <Contractors />
        </div>
        <ContractorDetail />
        <RecentNews />
        <About />
      </main>
    </IndexLayout>
  );
}