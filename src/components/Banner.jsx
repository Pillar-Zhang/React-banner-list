// cSpell:word huaban PESTEL jianchuang Estartup

import React, { Component } from 'react';
import "./Banner.css"
import PropTypes from 'prop-types'

function fillRecommendArray(list = []) {
    while (list.length < 1) return []
    while (list.length > 3) {
        return list
    }
    return fillRecommendArray([...list, ...list])
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

class Banner extends Component {
    constructor() {
        super()
        this.state = {
            count2: 0
        }
        this.animationInterval = null
        this.$itemList = null
        this.count = 0
        this.recommendDotClick = this.recommendDotClick.bind(this)
    }
    componentDidMount() {
        this.$itemList.setAttribute("style", `left: 0px;transition: left 0s`)
        this.animationInterval = setInterval(() => this.recommendAnimation(), 3000)
    }

    static defaultProps = {
        style: {}
    }

    recommendAnimation() {
        const { count2 } = this.state

        if (this.count > 3) {
            this.count = 1
            this.$itemList.setAttribute("style", `left: 0px;transition: left 0s`)
            setTimeout(() => this.$itemList.setAttribute("style",
                `left: -${this.count * 624}px;transition: left 2s`), 100)
            this.setState({ count2: 1 })

        } else {
            this.count++
            this.$itemList.setAttribute("style", `left: -${this.count * 625}px;transition: left 2s`)
            this.setState({ count2: count2 + 1 })

        }
    }

    componentWillUnmount() {
        clearInterval(this.animationInterval)
    }
    recommendDotClick(num) {
        clearInterval(this.animationInterval)
        this.count = num

        this.$itemList.setAttribute("style", `left: 0px;transition: left 0s`)
        this.$itemList.setAttribute("style", `left: -${this.count * 624}px;transition: left .5s`)
        this.setState({ count2: num }, () => { this.animationInterval = setInterval(() => this.recommendAnimation(), 3000) })
    }
    render() {
        const { count2 } = this.state
        const { recommendList } = this.props
        const newRecommendList = [...fillRecommendArray(recommendList), ...fillRecommendArray(recommendList)]

        return (
            <div className="coach-recommend" >
                <h1 className="recommend-title">（仿虾米音乐移动端首页）滚动banner + 自适应缩放列表</h1>
                <div className="rec-item-list" ref={(dom) => this.$itemList = dom}>
                    {
                        newRecommendList.map((recommend) => {
                            return (
                                <a key={"rc" + guid()} href="javascript:" >
                                    <div className="rec-item">
                                        <div className="rec-coach-img">
                                            <img className="coach-img" src={recommend.url} alt="" />
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
                <div className="coach-recommend-steps">
                    {recommendList.slice(0, 4).map((item, index) => {
                        return (
                            <a key={item.id} href="javascript:" onClick={this.recommendDotClick.bind(this, index)}>
                                <span className={"dot " + (index === (count2 > 3 ? 0 : count2) ? "active" : "")}></span>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Banner.propTypes = {
    recommendList: PropTypes.array,
};

export default Banner;
