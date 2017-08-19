/* eslint-disable no-return-await, no-shadow */
import * as types from '../mutation-types';
// import { asyncEffect } from '../templates';

const state = {
};

const getters = {
};

const actions = {
};

const mutations = {
    [types.FETCH_SYSTEMS](state) {
      console.log(state)
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
