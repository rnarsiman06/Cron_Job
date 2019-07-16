// Initialize using signing secret from environment variables
var SIGNING_SECRET = "27fc8f87e23888b75df735dd5ee20859"
var token = "xoxp-664632252339-664618209730-686117799399-ae391f264556bd1cd835af28f11766be";
const { createEventAdapter } = require('@slack/events-api');
const slackEvents = createEventAdapter(SIGNING_SECRET);
const port = "3000";
var id_file = "";


const { WebClient } = require('@slack/web-api');
const web = new WebClient(token);
/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});
*/

/*
// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
  console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});
*/
// /*

slackEvents.on('file_shared', (event) => {
  id_file = event.file_id;
  console.log(id_file);
  while (i < 15) {
    (async () => {
      // See: https://slack.com/api/files.info
      const res = await web.files.info({token: token, file: id_file});
      // `res` contains information about the posted message
      console.log('File uploaded', res);
    
  
/*
    var mailOptions = {
      from: '',
      to: '',
      subject: 'Testing Link from Slack',
      text: res
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    */
    })();
  i++;
  }
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// slackFiles.on('files.sharedPublicURL', (file) => {
//   console.log(`Received a file called ${file.id} from: user ${file.user} in channel ${file.channels}
//   with url ${file.permalink_public}`);
// });

/*
//Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close(cb);  // close() is async, call cb after close completes.
  });
}).on('error', function(err) { // Handle errors
  fs.unlink(dest); // Delete the file async. (But we don't check the result)
  if (cb) cb(err.message);
  });
};
*/

// Start a basic HTTP server
slackEvents.start(port).then(() => {
  // Listening on path '/slack/events' by default
  console.log(`server listening on port ${port}`);
});
