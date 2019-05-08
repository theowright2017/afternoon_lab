use bookings;
db.dropDatabase();

db.bookings.insetMany([
  {
    name: "Johnny Loughran",
    email: "johndabomb@gmail.com",
    room: 2
  },
  {
    name: "Eunice Frankenstein",
    email: "mrsfrank@neckbolts.com",
    room: 18
  },
  {
    name: "Wayne Wolf",
    email: "howlin@moon.com",
    room: 9
  },
  {
    name: "Murry",
    email: "themummy@wrapped.co",
    room: 4
  },
  {
    name: "Griffin Invisible",
    email: "invis@ble.com",
    room: 3
  }
]);
