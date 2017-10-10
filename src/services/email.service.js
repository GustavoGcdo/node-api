'use strict';

const config = require('../config');

/* WITH NODEMAILER
const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'senhagmail'
  }
});

exports.send = async (to, subject, body) => {
  tranporter.sendMail({
    from: 'UserAdmin <useradmin@gmail.com>',
    to: to,
    subject: subject,
    html: body
  });
};
 */
