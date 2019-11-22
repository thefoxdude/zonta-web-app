var functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

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


exports.httpEmail = functions.https.onRequest((req, res) => {
  return Promise.resolve()
    .then(() => {


      const request = client.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: parseBody(req.body)
      });

      return client.API(request)


    })
    .then((response) => {
      if (response.body) {
        res.send(response.body);
      } else {
        res.end();
      }
    })

    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });


})