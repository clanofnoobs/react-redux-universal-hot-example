export function load(zip) {
  return {
    type: "FETCH_WEATHER",
    promise: (client) => client.post(`weather?zip=${zip}`, {
      zip
    })
}

