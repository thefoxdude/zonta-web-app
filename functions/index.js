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
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

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
   const msg = {
      to: 'danielfox400@gmail.com',
      from: 'hello@angularfirebase.com',
      subject:  'New Follower',
      // text: `Hey ${toName}. You have a new follower!!! `,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

      // custom templates
      templateId: '300e1045-5b30-4f15-8c43-41754b73fe4f',
      substitutionWrappers: ['{{', '}}'],
      substitutions: {
        name: 'Daniel'
        // and other custom properties here
      }
   };
   //res.end("Received POST request!");
   return sgMail.send(msg);
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