const initialState = [
  {
    name: "name",
    value: "",
    location: "/",
    buttonText: "next",
  },
  {
    name: "date",
    value: new Date(),
    location: "/enter-date",
    buttonText: "next",
  },
  {
    name: "time",
    value: `${new Date().getHours()}:${new Date().getMinutes()}`,
    location: "/enter-time",
    buttonText: "create event",
  },
  {
    name: "countdown",
    value: null,
    location: "final-countdown",
    buttonText: null,
  },
];
export default initialState;
