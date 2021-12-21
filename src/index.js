// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from './context/Auth';
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider>
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>

//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/Auth';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
          <App />

      </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);