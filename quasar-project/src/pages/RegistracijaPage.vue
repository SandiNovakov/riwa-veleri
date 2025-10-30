<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md" style="max-width: 500px; margin: auto;">
      <q-card-section>
        <div class="text-h5">📝 Registracija korisnika</div>
        <div class="text-subtitle2 text-grey">Unesite podatke za novi račun</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-gutter-md">
        <q-input
          filled
          v-model="form.ime"
          label="Ime"
          :rules="[val => !!val || 'Ime je obavezno']"
        />
        <q-input
          filled
          v-model="form.prezime"
          label="Prezime"
          :rules="[val => !!val || 'Prezime je obavezno']"
        />
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

// Dummy form state
const form = ref({
  ime: '',
  prezime: '',
  korime: '',
  lozinka: ''
})

// Submit handler
function submitForm() {
  // Simple validation
  if (!form.value.ime || !form.value.prezime || !form.value.korime || !form.value.lozinka) {
    alert('Molimo popunite sva polja!')
    return
  }

  // Log form values to console
  console.log('Registracija:', { ...form.value })

  // Reset form
  form.value = { ime: '', prezime: '', korime: '', lozinka: '' }

  // Optionally, show a success message
  alert('Korisnik je uspješno registriran (dummy) ✅')
}
</script>
