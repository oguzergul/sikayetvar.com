import Vue from 'vue'
import Vuex from 'vuex'
import {axiosInstance} from "../utils/axios";

Vue.use(Vuex)

export default new Vuex.Store({
    getters: {
        get_posts_data: state => state.posts,
        get_user_detail: state => state.user_detail,
        get_post_detail: state => state.post_detail,
    },
    state: {
        posts: [],
        user_detail: {},
        post_detail: {},
    },
    mutations: {
        SET_POSTS_DATA(state, payload) {
            state.posts = payload;
        },
        SET_USER_DETAIL(state, payload) {
            state.user_detail = payload;
        },
        SET_POST_DETAIL(state, payload) {
            state.post_detail = payload;
        }
    },
    actions: {
        // GET Actions
        GET_POSTS({commit}) {
            axiosInstance.get('posts').then(res => {
                commit('SET_POSTS_DATA', res.data);
                console.log(res);
            })
        },
        GET_USERS({commit}) {
            axiosInstance.get('users').then(res => {
                console.log(res);
            })
        },
        GET_POST_DETAIL({commit}, payload) {
            axiosInstance.get(`users/${payload}`).then(detail_data_response => {
                commit('SET_USER_DETAIL', detail_data_response.data);
            });

            axiosInstance.get(`posts/${payload}`).then(res => {
                commit('SET_POST_DETAIL', res.data);
            });


        },

        // DELETE Actions
        DELETE_POST({commit}, payload) {
            axiosInstance.delete(`posts/${payload}`).then(delete_response => {
                console.log('DELETED',delete_response)
            }).catch(err => {
                console.log(err);
            })
        },

        // PUT Actions
        UPDATE_POST({commit}, payload) {
            axiosInstance.put(`posts/${payload.id}`, payload).then(res => {
                console.log('UPDATED',res);
            }).catch(err => {
                console.log(err);
            })
        }

    },
})
