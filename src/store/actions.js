import axiosClient from '../configs/axiosClient';

export async function fetchRickMorty({commit}) {
    try {
       
        const res = await axiosClient.get('')
        commit('setRickMortyValues',res)
    }catch(error){
        commit('setError',error.message)
    }
}