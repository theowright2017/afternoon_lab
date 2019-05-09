<template lang="html">
  <div id="bookingsGrid">
    <div id="booking" v-for="booking in bookings">
      <h3>{{ booking.name }}</h3>
      <p>{{ booking.email }}</p>
      <p>{{ booking.room }}</p>

      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>

      <input type="checkbox" name="booked" value="">
      <label for="booked">Checked In?</label>

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
    },
    guestChecked(id){
      BookingService.updateBooking(id)
      .then(response => {
        eventBus.$emit('refresh-data');
      })
    }
  }
}
</script>

<style lang="css" scoped>
#bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-space-around;
  border: 5px solid whitesmoke;
  padding: 20px;
  width: 800px;
  float: right;
}

#booking {
  background-color: whitesmoke;
  color: dimgrey;
  margin: 5px;
  padding: 10px;
}
</style>
