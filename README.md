<p align="center">
<img width="1439" alt="Screenshot at May 25 09-49-00" src="https://github.com/ghyferri/creative_coding/assets/127089375/7f92d2d3-80db-48e9-bcf0-ed06f1728559"></p>

<h3 align="center">
Hi there, We are <a href="https://www.linkedin.com/in/ghyferri-halfhide-7544231b9/" target="_blank" rel="noreferrer">Ghyferri halfhide</a> and <a href="https://www.linkedin.com/in/kato-thys-95435a195//" target="_blank" rel="noreferrer">Kato Thys</a> and we present 👋
</h3>

<h2 align="center">
THE BREATHING ROOM 🎨!
</h2> 

The Breathing Room is a unique space in the workplace that can be accessed at any time of the day. It is designed to provide a moment of respite from the daily grind, allowing you to take a deep breath and reset your mind.

Upon entering the Breathing Room, you will be guided through a short questionnaire that helps to create the right atmosphere for your mood. You will then be treated to a session of calming visuals and music, all narrated by Ivy's soothing voice.

The experience lasts about 7 minutes and is designed to help you leave the room feeling happy, relieved, and with a clear mind. Whether you're feeling overwhelmed, stressed, or just need a quick break, the Breathing Room is the perfect place to unwind and recharge.

So why not take a few minutes out of your day to visit the Breathing Room and give your mind and body the break they deserve?

## 💼 Technical Skills

