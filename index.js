import { WebcastPushConnection } from 'tiktok-live-connector';

// Username of someone who is currently live
let tiktokUsername = "sijupip";

// Create a new wrapper object and pass the username
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
tiktokLiveConnection.connect().then(state => {
  console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
  console.error('Failed to connect', err);
})

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
tiktokLiveConnection.on('chat', data => {
  console.log(`${data.nickname}: ${data.comment}`);
})

tiktokLiveConnection.on('follow', (data) => {
  console.log(`Thanks for the follow, ${data.uniqueId}!`);
})

// And here we receive gifts sent to the streamer
tiktokLiveConnection.on('gift', data => {
  console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
})

tiktokLiveConnection.on('member', data => {
  console.log(`${data.uniqueId} joined the stream!`);
})

