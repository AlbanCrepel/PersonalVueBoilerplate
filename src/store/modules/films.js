import store from '../../router/index';

const state = {
    films : [],
};

const mutations = {
    setFilms(state, films) {
        state.films = films;
    },
};

const actions = {
    setFilms({commit}, value){
        commit('setFilms', value);
    }
};

const getters = {
    films: state => state.films,
};

export default {
    state,
    getters,
    actions,
    mutations
};