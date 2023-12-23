import style from './IndexLayout.module.scss';
import Header from '../Header';
import Footer from '../Footer';

export default function IndexLayout({ children }) {
  return (
    <div className={style.indexLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
