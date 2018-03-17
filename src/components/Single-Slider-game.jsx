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
          starValue: 0
        }
      }

      componentDidMount () {
        this.setState({
          starValue: this.props.item.rating
        })
      }

      foo2(x) {
        this.setState({
          starValue: x
        })
          this.props.setRating(x, this.props.index)
      }

      foo() {
        return (
    
          <div className='star-container'>
            <h1 className={this.state.starValue>=1? 'yellow-star': 'star'} onClick={()=>this.foo2(1)}>{String.fromCharCode(9733)}</h1>
            <h1 className={this.state.starValue>=2? 'yellow-star': 'star'} onClick={()=>this.foo2(2)}>{String.fromCharCode(9733)}</h1>
            <h1 className={this.state.starValue>=3? 'yellow-star': 'star'} onClick={()=>this.foo2(3)}>{String.fromCharCode(9733)}</h1>
            <h1 className={this.state.starValue>=4? 'yellow-star': 'star'} onClick={()=>this.foo2(4)}>{String.fromCharCode(9733)}</h1>
            <h1 className={this.state.starValue>=5? 'yellow-star': 'star'} onClick={()=>this.foo2(5)}>{String.fromCharCode(9733)}</h1>
          </div>
    
        )
      }
     

    render() {
        const { item } = this.props;
        return (

        <div className='game-container'>
          <div className='img-container'>
            <Link to={item.name}>
               <img src={item.img_path} alt=""/>
              {
                this.props.letFoo? this.foo() : ''
              }
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