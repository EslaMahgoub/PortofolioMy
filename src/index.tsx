import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage/AboutPage';
import {ContactPage} from 'pages/ContactPage/ContactPage';
import { history } from 'libs/http/history'
import { BlogPage } from 'pages/BLogPage/BlogPage';

ReactDOM.render(
  
  <div > 
    <Router history={history}>
      <Switch>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/blog" component={BlogPage}/>

        <Route path="/" exact={true}>
          <Redirect to="/about" exact={true} />
        </Route>

      </Switch>
    </Router>


  </div>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
