import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Layout} from 'antd';

import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './routes/AppRouter/AppRouter';

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader/>
        <AppRouter/>
      </Layout>
    </Router>
  );
}

export default App;
