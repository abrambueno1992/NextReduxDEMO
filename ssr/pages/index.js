import React from 'react';
import { bindActionCreators } from 'redux';
import data from '../data/data.json'
import {connect} from "react-redux";

import './index.css';
import Card from './Card';

class Index extends React.Component  {
    static async getInitialProps ({ store }) {
        const result = store.dispatch({type: 'INITIALCARDS', payload: data});
        
        return {cardArr: result.payload}
        

    }
    Check = () => {
        console.log(this.props.cardArr, this.props)
    }
    render () {
        if (this.props.cardArr) {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src="/static/logo.png"
                            className="static-logo" alt="logo"
                        />
                    </header>
                    <div className="Grid">
                        {
                            this.props.cardArr.map((card) => (
                                <Card key={card.id} />
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.Check}>Check Props</button>
                </div>
            )
        }
        
    }

};


export default connect()(Index)