const addMessage = (user, message) => {
    console.log(user, message)

    return new Promise((resolve, reject) => {

        if (!user || !message) {
            reject('Los datos son incorrectos')
            return false
        }

        const fullMessage = {

            user: user,
            message: message,
            date: new Date()
        }
        console.log(fullMessage)
    })
}

module.exports = {
    addMessage,
}