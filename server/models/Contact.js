// models/Contact.js — Blueprint for contact form data

const mongoose = require('mongoose');

// Schema = defines what fields a contact message will have
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // naam dena zaroori hai
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // automatically current date/time save karega
  },
});

// Model = ye schema ko ek "usable tool" banata hai jisse data save/fetch kar sakein
// 'Contact' naam se MongoDB mein 'contacts' collection banegi (automatically plural)
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;