import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollPosition from './Orders/scrollPosition'

function reload(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
reload()



ScrollPosition.main()
window.addEventListener('scroll', ScrollPosition.main)
// window.addEventListener('scroll', reload)
window.addEventListener('resize', reload)


// console.log(document.getElementById('1').getBoundingClientRect())