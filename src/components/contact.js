import React, {Component} from 'react';
import {Grid, Cell, form, label, select} from 'react-mdl';

class Contact extends Component
{
  render()
  {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="Banners">
              <h1>Submit information below</h1>
                <form id="Infoform">
                  <div class="form-group">
                    <label for="FullName">Full Name</label>
                    <input type="text" class="form-control" id="issueDescInput" placeholder="Submit Name"></input>
                  </div>
                  <div class="form-group">
                    <label for="TypyofInfo">Info</label>
                    <select id="TypeInfoInput" class="form-control">
                      <option value="Job">projects</option>
                      <option value="Menu">questions</option>
                      <option value="GeneralQuestions">others</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="Date">Date</label>
                    <input type="text" class="form-control" id="TypeToInput" placeholder="Today's Date"></input>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
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
    );
  }
}
export default Contact;