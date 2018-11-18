import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './containers/Header/Header';
import MainImage from './components/MainImage/MainImage';
import Body from './containers/Body/Body';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './containers/Footer/Footer';



class App extends Component {

  state = {
    wordpressData: {},
    projects: [],
    mobileMenuActive: false,
    navMenuClass: "mobile-menu",
    line1Class: "mobile-nav-button__line",
    line2Class: "mobile-nav-button__line",
    line3Class: "mobile-nav-button__line",
    successClosed: {
      display: "block"
    },
    loaded: true,
    loadingStyles: {
      "display" : "flex",
      "opacity": "1"
    },
    bodyStyles: {
      "opacity" : "0",
      "transition": "0.6s"
    }
  }

  componentDidMount() {
    axios.get('https://developwithchris.com/wp-json/wp/v2/posts')
      .then(response => {
        this.setState({
          wordpressData: response.data[0].acf,
          loadingStyles: {"display": "none"},
          bodyStyles: {"opacity": "1", "transition": "0.6s"}
        });
      });
    axios.get('https://developwithchris.com/wp-json/wp/v2/projects')
    .then(response => {
      this.setState({projects: response.data});
      console.log(response);
    });
  }

  toggleMenuHandler = () => {
    if(!this.state.mobileMenuActive) {
      this.setState({navMenuClass: "mobile-menu mobile-menu--open"});
      this.setState({line1Class: "mobile-nav-button__line mobile-nav-button__line--1"});  
      this.setState({line2Class: "mobile-nav-button__line mobile-nav-button__line--2"});  
      this.setState({line3Class: "mobile-nav-button__line mobile-nav-button__line--3"});  
    } else {
      this.setState({navMenuClass: "mobile-menu"});
      this.setState({line1Class: "mobile-nav-button__line"});  
      this.setState({line2Class: "mobile-nav-button__line"});  
      this.setState({line3Class: "mobile-nav-button__line"});  
    }
    this.setState({mobileMenuActive: !this.state.mobileMenuActive});
  }

  render() {
    return (
      <>
        <div className="loading" style={this.state.loadingStyles} ><div className="spinner spinner-1"></div></div>
        <HashRouter>
          <div style={this.state.bodyStyles}>
            <div className="App site-container">
              <Header 
                heroHeaderText={this.state.wordpressData.hero_header_text}
                projectsPageHeader={this.state.wordpressData.projects_page_header} 
                contactPageHeader={this.state.wordpressData.contact_page_header}
                toggleMenuHandler={this.toggleMenuHandler}
                navMenuClass={this.state.navMenuClass}
                line1Class={this.state.line1Class}
                line2Class={this.state.line2Class}
                line3Class={this.state.line3Class} 
              />
              <Route path="/" exact render={() => <MainImage imageURL={this.state.wordpressData.main_image} />} />
              <Body 
              wordpressData={this.state.wordpressData} 
              projects={this.state.projects} 
              successClosed={this.state.successClosed}
              closeHandler={this.closeHandler}
              />
              <Route path="/" exact render={() => <CallToAction 
                callToActionText={this.state.wordpressData.call_to_action_text} 
                buttonText={this.state.wordpressData.call_to_action_button_text} 
              />} />
              <Route path="/projects" exact render={() => <CallToAction 
                callToActionText={this.state.wordpressData.call_to_action_text} 
                buttonText={this.state.wordpressData.call_to_action_button_text} 
              />} />      
              <Footer footerText={this.state.wordpressData.footer_text} />
            </div>
          </div>
        </HashRouter>
      </>
    );
  }
}

export default App;
