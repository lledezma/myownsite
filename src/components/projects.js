import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component
{
  constructor(props) 
  {
    super(props);
    this.state = {
      activeTab:0
    }
  } 
  toggleCategories() {
    if(this.state.activeTab ===0) /* React Project */
    {
      return(
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center/ cover #46B6AC'}}></CardTitle>
            <CardText>
              React Project
            </CardText>
          <CardActions border>
            <a href="http://github.com/lledezma/myownsite" rel="noopener noreferrer" target="_blank">
              <Button colored>View Project</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      );
    }else if(this.state.activeTab ===1){ /* Python Project */
      return(
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://princetonlibrary.org/wp-content/uploads/2017/12/python.png) center/ cover #46B6AC'}}></CardTitle>
            <CardText>
              Python Project
            </CardText>
          <CardActions border>
            <a href="http://github.com/lledezma/WebProject_LuisLedezma" rel="noopener noreferrer" target="_blank">
              <Button colored>View Project</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      );
    }else if(this.state.activeTab ===2){ /* Java Project */
      return(
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://www.isaac.nl/contentAsset/image/97002e0f-320a-433a-8d17-afa83b729dcf/image) center/ cover #46B6AC'}}></CardTitle>
            <CardText>
            Java Project
            </CardText>
        <CardActions border>
          <a href="http://github.com/lledezma/Tictactoe" rel="noopener noreferrer" target="_blank">
            <Button colored>View Project</Button>
          </a>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
      );
    }else if(this.state.activeTab ===3){ /* Web Project */
      return(
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(http://www.techasoft.com/debug/img/html_css.png) center/ cover #46B6AC'}}></CardTitle>
            <CardText>
              Web Project
            </CardText>
        <CardActions border>
          <a href="http://github.com/lledezma/JavaJam" rel="noopener noreferrer" target="_blank">
            <Button colored>View Project</Button>
          </a>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
      );
    }
  }
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Python</Tab>
            <Tab>Java</Tab>
            <Tab>HTML/CSS</Tab>
        </Tabs>
        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;