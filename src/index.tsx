import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {AboutPage} from './pages/AboutPage/AboutPage';
import {ContactPage} from './pages/ContactPage/ContactPage';


ReactDOM.render(
  
  <div > 
    <BrowserRouter>
      <Switch>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>

        <Route path="/" exact={true}>
          <Redirect to="/about" exact={true} />
        </Route>

      </Switch>
    </BrowserRouter>


  </div>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
