import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component
{
  render()
  {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://www.erasmuslifebudapest.com/wp-content/uploads/2017/08/HiRes-Medium-768x675.jpg"
              alt="avatar"
              className="avatar-img"/>
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr/>
                <p>Java | JavaScript | HTML/CSS | React | Python | C/C#/C++</p>
              <div className="social-links">
                {/*Linkedin*/}
                <a href="http://www.linkedin.com/in/luis-ledezma" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                {/*Github*/}
                <a href="http://www.github.com/lledezma" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
