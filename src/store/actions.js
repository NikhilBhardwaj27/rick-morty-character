import axiosClient from '../configs/axiosClient';

export async function fetchRickMorty({commit},pageNumber) {
    try {
        const res = await axiosClient.get(`?page=${pageNumber.value+1}`)
        commit('setRickMortyValues',res)
    }catch(error){
        commit('setError',error.message)
    }
}

export async function fetchRickMortyInitial({commit}) {
    try {
        const res = await axiosClient.get('')
        commit('setRickMortyValuesInitial',res)
    }catch(error){
        commit('setError',error.message)
    }
}


export async function getCharacter({commit},id) {
    try {
        const res = await axiosClient.get(id)
        commit('setSingleCharacter',res)
    }catch(error){
        commit('setError',error.message)
    }
}

