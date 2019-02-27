<template lang="html">
  <div>
    <p>New Booking</p>
    <form v-on:submit="addCustomer">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="someone@email.com">

      <label for="checkedIn">Checked in:</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">

      <input type="submit">

    </form>
  </div>


</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "NewBookingsForm",
  data(){
    return {
      name: "",
      email: "",
      checkedIn: false
    }
  },
  methods: {
    addCustomer(e){
      e.preventDefault()

      if (this.name === "" || this.email === "") return;
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }

      fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        body: JSON.stringify(booking),
        headers: { "Content-Type": "application/json" }
      })
      .then(result => result.json())
      .then(result => eventBus.$emit("booking-added", result))



    }
  }

}
</script>

<style lang="css" scoped>
</style>
