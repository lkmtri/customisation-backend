import socket from 'socket.io'
import config from 'config'

const SOCKET_PORT = config.socketPort

const io = socket(SOCKET_PORT, {
  path: '/api/subscription'
})

io.on('connection', () => {
  console.log('a new client connected')
})

export const notifySocketSubscribers = ({ message, data }) => {
  io.emit(message, data)
}

export default (message, action = () => {}) =>
  async (...param) => {
    try {
      const data = await action(...param)
      notifySocketSubscribers({ message, data })
    } catch (e) {
      throw e
    }
  }
