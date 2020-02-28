import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component
{
  render()
  {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <div className ="Resume-Text">
          <h1>This is the Resume Page</h1>
        </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
