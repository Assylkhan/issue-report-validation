// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {

  // <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //             <ul className="navbar-nav mr-auto">
  //             <li className="nav-item">
  //               <Link to={'/'} className="nav-link">Home</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link to={'/create'} className="nav-link">Create</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link to={'/index'} className="nav-link">Index</Link>
  //             </li>
  //             </ul>
  //           </div>
            // <Link to={'/'} className="alert-link" align="center">Issue Validation</Link>
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="alert alert-success" align="center">
          <h4 className="alert-link" align="center">Utest Academy</h4>
          </nav> <br/>
          <Switch>
            <Route exact path='/' component={ Create } />
              // <Route exact path='/create' component={ Create } />
              // <Route path='/edit/:id' component={ Edit } />
              // <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
