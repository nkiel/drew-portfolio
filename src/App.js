import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
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
    if (this.state) {
      this.state.theme = themeName
    } else {
      this.state = { theme: themeName }
    }
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
            <Route path="/" element={<MPortfolio />} />
            <Route path="/about" element={<MAbout />} />
            <Route path='/writing' element={<MWriting />} />
            <Route
              path="*" element={
                <main>
                  <p>TODO: make error page</p>
                </main>
              }
            />
          </Routes>
          <MFooter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;