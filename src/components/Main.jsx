import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Single from './Single-component';
import Slider from './Slider';

import logo from '../images/main/header/car.png'
class Main extends Component {
  constructor (props) {
    super(props);
      this.state = {
        step: 5,
        apps: this.props.games.slice(0, 5)
    }
  }

  handleScroll = () => {

    setTimeout(()=>{
      this.setState({
        apps: this.props.games.slice(0, this.state.step),
        step: this.state.step+5
      })
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
              <InfiniteScroll
              next={()=>this.handleScroll()}
              hasMore={true}
              height={250}
              >
              <div className="all-games-container" id='scrollMe'>

                {
                  this.state.apps.map((item, index)=>{
                    return (
                      <Single key={index} item={item}/>
                    )
                  })
                }

              </div> 
              </InfiniteScroll>
              <div className="gray-div"></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
      games: state.games,
  } 
}

export default connect(mapStateToProps)(Main);