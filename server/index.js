const express = require("express");
const app = express();
const {getMessages, newMessage, updateMessage, deleteMessage} = require("./controllers/message_controller")

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.get("/api/messages", getMessages)
app.post("/api/messages", newMessage)
app.put("/api/messages/:id", updateMessage)
app.delete("/api/messages/:id", deleteMessage)

const PORT = 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )