<template>
  <div id="app">
    <Header />
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import Header from './components/Header';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingsForm,
    BookingsGrid,
    Header
  },
  mounted(){
    this.fetchData();

    eventBus.$on('refresh-data', this.fetchData);
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
        .then(res => res.json())
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
  padding: 50px;
}

body {
  background-color: rgb(30, 29, 30);
  background-image: url('~@/assets/castle.png');
  background-repeat: no-repeat;
  background-size: contain;
  color: whitesmoke;
}
</style>
