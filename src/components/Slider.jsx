import React, { Component } from 'react';
import arrow from '../images/main/slider/arrow.png';
import SingleSliderGame from './Single-Slider-game';

class Single extends Component {
    constructor (props) {
        super(props);
        this.state = {
          active: 0,
          containerStyle: {
              left: 25+'%'
          }
        }
      }
      
      moveSlider (x) {
    
        let newPosition = parseInt(this.state.containerStyle.left, 10);
        newPosition+=50*x;
        this.setState({
          active: this.state.active - x,
          containerStyle: {
            left:  newPosition+'%',
          }
        })
        console.log(this.state.active)
    
        if(this.state.active>=this.props.games.length-1 && x===-1) {
          this.setState({
            active: 0,
            containerStyle: {
              left:  25+'%',
            }
          })
        console.log(this.state.containerStyle.left)
          
        }
        if(this.state.active === 0 && x===1) {
          console.log('s')
          
          this.setState({
            active: 0,
            containerStyle: {
              left:  25+'%',
            }
          }) 
          
          }
          
      }

    render() {
        return (
            <div className='slider'>
            <img src={arrow} className='l-arrow left' alt="" onClick={()=>this.moveSlider(1)}/>
            <img src={arrow} className='right' alt="" onClick={()=>this.moveSlider(-1)}/>
            <div className="slider-content" style={this.state.containerStyle}> 
            {
              this.props.games.map((item, index)=>{
                return  (
                  <SingleSliderGame key={index} item={item} />
                )
              })
            }
            </div>
            </div>
        )
    }
}

export default Single;