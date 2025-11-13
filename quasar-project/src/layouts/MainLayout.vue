<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h1" style="color: blue"> Novi projekat </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    "title": "Naslovnica",
    "caption": "Početna stranica",
    "icon": "home",
    "link": "#/"
  },
  {
    "title": "Nove knjige",
    "caption": "Pregled novih knjiga",
    "icon": "new_releases",
    "link": "#/noveknjige"
  },
  {
    "title": "Popis svih knjiga",
    "caption": "Sve knjige u knjižnici",
    "icon": "menu_book",
    "link": "#/popisknjiga"
  },
  {
    "title": "Pretraživanje",
    "caption": "Pretraži knjige",
    "icon": "search",
    "link": "#/pretrazivanje"
  },
  {
    "title": "Lokacija",
    "caption": "Pronađi nas",
    "icon": "place",
    "link": "#/lokacija"
  },
  {
    "title": "Login",
    "caption": "Prijava korisnika",
    "icon": "login",
    "link": "#/login"
  },
  {
    "title": "Registracija",
    "caption": "Stvori novi račun",
    "icon": "person_add",
    "link": "#/registracija"
  },
  {
    "title": "Unos novih knjiga",
    "caption": "Unesi nove knjige",
    "icon": "book",
    "link": "#/unosnovihknjiga"
  }
]


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
