import React from 'react';
import Navigation from './app/navigators/Navigation';
import {store} from './app/redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
