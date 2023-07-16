<template>
  <q-page class="row items-center justify-evenly index-page">
    <div class="q-pa-md" style="max-width: 400px; width: 350px;">

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          type="email"
          v-model="email"
          label="Your email *"
          lazy-rules
          :rules="[val => checkEmail(val) || 'Invalid email']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Your password *"
          lazy-rules
          :rules="[
            val => passwordChecker.length(val) || 'Password must be between 8 and 20 characters',
          ]"
        />

        <div class="flex justify-between">
          <q-btn :label="is_register ? 'To login':'To registration'" type="button" color="secondary" @click="toggleRegister"/>
          <q-btn :label="is_register ? 'Register':'Login'" type="submit" color="primary"/>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<style lang="scss">

.index-page .q-btn {
  width: 48%;
}

</style>

<script lang="ts">
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';


const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const checkEmail = (email: string) => emailRegExp.test(email);

export default {
  setup() {
    let is_register = ref(true);
    let email = ref('');
    let password = ref('');
    const router = useRouter();

    function auth() {
      const url = 'auth/local/' + (is_register.value ? 'register':'login');
      api.post(url, {
        email: email.value,
        password: password.value,
      }).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        router.push('./user');
      }).catch((reason) => {
        if (reason.response) {
          alert(reason.response.data.message);
        } else if (reason.request) {
          console.log(reason.request.message);
        } else {
          console.log(reason.message);
        }
      });
    }

    const passwordChecker = {
      length(password: string): boolean {
        return password.length >= 8 && password.length < 20;
      }
    }

    const toggleRegister = () => {is_register.value = !is_register.value};
    const onSubmit = () => auth();
    return {
      email,
      password,
      passwordChecker,
      is_register,
      toggleRegister,
      checkEmail,
      onSubmit,
    }
  }
}
</script>
