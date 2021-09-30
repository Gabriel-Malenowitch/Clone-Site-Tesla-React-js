import './SectionCars.css'
import { relativeScreen } from '../../App';
import {n} from '../../Orders/scrollPosition'
  
//<img class="sectionCar--backgroundImg" src={window.innerWidth >= relativeScreen?item.img_wide:item.img_profile} alt="" />

function SectionCars({item}) {
  // let colorTheme = item.theme === 'dark' ? 'black' : 'white'
  console.log("tamanho: ",item.buttons.length)
  let theme = {color:item.theme}
  // console.log(item.name, n[0] === "Model 3" ? "visible" : "hidden")
  return (
    <div className="sectionCar" style={{
      backgroundImage: `url(${window.innerWidth >= relativeScreen?item.img_wide:item.img_profile})`,
    }}>
      <div style={{visibility: n[0] === item.name ? "visible" : 'hidden'}}>
        <h1 style={theme} className="sectionCar--title">{item.name}</h1>
        <a href="/#" style={theme} className="sectionCar--description">{item.description}</a>
              {item.buttons.length === 2
              ?(
                <div className="sectionCar--button">
                  <button className="sectionCar--BL" >{item.buttons[0]}</button>
                  <button className="sectionCar--BR" >{item.buttons[1]}</button>
                </div>)
              :(
                <div className="sectionCar--button">
                  <button className="sectionCar--BL" >{item.buttons[0]}</button>
                </div>  
              )
              }
        <div className="sectionCar--divR" style={theme}>{item.divR}</div>
      </div>
    </div>
  );
}

export default SectionCars;
