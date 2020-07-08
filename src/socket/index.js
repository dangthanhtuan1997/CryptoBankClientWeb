import io from 'socket.io-client';
import config from '../config';
import { onAddNotification } from '../actions';
import store from '../store';

const socket = io(config.socketUrl);

socket.on('debt', transaction => {
    onAddNotification('debt', transaction);
});

socket.on('receive', transaction => {
    onAddNotification('receive', transaction);
});

export { socket }