import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';


class App extends Component {
   
    state = {displayBio: false };
    
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }
    render() {            
        return(
            <div>
                <img src={profile} alt= 'profile' className= 'profile' />
                <h1>Velkommen!</h1>
                <p>My name is Peter. I am an aspiring software engineer.</p>
                <p>Among my interests there are: Music, Languages and Science, but for some time now I am hooked up on IT!</p>
                {
                  this.state.displayBio ? (
                       <div>
                       <p>I recently moved to Norway with my girlfriend.</p>
                        <p>I am actively learning Norwegian Language, and if you say something in Norwegian, there is a high probability I will be able to understand.</p>
                        <p>I like spending time around people, because they always have something interesting to share.</p>
                        <p>And I am always eager to learn.</p>
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read Less</button>
                        </div>
                  </div> ) : (
                      <div>
                          <button onClick={this.toggleDisplayBio}>Read More</button>
                      </div>
                  )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}
export default App;