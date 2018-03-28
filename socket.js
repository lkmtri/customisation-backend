import socket from 'socket.io'

const io = socket(3005, {
  path: '/api/subscription'
})

io.on('connection', () => {
  console.log('a new client connected')
})

export const notifySocketSubscribers = ({ message, data }) => {
  io.emit(message, data)
}

export default (message, action = () => {}) =>
  async (...param) => notifySocketSubscribers({ message, data: await action(...param) })
