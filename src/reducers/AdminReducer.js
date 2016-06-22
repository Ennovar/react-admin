export default function AdminReducer(state = {
  message: "hello"
}, action = {}) {
  console.log(action.type)
  switch (action.type) {
  case "@@redux/INIT":

  default:

  }
}
