<template>
  <b-section image-ref="src/assets/images/home/email_enter.png">
    <h1>Добро пожаловать в мир Haikyuu!!</h1>
    <p class="text-body-1 my-2">
      Введите вашу электронную почту, чтобы получать уведомления о новых сериях.
    </p>

    <v-form class="mt-5" @submit="onSubmit">
      <div class="email-enter d-flex align-start">
        <v-text-field
          v-bind="email"
          name="email"
          label="Почта"
          clearable
          variant="outlined"
        />
        <btn-validate
          type="submit"
          :loading="loading"
          class="ms-6 mt-1"
        >
          Подписаться
        </btn-validate>
      </div>
    </v-form>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="success"
    >
      <p>Вы подписались на уведомления о новых сериях!</p>
    </v-snackbar>
  </b-section>
</template>

<script setup lang="ts">
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

const schema = yup.object({
	email: yup.string().email('Неверный формат почты').required()
})

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
	validationSchema: schema,
})

const email = defineComponentBinds('email')

let loading = ref(false)
const	snackbar = ref(false)

const onSubmit = handleSubmit((values) => {
	loading.value = true
	setTimeout(() => {
		console.log(values) // actions with formdata
		resetForm()
		loading.value = false
		snackbar.value = true
	}, 3000)
})


</script>

<style scoped>

</style>