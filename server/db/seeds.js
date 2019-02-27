use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Robert Templeton",
    email: "Roberttee1993@googlemail.com",
    checkedIn: true
  },
  {
    name: "Thomas Whyte",
    email: "twhyte95@gmail.com",
    checkedIn: true
  },
  {
    name: "Martin Kane",
    email: "mKane@hotmail.com",
    checkedIn: true
  }
])
