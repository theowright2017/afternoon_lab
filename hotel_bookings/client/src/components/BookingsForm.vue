<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="customerName"></label>
    <input type="text" name="customerName" placeholder="Customer Name:" v-model="name">

    <label for="customerEmail"></label>
    <input type="text" name="customerEmail" placeholder="Customer Email:" v-model="email">

    <label for="roomNumber"></label>
    <input type="number" name="roomNumber" placeholder="Room Number:"
    v-model="room">

    <label for="checkedIn"></label>
    <input type="checkbox" name="checkedIn" value="" v-model="checkedIn">

    <input type="submit" id="save" value="Add Booking">
  </form>
</template>
<!--  -->
<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  data(){
    return{
      name: "",
      email: "",
      room: null,
      checkedIn: false
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

      this.name = "",
      this.email = "",
      this.room = null //ask is this best way??

      BookingsService.postBooking(booking)
      .then((res) => eventBus.$emit('refresh-data', res))
    }
  }
}

</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
