<template lang="html">

  <div>
    <NewBookingsForm></NewBookingsForm>
    <BookingsList></BookingsList>
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

  },
  mounted(){

  },
  components: {
    BookingsList,
    NewBookingsForm
  }
}
</script>

<style lang="css" scoped>
</style>
