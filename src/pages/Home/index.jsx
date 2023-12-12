// import logo from '../logo.svg';
import '../../styles/App.css';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import SectionBg from '../../components/SectionBg';

function App() {
  return (
    <div>
      <Header />
      <SectionBg />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App;
