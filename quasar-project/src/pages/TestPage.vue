<template>
  <q-page padding>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div v-text="naslov"></div>
        <div v-text="autor"></div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="openMsg()">Open</q-btn>
        <q-btn flat @click="deleteMsg()">Delete</q-btn>
      </q-card-actions>
    </q-card>

    <div>
      <q-input v-model="text" label="text"></q-input>
      <q-input v-model="autor" label="autor"></q-input>
      <q-input v-model="naslov" label="naslov"></q-input>

      <q-btn flat @click="save()">save</q-btn>
    </div>
  </q-page>
 
</template>

<script setup>
import { ref } from 'vue';

let naslov = ref('');
let autor = ref('');
let text  = ref('');

var var_open = ref(4);
var var_delete = ref(3);

function save() {
  console.log("naslov: "+naslov.value)
  console.log("autor: "+autor.value)
  console.log("text: "+text.value)
}

function openMsg() {
  var_open.value = Math.max(var_open.value - 1, 0);

  console.log("open: "+var_open.value);

}
function deleteMsg() {
  var_delete.value = Math.max(var_delete.value - 1, 0);
  console.log("delete: "+var_delete.value);
}
</script>