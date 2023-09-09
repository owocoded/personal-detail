const days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
const d = new Date();
let day = days[d.getUTCDay()];
document.getElementById('day').innerHTML = day;

const b = new Date();
document.getElementById('time').innerHTML = b.toUTCString();