const bridgeIpAddress = '192.168.1.202';
const username = 'lGp4bicJLGIJF77JbhXf2kEuPxhVyznj6loMq5lw';
const groupId = 2;

export default async function activateScene(sceneId) {
  const url = `http://${bridgeIpAddress}/api/${username}/groups/${groupId}/action`;

  // Get the ID of the scene with the specified name
  const scenesResponse = await fetch(
    `http://${bridgeIpAddress}/api/${username}/scenes`,
  );
  const scenes = await scenesResponse.json();

  // Set the group state to the specified scene
  const sceneBody = {
    scene: sceneId,
    recycle: true,
    brightness: 254,
  };

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(sceneBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(`Activated scene with ID: ${sceneId}`);
}
