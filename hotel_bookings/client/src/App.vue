<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
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
    BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('refresh-data', this.fetchData);
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings/")
        .then(res => res.json())
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background-color: grey;
}
</style>
