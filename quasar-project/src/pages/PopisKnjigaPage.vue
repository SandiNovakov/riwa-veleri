<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h5">📚 Popis svih knjiga</div>
        <div class="text-subtitle2 text-grey">
          (Dummy podaci – klasična literatura)
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-table
          title="Knjige"
          :rows="rows"
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

const columns = [
  { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov', sortable: true },
  { name: 'autor', label: 'Autor', align: 'left', field: 'autor', sortable: true },
  { name: 'godina', label: 'Godina', align: 'center', field: 'godina', sortable: true },
  { name: 'zanr', label: 'Žanr', align: 'left', field: 'zanr', sortable: true },
  { name: 'slika', label: 'Slika', align: 'center', field: 'slika' },
  { name: 'stanje', label: 'Dostupnost', align: 'center', field: 'stanje', sortable: true }
]

const rows = ref([
  {
    id: 1,
    naslov: 'Ponos i predrasude',
    autor: 'Jane Austen',
    godina: 1813,
    zanr: 'Roman',
    slika: 'https://picsum.photos/seed/classic1/80',
    stanje: 'Dostupna'
  },
  {
    id: 2,
    naslov: '1984',
    autor: 'George Orwell',
    godina: 1949,
    zanr: 'Distopija',
    slika: 'https://picsum.photos/seed/classic2/80',
    stanje: 'Posuđena'
  },
  {
    id: 3,
    naslov: 'Veliki Gatsby',
    autor: 'F. Scott Fitzgerald',
    godina: 1925,
    zanr: 'Roman',
    slika: 'https://picsum.photos/seed/classic3/80',
    stanje: 'Dostupna'
  },
  {
    id: 4,
    naslov: 'Zločin i kazna',
    autor: 'Fjodor Dostojevski',
    godina: 1866,
    zanr: 'Roman',
    slika: 'https://picsum.photos/seed/classic4/80',
    stanje: 'Dostupna'
  },
  {
    id: 5,
    naslov: 'Moby Dick',
    autor: 'Herman Melville',
    godina: 1851,
    zanr: 'Avantura',
    slika: 'https://picsum.photos/seed/classic5/80',
    stanje: 'Posuđena'
  },
  {
    id: 6,
    naslov: 'Hamlet',
    autor: 'William Shakespeare',
    godina: 1603,
    zanr: 'Drama',
    slika: 'https://picsum.photos/seed/classic6/80',
    stanje: 'Dostupna'
  },
  {
    id: 7,
    naslov: 'Rat i mir',
    autor: 'Lev Tolstoj',
    godina: 1869,
    zanr: 'Roman',
    slika: 'https://picsum.photos/seed/classic7/80',
    stanje: 'Dostupna'
  },
  {
    id: 8,
    naslov: 'Don Quijote',
    autor: 'Miguel de Cervantes',
    godina: 1605,
    zanr: 'Roman',
    slika: 'https://picsum.photos/seed/classic8/80',
    stanje: 'Dostupna'
  }
])

const pagination = ref({
  rowsPerPage: 4
})
</script>
