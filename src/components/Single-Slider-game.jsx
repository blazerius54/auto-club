import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRating } from '../actions/index';
import amazon from '../images/main/slider/amazon.png';
import an from '../images/main/slider/an.png';
import apple from '../images/main/slider/apple.png';
import bb from '../images/main/slider/bb.png';
import ovi from '../images/main/slider/ovi.png';
import wp from '../images/main/slider/wp.png';

class SingleSliderGame extends Component {
    constructor (props) {
        super(props);
        this.state = {
          starValue: this.props.item.rating
        }
      }

      foo2(x) {
        this.setState({
          starValue: x
        })
          this.props.setRating(x, this.props.index)
      }

      foo() {
        let arr=[];
        for(let i=0; i<5; i++) {
          arr.push(
            <h1 key={i} className={this.state.starValue>=i? 'yellow-star': 'star'} onClick={()=>this.foo2(i)}>{String.fromCharCode(9733)}</h1>
          )          
        }
        return arr
      }

    render() {
        const { item } = this.props;
        return (

          <div className='game-container'>
            <div className='img-container'>
              <Link to={'p'+item.name}>
                <img src={item.img_path} alt=""/>
                <div className='star-container'>

                {
                  this.props.letFoo? 
                    this.foo() 
                    : 
                    ''
                }
                
                </div>
              </Link>
            </div>
            <div className='text-container'>
              <h2>{item.header}</h2>
              <p>{item.text}</p>
              <div className='stores'>
                <img src={apple} alt=""/>
                <img src={an} alt=""/>
                <img src={wp} alt=""/>
                <img src={bb} alt=""/>
                <img src={ovi} alt=""/>
                <img src={amazon} alt=""/>
              </div>
            </div>
          </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setRating }, dispatch)
}

export default connect(null, mapDispatchToProps)(SingleSliderGame)