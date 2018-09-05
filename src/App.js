import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner'
import Content from "./components/Content"


class App extends Component {
    render() {
        const itemList = Array.from({ length: parseInt(Math.random() * 50) }, (v, k) => k)
        const recommendList = Array.from({ length: 4 }, (v, k) => k).map(r => {
            return { id: `r${r}`, url: `${require(`./static/banner${r + 1}.png`)}` }
        })
        return (
            <div className="App">
                <Banner title="热门推荐" recommendList={recommendList} />
                <Content itemList={itemList} />
            </div>
        );
    }
}

export default App;
