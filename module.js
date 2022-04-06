function requestQuery(endpoint, query, callback) {
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => {
      callback(res.data);
    })
    .catch(console.error);
}

function requestSubscription(endpoint, query, callback) {
  const socket = new WebSocket(endpoint, "graphql-ws");

  socket.onopen = function () {
    socket.send(JSON.stringify({ type: 'connection_init' }));
    socket.send(JSON.stringify({ id: "1", type: 'start', payload: { query } }))
  };

  socket.onmessage = function (event) {
    const msg = JSON.parse(event.data);

    if (msg.type === 'data') {
      callback(msg.payload.data);
    }
  };

  socket.onerror = function (event) {
    console.error(event);
  }

  socket.onclose = function (event) {
    requestSubscription(endpoint, query, callback);
  }
}
