import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import './fonts.css';
import './App.css';

import Header from './containers/Header/Header';
import MainImage from './components/MainImage/MainImage';
import Body from './containers/Body/Body';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './containers/Footer/Footer';



class App extends Component {

  state = {
    wordpressData: {},
    projects: []
  }

  componentDidMount() {
    axios.get('https://developwithchris.com/wp-json/wp/v2/posts')
      .then(response => {
        this.setState({wordpressData: response.data[0].acf});
      });
    axios.get('https://developwithchris.com/wp-json/wp/v2/projects')
    .then(response => {
      this.setState({projects: response.data});
      console.log(response);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App site-container">
          <Header 
          heroHeaderText={this.state.wordpressData.hero_header_text}
          projectsPageHeader={this.state.wordpressData.projects_page_header} 
          contactPageHeader={this.state.wordpressData.contact_page_header} 
          />
          <Route path="/" exact render={() => <MainImage imageURL={this.state.wordpressData.main_image} />} />
          <Body wordpressData={this.state.wordpressData} projects={this.state.projects} />
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
      </BrowserRouter>
    );
  }
}

export default App;
