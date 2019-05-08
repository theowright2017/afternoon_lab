<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="customerName"></label>
    <input type="text" name="customerName" value="Customer Name:">

    <label for="customerEmail"></label>
    <input type="text" name="customerEmail" value="Customer Email:">

    <label for="roomNumber"></label>
    <input type="number" name="roomNumber" value="Room Number:">

    <label for="checkedIn"></label>
    <input type="checkbox" name="checkedIn" value="">

    <input type="submit" id="save" value="Save">
  </form>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  data(){
    return{
      name: "",
      email: "",
      room: null
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      const booking = {
        name: this.name,
        email = this.email,
        room = this.room
      }
      BookingsService.postBooking(booking)
      .then((res) => eventBus.$emit('refresh-data', res))
    })
  }
}
}
</script>

<style lang="css" scoped>
</style>
