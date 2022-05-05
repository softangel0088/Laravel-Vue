import axios from '@axios'
import {getUserData} from "@/auth/utils";
const userData = getUserData()

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchChannels(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/partner/getChannels/${userData.id}`, { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchChannel(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/partner/getChannel/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      deleteChannel(ctx, { id }) {
          return new Promise((resolve, reject) => {
              axios
                  .delete(`/partner/channels/${id}` )
                  .then(response => resolve(response))
                  .catch(error => reject(error))
          })
      },
    addChannel(ctx, channelData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/partner/channels', { channel: channelData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      updateChannel({commit}, channelData) {
          return new Promise((resolve, reject) => {
              axios
                  .patch(`/partner/channels/${channelData.id}`, channelData)
                  .then(response => resolve(response))
                  .catch(error => reject(error))
          })
      },
      fetchFilterData(ctx, queryParams) {
          return new Promise((resolve, reject) => {
              axios
                  .get(`/partner/fetchFilterData`, { params: queryParams })
                  .then(response => resolve(response))
                  .catch(error => reject(error))
          })
      },
  },
}
