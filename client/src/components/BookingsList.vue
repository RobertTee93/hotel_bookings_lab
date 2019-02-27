<template lang="html">
  <div>
    <div v-for="booking in bookings">
      <p>Name: {{ booking.name }}</p>
      <p>Email: {{ booking.email }}</p>
      <label>Checked in:</label>
      <input v-if="booking.checkedIn" type="checkbox" value="true" checked>
      <input v-if="!booking.checkedIn" type="checkbox" value="true">
      <button>Delete Booking</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingsList",
  props: ["bookings"],
  methods: {
    deleteBooking(){
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>
