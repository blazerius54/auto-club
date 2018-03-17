import React, { Component } from 'react';


class Single extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="small-game-container">
                <img src={item.img_path} alt="" className='small-game-img'/>
                <p>{item.header}</p>
                <button className='free-btn'>Free</button>
            </div>
        )
    }
}




export default Single;
