<template>
  <q-page class='row items-center justify-evenly user-page'>
    <div class='flex column text-body1'>
      <div class='flex'>
        Your name:&nbsp;
        <address class='text-bold'>
          {{name || 'You didn\'t provide a name'}}
        </address>
      </div>
      <div class='flex'>
        Your address:&nbsp;
        <address class='text-bold'>
          {{address || 'You didn\'t provide a address'}}
        </address>
      </div>
      <div class='flex'>
        Your phone:&nbsp;
        <address class='text-bold'>
          {{phone || 'You didn\'t provide a phone'}}
        </address>
      </div>
      <div class='flex'>
        Your personal information:&nbsp;
        <span class='text-bold'>
          {{personalInformation || 'You didn\'t provide a personal information'}}
        </span>
      </div>
    </div>
    <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          type="text"
          v-model="newName"
          label="Your new name"
          lazy-rules
        />

        <q-input
          filled
          type="text"
          v-model="newAddress"
          label="Your new address"
          lazy-rules
        />

        <q-input
          filled
          type="tel"
          v-model="newPhone"
          label="Your new phone"
          lazy-rules
        />

        <q-input
          filled
          type="text"
          v-model="newPersonalInformation"
          label="Your new personal information"
          lazy-rules
        />

        <div class="flex justify-between">
          <q-btn label="Logout" type="button" color="red-10" @click="logout"/>
          <q-btn label="Update" type="submit" color="primary"/>
        </div>
      </q-form>
  </q-page>
</template>

<style lang="scss">

.user-page .q-btn {
  width: 48%;
}

</style>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';

export default {
  setup() {
    const userStore = useUserStore();
    const { name, address, personalInformation, phone } = storeToRefs(userStore);
    const router = useRouter();
    onMounted(() => {
      if (!localStorage.getItem('accessToken')) {
        router.push('/')
      } else {
        userStore.load(() => {
          router.push('/');
        });
      };
    });


    let [newName, newAddress, newPersonalInformation, newPhone] = [ref(''), ref(''), ref(''), ref('')];

    const onSubmit = () => {
      userStore.update({
        name: newName.value,
        address: newAddress.value,
        phone: newPhone.value,
        personalInformation: newPersonalInformation.value,
      });
    };
    const logout = () => {
      api.post('auth/logout', {}).then(() => {
        localStorage.setItem('accessToken', '');
        router.go(0);
      });
    };
    return {
      name,
      address,
      personalInformation,
      phone,
      newName,
      newAddress,
      newPersonalInformation,
      newPhone,
      onSubmit,
      logout,
    }
  }
}
</script>
  