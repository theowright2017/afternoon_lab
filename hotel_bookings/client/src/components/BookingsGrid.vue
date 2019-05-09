<template lang="html">
  <div id="bookingsGrid">
    <div id="sighting" v-for="booking in bookings">
      <h3>{{ booking.name }}</h3>
      <p>{{ booking.email }}</p>
      <p>{{ booking.room }}</p>

      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>

      <!-- <input type="checkbox" name="booked" value="">
      <label for="booked">Checked In?</label> -->

    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingsService from '../services/BookingsService'
export default {
  name: "BookingsGrid",
  props: ["bookings"],

  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => {
        eventBus.$emit('refresh-data');
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
