import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Single extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="small-game-container">
                <Link to={item.name}>
                    <img src={item.img_path} alt="" className='small-game-img'/>
                </Link>
                <p>{item.header}</p>
                <button className='free-btn'>Free</button>
            </div>
        )
    }
}

export default Single;