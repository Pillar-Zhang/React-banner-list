// cSpell:word keshishezhi fenpei shouye Fengmian keshi
import React, { Component } from 'react';
import "./Item.css"
import defaultCover from "../static/item.jpg"

class Item extends Component {
    render() {
        return (
            <a className="coach-item-a" href="javascript:">
                <div className="coach-item" >
                    <div className="poster-coach-mid" style={{
                        backgroundImage: `url("${defaultCover}")`
                    }} />
                </div>
            </a>
        );
    }
}

export default Item;
