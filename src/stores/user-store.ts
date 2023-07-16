import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Patrick Bateman',
    phone: '888-783-6286',
    address: '12th Avenue b/w 27th & 28th Street, New York, NY',
    personalInformation: 'New York investment banker',
  }),
  getters: {},
  actions: {
    set(data: {name: string, phone: string, address: string, personalInformation: string}) {
      this.name = data.name;
      this.phone = data.phone;
      this.address = data.address;
      this.personalInformation = data.personalInformation;
    },
    update(data: {name: string, phone: string, address: string, personalInformation: string}) {
      api.post('user/update', {
        name: data.name,
        phone: data.phone,
        address: data.address,
        personalInformation: data.personalInformation,
      }, {headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}}).then(() => {
        this.set(data);
      });
    },
    load(errorCallback?: () => void ) {
      api.post('user/get', {}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`},
      }).then((res) => {
        this.set(res.data);
      }).catch(() => {
        if (errorCallback) errorCallback();
      });
    }
  },
});