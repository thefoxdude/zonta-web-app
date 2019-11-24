var functions = require('firebase-functions');
const express = require('express');
const app = express();

const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
admin.initializeApp();
app.use(cors);

const sendgrid = require('sendgrid');
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const client = sendgrid(SENDGRID_API_KEY);

function parseBody(body) {
  var helper = sendgrid.mail;
  var fromEmail = new helper.Email(body.from);
  var toEmail = new helper.Email(body.to);
  var subject = body.subject;
  var content = new helper.Content('text/html', body.content);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  return  mail.toJSON();
}

app.post('/v3/mail/send', (req, res) => {
  res.end("Received POST request!");  
});

// app.onRequest((req, res) => {
//   cors(req, res, () => {
//     return Promise.resolve()
//     .then(() => {


//       const request = client.emptyRequest({
//         method: 'POST',
//         path: '/v3/mail/send',
//         body: ''
//       });

//       return client.API(request)


//     })
//     .then((response) => {
//       if (response.body) {
//         res.send(response.body);
//       } else {
//         res.end();
//       }
//     })

//     .catch((err) => {
//       console.error(err);
//       return Promise.reject(err);
//     });
//   })
// });

exports.app = functions.https.onRequest(app);