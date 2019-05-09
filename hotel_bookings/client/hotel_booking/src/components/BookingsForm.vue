<template lang="html">
  <div id="form-cont">
    <form id="booking-form" v-on:submit="addBooking" method="post">
      <label for="customerName">Customer Name:</label>
      <input type="text" name="customerName" value="">

      <label for="customerEmail">Customer Email:</label>
      <input type="text" name="customerEmail" value="">

      <label for="roomNumber">Room Number:</label>
      <input type="number" name="roomNumber" value="">

      <label for="checkedIn">Checked In:</label>
      <input type="checkbox" name="checkedIn" value="">

      <input type="submit" id="save" value="Save">
    </form>
  </div>
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
        email: this.email,
        room: this.room
      }
      BookingsService.postBooking(booking)
      .then((res) => eventBus.$emit('refresh-data', res))
    }
  }
}

</script>

<style lang="css" scoped>
input {
  width: 300px;
  margin-bottom: 10px;
  height: 20px;
}

input[type=number]{
  width: 100px;
}

input[type=submit]{
  width: 90px;
  height: 20px;
  background-color: #4CAF50;
  color: whitesmoke;
  border-radius: 4px;
}

#booking-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  float: left;
}

#form-cont {
  padding: 20px;
}
</style>
