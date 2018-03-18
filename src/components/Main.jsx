import React, { Component } from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite-loading';
import Allaps from './Allaps';
import PropTypes from 'prop-types';
import Single from './Single-component';
import Slider from './Slider';

//images
import fb from '../images/main/social/fb.png'
import tw from '../images/main/social/tw.png'
import google from '../images/main/social/google.png'
import vk from '../images/main/social/vk.png'
import logo from '../images/main/header/car.png'
class Main extends Component {
  constructor (props) {
    super(props);
      this.state = {
        apps: this.props.games.slice(0, 3),
        step: 3,
    }
  }

  foo() {
    this.setState({
      apps: this.props.games.slice(0, this.state.step+3),
      step: this.state.step+3
    })
  }

  render() {
    return (
      <div>

        <div className='main-header'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Labore nulla non reprehenderit pariatur sunt exercitation.</p>
          </div>
        </div>
        <div className='main'>
          <Slider games={this.props.games}/>
          <div className="apps">
              <p className='border-paragraph'>All Apps</p>
              <div className="all-games-container">
                {
                  this.state.apps.map((item, index)=>{
                    return (
                      <Single key={index} item={item}/>
                    )
                  })
                }
              </div> 
              {/* <Infinite  loading={true} 
              
              scrollHeight={150}>
                <Allaps allApps={this.props.allApps}/> */}
            {/* </Infinite> */}
              <p onClick={()=>this.foo()}>click</p>
          </div>
        </div>
      </div>
      
    );
  }
  
}

Infinite.propTypes = {
  // control the current status. loading = true the animation is displayed and no longer triggers handleLoading event
  loading: PropTypes.bool,
  // whether to display the loading animation
  isLoading: PropTypes.bool,
  // load animation components
  asLoading: PropTypes.node,
  // if true, scroll range as a current component on the contrary scroll range as a window
  elementScroll: PropTypes.bool,
  // set the height of the scroll container, scrollHeight={300} or scrollHeight="calc(100% - 100px)"
  scrollHeight: PropTypes.any.isRequired,
  // trigger handleLoading event threshold
  scrollThreshold: PropTypes.num,
  // scroll to the bottom event
  handleLoading: PropTypes.func,
  // sisplayed content
  children: PropTypes.node
};

function mapStateToProps (state) {
  console.log(state)
  return {
      games: state.games,
  } 
}




export default connect(mapStateToProps)(Main);
