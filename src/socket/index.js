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

socket.on('pay', transaction => {
    onAddNotification('pay', transaction);
});

socket.on('cancel-debt', transaction => {
    onAddNotification('cancel-debt', transaction);
});

export { socket }