import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import MHeader from './app/MHeader'
import MNav from './app/MNav'
import MFooter from './app/MFooter'
import MPortfolio from './app/pages/MPortfolio'
import MAbout from './app/pages/MAbout'
import MWriting from './app/pages/MWriting'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'index', theme: 'drew-theme' };
  }

  setTheme(themeName) {
    this.setState({theme: themeName})
    console.log('theme:: ', this.state.theme)
    // rootObj.classList.add(themeName+'-theme')
  }

  render() {
    return (
      <div id="site-wrapper" site-theme={this.state.theme}>
        <BrowserRouter>
          <MHeader />
          <MNav />
          <Routes>
            <Route path="/" element={<Navigate to="/drew-portfolio" />} />
            <Route path="/about" element={<Navigate to="/drew-portfolio/about" />} />
            <Route path="/writing" element={<Navigate to="/drew-portfolio/writing" />} />
            <Route path="/drew-portfolio" element={<MPortfolio />} />
            <Route path="/drew-portfolio/about" element={<MAbout />} />
            <Route path='/drew-portfolio/writing' element={<MWriting />} />
          </Routes>
          <MFooter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;