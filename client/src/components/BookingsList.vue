<template lang="html">
  <div>
    <div v-for="booking in bookings">
      <p>Name: {{ booking.name }}</p>
      <p>Email: {{ booking.email }}</p>
      <label>Checked in:</label>
      <input v-if="booking.checkedIn" type="checkbox" value="true" checked>
      <input v-if="!booking.checkedIn" type="checkbox" value="true">
      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "BookingsList",
  props: ["bookings"],
  methods: {
    deleteBooking(id){
      fetch("http://localhost:3000/api/bookings/" + id, {
        method: "DELETE"
      })
      .then(() => eventBus.$emit("booking-deleted", id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
