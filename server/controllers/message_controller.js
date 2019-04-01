let messages = [];
let id = 0;

const getMessages = (request,response) => {
    response.send(messages);
}

const newMessage = (request,response) => {
    const { text,time } = request.body;
    let newMessage = {
      id: id,
      text: text,
      time: time
    }
    id++
    messages.push(newMessage);
    response.send(messages)
}

const updateMessage = (request,response) => {
    let index
    messages.forEach((message,idx) => {
    if ( message.id === +request.params.id){
        index = idx;
    }
    })
    messages[index] = {
        id: messages[index].id,
        time: messages[index].time,
        text: request.body.text
    }
    response.send(messages)
}

const deleteMessage = (request,response) => {
    let index = null
    messages.forEach((message,idx) => {
        if (message.id === +request.params.id){
            index = idx;
        }
        })
    messages.splice(index,1)
    response.json(messages)
}


module.exports = {
    getMessages,
    newMessage,
    updateMessage,
    deleteMessage
}