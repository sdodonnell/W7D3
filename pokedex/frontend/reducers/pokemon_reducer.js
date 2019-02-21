import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            return merge({}, state, action.pokemon)
        default:
            return state
    }
}

export default pokemonReducer
