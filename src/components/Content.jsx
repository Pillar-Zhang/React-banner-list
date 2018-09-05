import React, { Component } from 'react';
import "./Content.css"
import Item from "./Item"
import PropTypes from 'prop-types'



const propTypes = {
    itemList: PropTypes.array,
}
class Content extends Component {

    render() {
        const { itemList } = this.props
        const emptyItemCount = Array.from({ length: itemList && itemList.length < 3 ? 5 : 7 }, (v, k) => k)
        console.log(itemList, "itemList");
        return (
            <div className="coach-content">
                <div className="coach-list">
                    {itemList.map((item, index) =>
                        <Item key={index} item={item} />)}
                    {emptyItemCount.map((o, index) => <a key={index} className="coach-item-a empty"
                        style={{ height: 0 }} href="javascript:"></a>)}
                </div>
            </div>
        );
    }
}

Content.propTypes = propTypes

export default Content;
