import io from 'socket.io-client';
import config from '../config';
import { onAddNotification } from '../actions';

const socket = io(config.socketUrl);

socket.on('debt', transaction => {
    onAddNotification('debt', transaction);
});

export { socket }