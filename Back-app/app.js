const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const supportRoute = require('./routes/support');
const imageUploaderRoute = require('./routes/postImage');
const profileRoute = require('./routes/profile');
const tragetRoute = require('./routes/traget');

app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));

app.use("/api/post",postRoute);
app.use("/api/user",userRoute);
app.use("/api/images",imageUploaderRoute);
app.use("/api",supportRoute);
app.use("/api/profile",profileRoute);
app.use("/api/traget",tragetRoute);

module.exports = app;