import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleSliderGame from './Single-Slider-game';

class SubMain extends Component {

  render() {
    const path = this.props.match.params.name;
    const index = this.props.games.findIndex(item=>{
        return item.name === path
    })
    const item = this.props.games[index]
    return (
      <div className="slider">
        <div className="slider-content" >
          <div className="single-game" >
            <SingleSliderGame key={index} item={item} letFoo={true} index={index} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      games: state.games,
  } 
}

export default connect(mapStateToProps)(SubMain);