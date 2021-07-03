const EventEmitter = require('events')
const uuid = require ('uuid')


//Generate IDs
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg){
        //Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

//module.exports = Logger


logger.on('message', (data) => console.log('Called Listener', data))
logger.log('Hello World')
logger.log('Hi')
logger.log('New test' )