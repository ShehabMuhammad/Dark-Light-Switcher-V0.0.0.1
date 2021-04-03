
var node = document.querySelector('#Dark-Light-Switcher-Ext'); 
try {
node.parentNode.removeChild(node); }

catch(err) {

console.log("You have to modify the them first so that you can get back to normal The error is : ");
console.error(err);
}

console.log("Going to normal..");

/ * */