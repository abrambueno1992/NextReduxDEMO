// pages/_app.js
import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {initialCards}  from '../store'
import data from '../data/data.json'
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item]
            }
        default: return state
    }
}

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const startState = {
    cards: []
}
const makeStore = (initialState = startState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
         const pageProps = ctx.store.dispatch({type: 'INITIALCARDS', payload:data});

        // const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : console.log('Success');
        // console.log(ctx)
        // console.log(pageProps)
        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);