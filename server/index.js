const express = require('express');
const chat = require('./Chat/Chat.js');

const app = express();

chat.setUpChat();

