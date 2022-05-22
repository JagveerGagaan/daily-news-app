import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // const pageSize = 5;
  // const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />

      <LoadingBar color='#f11946' progress={progress} height={5} />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'general'}
              pageSize={6}
              country='in'
              category='general'
            />
          }
        />
        <Route
          exact
          path='/business'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'business'}
              pageSize={6}
              country='in'
              category='business'
            />
          }
        />
        <Route
          exact
          path='/entertainment'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'entertainment'}
              pageSize={6}
              country='in'
              category='entertainment'
            />
          }
        />
        <Route
          exact
          path='/health'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'health'}
              pageSize={6}
              country='in'
              category='health'
            />
          }
        />
        <Route
          exact
          path='/science'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'science'}
              pageSize={6}
              country='in'
              category='science'
            />
          }
        />
        <Route
          exact
          path='/sports'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'sports'}
              pageSize={6}
              country='in'
              category='sports'
            />
          }
        />
        <Route
          exact
          path='/technology'
          element={
            <News
              // apikey={apikey}
              setProgress={setProgress}
              key={'technology'}
              pageSize={6}
              country='in'
              category='technology'
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
