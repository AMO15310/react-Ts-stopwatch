import React from 'react';
import Timer from './components/Timer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Timer/>
    </div>
    </Provider>
    
  );
}

export default App;
