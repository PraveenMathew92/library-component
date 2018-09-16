import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AdminView from './components/AdminView';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

ReactDOM.render(<App>
    <BrowserRouter>
    <Switch>
        <Route path={'/admin'} component={AdminView}/>
        <Route path={'/profile'} component={ProfilePage}/>
        <Route path={'/'} component={HomePage}/>
    </Switch>
    </BrowserRouter>
    </App>, document.getElementById('root'));