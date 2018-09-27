import React from 'react';
import { bindActionCreators } from 'redux';
import data from '../data/data.json'
import {connect} from "react-redux";
import {initialCardsAction, AddAction} from '../actions'
import './index.css';
import Card from './Card';

class Index extends React.Component  {
    static async getInitialProps ({ store }) {
        store.dispatch(initialCardsAction())
        store.dispatch(AddAction())
    }
    render () {
        if (this.props.cards) {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src="/static/logo.png"
                            className="static-logo" alt="logo"
                        />
                    </header>
                    <div className="Grid">
                        {
                            this.props.cards.map((card) => (
                                <Card key={card.id} />
                            ))
                        }
                    </div>
                </div>
            )
        } 
    }

};
const mapDisPatchToProps = dispatch => {
    return {
        initialCardsAction: bindActionCreators(initialCardsAction, dispatch),
        AddAction: bindActionCreators(AddAction, dispatch)
    }
}
const mapStateToProps = state => {
    return {
        cards: state.cards,
        test: state.add
    }
}


export default connect(mapStateToProps, mapDisPatchToProps)(Index)