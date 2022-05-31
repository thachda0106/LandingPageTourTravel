import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='AbsCenter'>
        <Header/>
        <Banner/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>
      <div className='FooterAbs'>
        <div className='AbsCenter'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
