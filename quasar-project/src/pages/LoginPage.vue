<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md" style="max-width: 400px; margin: auto;">
      <q-card-section>
        <div class="text-h5">🔑 Prijava</div>
        <div class="text-subtitle2 text-grey">Unesite svoje korisničko ime i lozinku</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-gutter-md">
        <q-input
          filled
          v-model="form.korime"
          label="Korisničko ime"
          :rules="[val => !!val || 'Korisničko ime je obavezno']"
        />
        <q-input
          filled
          v-model="form.lozinka"
          label="Lozinka"
          type="password"
          :rules="[val => !!val || 'Lozinka je obavezna']"
        />

        <q-btn color="primary" label="Potvrdi" @click="submitForm" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Dummy login form state
const form = ref({
  korime: '',
  lozinka: ''
})

// Submit handler
function submitForm() {
  if (!form.value.korime || !form.value.lozinka) {
    alert('Molimo popunite sva polja!')
    return
  }

  // Log credentials to console (dummy)
  console.log('Login attempt:', { ...form.value })

  // Reset form
  form.value = { korime: '', lozinka: '' }

  // Dummy success message
  alert('Login uspješan (dummy) ✅')
}
</script>
