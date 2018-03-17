import React, { Component } from 'react';
import Infinite from 'react-infinite-loading';

class Allaps extends Component {

  render() {
    return (

        <div className="all-games-container">
        {
            this.props.allApps.map((item, index)=>{
            return (
                <div key={index} className="small-game-container">
                <img src={item.img_path} alt="" className='small-game-img'/>
                <p>{item.header}</p>
                {/* <img src={free} alt="" className='free'/> */}
                <button className='free-btn'>Free</button>
                </div>
            )
            })
        }
        </div>

    );
  }
  
}






export default Allaps;
