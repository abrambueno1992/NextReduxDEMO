import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
// import withRedux from 'next-redux-wrapper';
import {connect} from "react-redux";

import './index.css';
import Card from './Card';

class Index extends React.Component  {
    static async getInitialProps ({ store }) {
        const cards = store.dispatch({type: 'INITIALCARDS', payload: 'cards'});
        const cardArray = cards.payload
        // return {cards}
        // return {cards}
        // if (this.props.cards) {
            console.log(cardArray)
            return {cards}
        // }
        console.log(this.props.payload)

    }
    Check = () => {
        console.log(this.props.initialCards, this.props.cards)
    }
    render () {
        // console.log(this.props)
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
                            this.props.payload.map((card) => (
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

const mapDispatchToProps = (dispatch) => {
    return {
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    }
}

// export default connect(initStore, mapStateToProps, mapDispatchToProps)(Index);
export default connect()(Index)