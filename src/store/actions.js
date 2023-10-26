import { fetchItemInfo, fetchUserInfo ,fetchList } from '@/api'

export default {
  // async FETCH__NEWS(context) {
  //   let response =  await fetchNewsList()
  //   console.log(response.data);
  //   context.commit('SET_NEWS', response.data)
  //   return response
  // },
  // FETCH__ASK(context){
  //   fetchAskList()
  //     .then(response => {
  //       console.log(response.data);
  //       context.commit('SET_ASK', response.data);
  //     })
  // },
  // FETCH__JOBS(context){
  //   fetchJobsList()
  //     .then(response => {
  //       context.commit('SET_JOBS', response.data);
  //     })
  // },
  async FETCH__USER({ commit }, name){
    const response = await fetchUserInfo(name)
    commit('SET_USER', response.data)
    return response
  },
  async FETCH__ITEM ({commit},id){
    const response = await fetchItemInfo(id)
    commit('SET_ITEM', response.data)
    return response
  },
  async FETCH_LIST ({commit}, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  },
}