import React from 'react';
import './App.css';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min.js';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

class App extends React.Component {
  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout
                      mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Application</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="https://www.google.com">Home</a>
                <a className="mdl-navigation__link" href="https://www.google.com">About </a>
                <a className="mdl-navigation__link" href="http://github.com/toureek/dwell">Github</a>
                <a className="mdl-navigation__link" href="https://www.google.com">Contact</a>
              </nav>

              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
               mdl-textfield--floating-label mdl-textfield--align-right">
                <label className="mdl-button mdl-js-button mdl-button--icon"
                         for="fixed-header-drawer-exp">
                  <i className="material-icons">search</i>
                </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample"
                 id="fixed-header-drawer-exp">
                 </input>
              </div>
              </div>
            </div>

            <div className="mdl-layout__tab-bar mdl-js-ripple-effect"
                 style={{backgroundColor: '#5D43DA'}} >
                <a href="#fixed-tab-1" className="mdl-layout__tab is-active"><b>Content</b></a>
                <a href="#fixed-tab-2" className="mdl-layout__tab"><b>Map</b></a>
                <a href="#fixed-tab-3" className="mdl-layout__tab"><b>Search Result</b></a>
            </div>
          </header>

          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">toureek</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="https://www.google.com"><b>Email: </b></a>
              <a className="mdl-navigation__link" href="https://www.google.com"><b>Objective: </b></a>
              <a className="mdl-navigation__link" href="https://www.google.com"><b>Desc: </b></a>
              <a className="mdl-navigation__link" href="https://www.google.com"><b>Location: CN</b></a>
            </nav>
          </div>

          <main className="mdl-layout__content">
              <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                <div className="page-content">List Page</div>
              </section>
              <section className="mdl-layout__tab-panel" id="fixed-tab-2">
                <div className="page-content">Map View</div>
              </section>
              <section className="mdl-layout__tab-panel" id="fixed-tab-3">
                <div className="page-content">Search Result View</div>
              </section>
          </main>
      </div>

    ); 
  }
}

export default App;