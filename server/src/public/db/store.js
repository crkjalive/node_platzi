const list = []

const addMessage = (message) => {
    list.push(message)
}

const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessage, // agrega mensaje
    list: getMessages, // lista todos los mensajes
    // get
    // delete
    // update
}