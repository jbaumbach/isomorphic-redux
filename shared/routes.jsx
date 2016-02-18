import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import App                     from 'components/index';
import Home                    from 'components/Home';
import About from 'components/About';
import Carlos from 'components/Carlos';
import HighFives from 'components/HighFives';

export default (
  <Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
    <Route path="/about" component={About}>
      <Route path="carlos" component={Carlos}>
        <Route path=":highfives" component={HighFives} />
      </Route>
    </Route>
  </Route>
);
