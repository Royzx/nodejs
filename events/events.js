var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

function water(who) {
	console.log('give '+who+'water');
	
}
life.on('qiuanwei',water);

life.on('qiuanwei', function(who) {
	console.log('give '+who+'2');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'3');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'4');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'5');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'6');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'7');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'8');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'9');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'10');
});

life.on('qiuanwei', function(who) {
	console.log('give '+who+'....11');
});

life.on('qiuniai', function(who) {
	console.log('give '+who+'....buy clothes');
});

life.on('qiuniai', function(who) {
	console.log('give '+who+'....buy work');
});

life.removeListener('qiuanwei',water);
life.removeAllListeners('qiuanwei');

var hasConfortListener = life.emit('qiuanwei','man');
var hasLovedListener = life.emit('qiuniai','women');

console.log(hasConfortListener);
console.log(hasLovedListener);

console.log(life.listeners('qiuanwei').length);
console.log(EventEmitter.listenerCount(life,'qiuniai'));

