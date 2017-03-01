function getFunc() {
    var x = 7;
    return function(y) {
        console.log(x + y);
    }
}