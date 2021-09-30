import HeaderMainWide from './components/header/wide/HeaderMain';
import HeaderMainProfile from './components/header/profile/HeaderMain';
import SectionCars from './components/sectionCars/SectionCars';
import {DATA} from './assets/API'
import './App.css';

export const relativeScreen = 1140
export const nCars = 4



function App() {
  return (
    <>
      <header id="header">
        {window.innerWidth >= relativeScreen ? <HeaderMainWide/> : <HeaderMainProfile/>}
      </header>
      <main>
        {DATA.map((item, key)=>{
          return <SectionCars color="white" id={String(key)} key={key} item={item} />
        })}
        
      </main>
    </>
  );
}

export default App;
