export default function updateLightHue(bridgeIpAddress, username, data) {
  const url = `https://${bridgeIpAddress}/api/${username}/lights/6/state`;

  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log('Success:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
