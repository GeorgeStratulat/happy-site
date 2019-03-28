var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/intrebari', function(req, res) {
    res.sendFile(__dirname + "/html/intrebari.html");
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/html/contact.html");
});

app.post('/contact', function(req,res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'george.stratulat10@gmail.com',
               pass: 'Universitate10'
           }
       });
       const mailOptions = {
        from: req.body.email, // sender address
        to: 'george.stratulat10@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
    
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
          res.sendFile(__dirname + "/html/contact.html");

     });
});

// app.post('/contact', function (req, res) {
//     let mailOpts, smtpTrans;
//     smtpTrans = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: "george.stratulat10@gmail.com",
//         pass: GMAIL_PASS
//       }
//     });
//     mailOpts = {
//       from: req.body.name + ' &lt;' + req.body.email + '&gt;',
//       to: GMAIL_USER,
//       subject: 'New message from contact form at tylerkrys.ca',
//       text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
//     };
//     smtpTrans.sendMail(mailOpts, function (error, response) {
//       if (error) {
//         res.render('contact-failure');
//       }
//       else {
//         res.render('contact-success');
//       }
//     });
//   });

app.get('/unsubscribe', function(req, res) {
    res.sendFile(__dirname + "/html/unsubscribe.html");
});

app.get('/blog', function(req, res) {
    res.sendFile(__dirname + "/html/blog.html");
});

app.listen(3000);

app.use(express.static(__dirname));

console.log("listening 3000");
