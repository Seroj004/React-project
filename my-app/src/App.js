import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = ({state}) => {

  
  
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>

        <Route path='/dialogs' render = { () => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />} />

          <Route path='/profile' render={ () => <Profile posts = {state.profilePage.posts} />} />

          

        </div>
      </div>
    </Router>
  );
}





export default App;
