import React, { Component } from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite-loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Allaps from './Allaps';
import PropTypes from 'prop-types';
import Single from './Single-component';
import Slider from './Slider';

import logo from '../images/main/header/car.png'
class Main extends Component {
  constructor (props) {
    super(props);
      this.state = {
        step: 5,
        apps: this.props.games.slice(0, 5),
        isLoading: false,
    }
  }

  // componentDidMount = () => window.addEventListener('scroll', this.handleScroll.bind(this))
  // componentDidMount = () => document.getElementById('scrollMe').addEventListener('scroll', this.handleScroll.bind(this))

  foo() {
    // this.setState({
    //   apps: this.props.games.slice(0, this.state.step),
    //   step: this.state.step+3
    // })
    alert('s')
  }

  handleScroll = () => {
    console.log('s')
    // if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !this.state.isLoading) {
    //   this.setState({
    //     isLoading: true,
    //   });

      // Load more content
      this.setState({
        apps: this.props.games.slice(0, this.state.step),
        step: this.state.step+3
      })
      // Only call after loading finishes
      this.setState({
        isLoading: false,
      });
    // }
}
refresh() {
  console.log('s')
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
              pullDownToRefresh={100}
              // refreshFunction={this.foo.bind(this)}
              refreshFunction={this.handleScroll.bind(this)}
              next={this.handleScroll.bind(this)}
              hasMore={true}
              height={200}
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