![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=61DAFB)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26)
![](https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6)
![](https://img.shields.io/badge/Tools-Figma-informational?style=flat&logo=Figma&color=F24E1E)
<br/>
![](https://img.shields.io/badge/Tools-NPM-informational?style=flat&logo=NPM&color=CB3837)
![](https://img.shields.io/badge/Tools-Netlify-informational?style=flat&logo=netlify&color=00C7B7)
![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032)
![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717)

## :hammer_and_wrench: Requirements
- Phillips Hue lights
- Hue Bridge
- 2 buttons 
- Raspberry Pi
- HDMI Cable
- Pin Cable

## 🌱 Install and run

To install and run the project, follow these steps:

Download or clone the project locally

Install node.js in the project

> npm install

Run the project 

> npm run dev

## :house: How it's build

### Box for buttons 

To make The Breathing Room interactive, we worked with push buttons. You answer questions using green and red push buttons. To present these buttons nicely without visible cables, we designed a box.

This box was made with a laser cutter. We used wood with a thickness of 6 mm for the box. We made the plan to cut out the box via makercase.com. This is a handy tool to enter your dimensions and get a plan in place. You can download the cut-out after you have entered everything. 

We download an svg file. We updated this file in Illustrator to add extra holes so that our cables could come out of the box and our push buttons could fit in.

<img width="720" alt="image" src="https://github.com/ghyferri/creative_coding/assets/127089375/67973004-4714-421b-b963-6a67f33a52b7">

The box consists of 5 panels. At the back, we have a small hole for the cables. At the top we have two holes to insert our push buttons. Tip: measure in advance how far apart the buttons should be. We made a mistake here at first. We used push buttons of 10 cm in size. 

To have this file read by the laser cutter, we need to save it as a dxf. You save it on a usb stick and upload it to the laser cutter.

The result is our 5 panels. This is what it looks like when assembled:

<img width="298" alt="image" src="https://github.com/ghyferri/creative_coding/assets/127089375/43a08edb-ba87-468d-9917-55bc7b22a007">

Since the box now looks bare and conspicuous, we made stickers. We used the same dimensions of the panels. The stickers were formatted in Adobe Illustrator. The right document for the printer is a pdf document. It is very important that your cut lines are in another layer. This layer should have a certain name (e.g. CutContour) and the 100% magenta. Below you can see our result.

<img width="377" alt="image" src="https://github.com/ghyferri/creative_coding/assets/127089375/cf6f1036-2a54-40a8-82f5-5136ce3a26ef">

To attach the push buttons to the box, you unscrew the bottom wheel of the button. You put the button through the hole and screw the wheel back on. This secures the buttons to the shelf (box).

The plus, minus and zero cables were connected on the Raspberry (see above). On the other side of the cables hang the buttons. The cables were soldered to the plus, minus and zero ports on the buttons.

<img width="720" alt="image" src="https://github.com/ghyferri/creative_coding/assets/127089375/fdf4cac3-6153-4608-95fb-00c858ff0e8a">

### Door hanger 

We also used the laser cutter to make a door hanger. The door hanger is important when installing to be alone in the room. For the door hanger, we used 4mm wood thickness. And for the door hanger too, we designed sticker. In the same way as the previous one.

![image](https://github.com/ghyferri/creative_coding/assets/127089375/0c6f4b15-4d8a-42a3-8908-e86aae6beaed)

<img width="720" alt="image" src="https://github.com/ghyferri/creative_coding/assets/127089375/544593f0-9646-4408-8b54-893c160d2b10">

### Stickers

To present our installation as a beautiful whole, we designed stickers. Visitors could take these stickers with them after visiting our installation. 

The stickers were created in the same way as the other stickers in Adobe Illustrator. In your Illustrator file, you create two layers. An artwork layer and a Cutcontour (= cutting line). The cut contour has a 100% magenta colour.

![image](https://github.com/ghyferri/creative_coding/assets/127089375/30c01ad7-d836-40cd-b687-36fe0eaf1ed4)
![image](https://github.com/ghyferri/creative_coding/assets/127089375/c1143c72-d77c-480f-b336-d66e9298af1a)

### Lights

To make the installation space cosy, we used Phillips Hue lamps. The lights are set to change colour depending on the visuals on the screen. 

At the installation, there are 3 different sessions. That is, 3 different visuals. These sessions have different audio and different colours. The Phillips Hue lamps adjust to the colours of your session. Your session starts only when you have answered the questions with the push buttons.

![image](https://github.com/ghyferri/creative_coding/assets/127089375/0b4c92d7-ca3a-4da2-bd19-e025aa21b458)

## :computer: How everything is coded 

### The Questions ❔

The sessions start with a list of questions, which are pre-designed and formed in a branching structure. Based on the answers, you end up with a result, which is a tailor-made session. There are 3 types of sessions:

- Nature-based (fresh air, movement, healthy eating, ...)

- Relaxation

- Emotions

Below you can see the branching structure.

![image](https://github.com/ghyferri/creative_coding/assets/127089375/5cf736ec-ee50-433c-8f4e-e0c6b8b9d1cf)

These are converted to a JSON file, you can find this in questions.json
The questions have unique identifiers to establish the order, and each question is associated with two identifiers. This allows for answering the subsequent question in the branching structure.

```
"questions": {
    "0": {
      "questionText": "Do you have a lot of worries on your mind?",
      "nextQuestionIdYes": "1",
      "nextQuestonIdNo": "2",
      "audioPath": "../public/videos/sound0.mp3"
    },
    ...
   }
```

This is how it is imported

`import data from '../questions.json' assert { type: 'JSON' };
`

The next questions depends on the input of the user. This will be decided by the ID.

```
const showNextQuestion = (id) => {
  questionDisplay.textContent = data.questions[id].questionText;
  currentQuestion = data.questions[id];
};
```

The last question is checked to see if the next ID of the subsequent questions is undefined. This indicates that there are no more questions, making it the final question in the sequence.

The branching structure follows this logic to determine the flow of the session, ensuring that all questions are appropriately connected and that the session can be tailored based on the user's responses.

```
const checkLastQuestion = (question) => {
  if (question.nextQuestionIdYes == undefined) {
      ...
  }
```

### Connection with Raspberry Pi 🍓

To establish a connection with the Raspberry Pi, we need to establish it in the code by initiating the connection in the body of the HTML.

When working with a Raspberry Pi, establishing a connection is crucial for various applications. By setting up a connection in the HTML code, we enable communication between the web interface and the Raspberry Pi device. This allows us to control and monitor the Pi remotely.

```
<body onload="wsConnect();" onunload="ws.disconnect();">
```

Next, a connection is established with the WebSocket of the Raspberry Pi, which is configured in Node-RED.

Node-RED is a popular flow-based programming tool that allows users to visually create applications by connecting nodes together. It provides a browser-based interface for wiring together various nodes, including nodes for handling WebSocket communication.

To connect to the WebSocket of the Raspberry Pi, we typically set up a WebSocket node in Node-RED. This node acts as a server, listening for incoming connections and facilitating communication with connected clients.
```
// This needs to point to the web socket in the Node-RED flow
var wsUri = 'ws://' + '192.168.100.1:1880' + '/ws';

window.onload = () => {
  wsConnect();
};
```

Once the connection is established, we can send various messages to the server. This is done using the buttons on the box, which are directly connected to the Raspberry Pi. As shown in the diagram, the pin wires of the buttons are connected to the Raspberry Pi.
The buttons serve as inputs for triggering actions or sending specific commands to the Raspberry Pi.

![DSC03921](https://github.com/ghyferri/creative_coding/assets/127089375/3424fb6c-6aeb-49b0-a6d4-5bf3dc379e43)

When a message is received, it triggers the execution of specific code based on the message content. Depending on the nature of the message, different actions or functionalities can be performed on the Raspberry Pi.

Upon receiving a message from the server, the Raspberry Pi needs to interpret and process the message to determine the appropriate response. This can involve parsing the message content, extracting relevant information, and deciding which code or logic to execute.

```
function wsConnect() {
  console.log('connect', wsUri);
  var ws = new WebSocket(wsUri);
  ws.onmessage = function (msg) {
    console.log(msg.data);
    if (msg.data == 'start' && started == false) {
      started = true;
      pushCounter++;
      currentQuestion = data.questions[0];
      questionDisplay.textContent = currentQuestion.questionText;
      button1.style.display = 'block';
      button2.style.display = 'block';
      questionDisplay.style.display = 'block';
      questionDisplay.classList.remove('hidden');
      questionDisplay.style.color = 'e0c1ff';
      start.style.display = 'none';
      introBeat.pause();
      beat.play();
    }

    if (started) {
      if (pushCounter != 0) {
        if (msg.data == 'yes') {
          showNextQuestion(currentQuestion.nextQuestionIdYes);
          checkLastQuestion(currentQuestion);
          playAudio(currentQuestion);
        } else if (msg.data == 'no') {
          showNextQuestion(currentQuestion.nextQuestonIdNo);
          checkLastQuestion(currentQuestion);
          playAudio(currentQuestion);
        }
      }
    }
  };

  ws.onopen = function () {
    console.log('Connected');
  };

  ws.onclose = function () {
    // in case of lost connection tries to reconnect every 3 secs
    setTimeout(wsConnect, 3000);
  };

  ws.disconnect = function () {
    console.log('Disconnected');
  };
}

function update() {
  // now send the output over the websocket
  if (ws) {
    ws.send(output);
  }
}

```
### Lights 💡

To make connection with the Phillips Hue Bulbs, I've used a brigde to establish a connection.

To program Philips Hue lamps with a bridge, you can follow these steps:

1. Connect the Philips Hue bridge to your router using an Ethernet cable and ensure that the bridge is powered on.
2. Download and install the Philips Hue app on your smartphone or tablet. The app is available for both iOS and Android devices.
3. Make sure your smartphone or tablet is connected to the same Wi-Fi network as the Philips Hue bridge.
4. Open the Philips Hue app and follow the instructions to create an account or log in.
5. Once you're logged in, the app will automatically try to detect your Philips Hue bridge. Follow the on-screen instructions to add the bridge to your Hue system.
6. After the bridge is added, you can start adding your Philips Hue lamps to the system. Make sure the lamps are powered on and do not turn off the power during the configuration process.
7. In the app, you can use the "Add" or "Add Light" function to individually detect and add the lamps to your Hue system. Follow the instructions in the app to pair the lamps.
8. Once the lamps are added, you can customize various features and settings in the app. This includes adjusting brightness, setting timers, creating scenes, and creating routines for automated lighting.

To check the connection, you should follow the steps provided on the <a href="https://developers.meethue.com/develop/get-started-2/" target="_blank" rel="noreferrer">developer website</a> of Hue. They alsof show how you can make use of their debugger.

The logica om verbinding te maken met de lampen en deze te besturen bevind zich in de activateScene.js. 
Eerst wordt er een connectie gemaakt naar de brigde om informatie (ID) van de lampen en scene op te halen 

```
export default async function activateScene(sceneId) {
  const url = `http://${bridgeIpAddress}/api/${username}/groups/${groupId}/action`;

  // Get the ID of the scene with the specified name
  const scenesResponse = await fetch(
    `http://${bridgeIpAddress}/api/${username}/scenes`,
  );
  ...
 }
```

Next, a scene is created based on the result of the questionnaire. Each session has its own unique scene that is tailored to the user's responses.

Creating a scene involves configuring specific lighting settings for the Philips Hue lamps. This can include adjusting the brightness, color, and even the positioning of the lights to create the desired ambiance. You can make use of the app to adjust these settings.

```
  // Set the group state to the specified scene
  const sceneBody = {
    scene: sceneId,
    recycle: true,
    brightness: 254,
  };
```

```
 case 'green':
      activateScene('mJwFJbfv5z6QQMI');
```

Finally, the response with the body is sent back to the lamps to activate them.

```
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(sceneBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });
```

## 📝 Related posts

- [How to install Raspberry PI] (https://github.com/meeplemaker/idl4-cc-rpi-install)
- [How to program the Phillips Hue Bulbs] (https://developers.meethue.com/develop/get-started-2/)


