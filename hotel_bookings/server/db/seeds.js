use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Johnny Loughran",
    email: "johndabomb@gmail.com",
    room: 2,
    checkedIn: true
  },
  {
    name: "Eunice Frankenstein",
    email: "mrsfrank@neckbolts.com",
    room: 18,
    checkedIn: true
  },
  {
    name: "Wayne Wolf",
    email: "howlin@moon.com",
    room: 9,
    checkedIn: false
  },
  {
    name: "Murry",
    email: "themummy@wrapped.co",
    room: 4,
    checkedIn: false
  },
  {
    name: "Griffin Invisible",
    email: "invis@ble.com",
    room: 3,
    checkedIn: false
  }
]);
