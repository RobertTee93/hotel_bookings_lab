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
    },
    deleteBooking(id){
      const index = this.bookings.findIndex((booking) => {
        return booking._id === id;
      })
      this.bookings.splice(index, 1);
    }
  },
  mounted(){
    this.fetchData()

    eventBus.$on("booking-added", (booking) => {
      this.addBooking(booking)
    });

    eventBus.$on("booking-deleted", (bookingId) => {
      this.deleteBooking(bookingId)
    })

  },
  components: {
    BookingsList,
    NewBookingsForm
  }
}
</script>

<style lang="css" scoped>
</style>
