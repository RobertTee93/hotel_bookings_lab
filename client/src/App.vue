<template lang="html">

  <div>
    <NewBookingsForm></NewBookingsForm>
    <BookingsList :bookings="bookings"></BookingsList>
  </div>

</template>

<script>
import { eventBus } from "./main.js"
import BookingsList from "./components/BookingsList.vue"
import NewBookingsForm from "./components/NewBookingsForm.vue"
export default {
  name: "app",
  data(){
    return {
      bookings: []
    }
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(response => response.json())
      .then(bookings => this.bookings = bookings)
    },
    addBooking(booking){
      this.bookings.push(booking);
    }
  },
  mounted(){
    this.fetchData()

    eventBus.$on("booking-added", (booking) => {
      this.addBooking(booking)
    });

  },
  components: {
    BookingsList,
    NewBookingsForm
  }
}
</script>

<style lang="css" scoped>
</style>
