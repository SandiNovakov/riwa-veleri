<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 600px; margin: 0 auto;">
      <h4>Unos nove knjige</h4>

      <q-form @submit.prevent="spremiKnjigu" @reset="odustani">
        <q-input v-model="knjiga.id" label="ID knjige" outlined class="q-mb-md" />
        <q-input v-model="knjiga.naslov" label="Naslov" outlined class="q-mb-md" />
        <q-input v-model="knjiga.autor" label="Autor" outlined class="q-mb-md" />
        <q-input v-model="knjiga.opis" type="textarea" label="Opis" outlined class="q-mb-md" />

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm">
            <q-file
              v-model="knjiga.slika"
              label="Odaberi sliku knjige"
              outlined
              accept="image/*"
              class="q-mb-md"
              @update:model-value="updateFile()"
            />
          </div>
          <div class="col-12 col-sm-auto">
            <q-img :src="imageUrl" class="q-mb-md" style="width: 120px;" />
          </div>
        </div>

        <q-select
          v-model="knjiga.status"
          :options="statusOpcije"
          label="Status knjige"
          outlined
          class="q-mb-md"
          emit-value
          map-options
        />

        <div class="row q-gutter-sm justify-end">
          <q-btn label="Spremi" color="primary" type="submit" />
          <q-btn label="Odustani" color="negative" flat type="reset" />
        </div>
      </q-form>
    </div>

    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h5">Unesene knjige</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-table
          title="Knjige"
          :rows="knjige"
          :columns="columns"
          row-key="id"
          flat
          bordered
          :pagination="pagination"
          virtual-scroll
        >
          <template v-slot:body-cell-slika="props">
            <q-td :props="props">
              <q-avatar square size="48px">
                <img :src="props.row.slika" alt="slika knjige" />
              </q-avatar>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const knjiga = ref({
  id: '',
  naslov: '',
  autor: '',
  opis: '',
  slika: null,
  status: ''
})

const statusOpcije = [
  { label: 'Slobodna', value: 'slobodna' },
  { label: 'Zauzeta', value: 'zauzeta' }
]

// Reactive so the table updates automatically when new data is added
const knjige = ref([])

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
  { name: 'naslov', label: 'Naslov', field: 'naslov', sortable: true },
  { name: 'autor', label: 'Autor', field: 'autor', sortable: true },
  { name: 'opis', label: 'Opis', field: 'opis' },
  { name: 'slika', label: 'Slika', field: 'slika' },
  { name: 'status', label: 'Status', field: 'status', sortable: true }
]

const pagination = ref({
  rowsPerPage: 5
})

const imageUrl = ref('')

function updateFile() {
  if (knjiga.value.slika) {
    imageUrl.value = URL.createObjectURL(knjiga.value.slika)
  } else {
    imageUrl.value = ''
  }
}

function spremiKnjigu() {
  // Push a copy of the object to avoid Vue reactivity reference reuse
  knjige.value.push({ ...knjiga.value, slika: imageUrl.value })
  odustani()
}

function odustani() {
  knjiga.value = { id: '', naslov: '', autor: '', opis: '', slika: null, status: '' }
  updateFile()
}
</script>
