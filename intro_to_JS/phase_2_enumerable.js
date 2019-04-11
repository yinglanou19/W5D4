Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};


Array.prototype.myMap = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++){
        res.push(callback(this[i]));
    }
    return res;
};




Array.prototype.myReduce = function(callback, inititalValue) {
    let i;
    let acc;
    if (inititalValue){
        acc = inititalValue;
        i = 0;
    }
    else {
        acc = this[0];
        i = 1;
    }
    
    for (; i<this.length; i++){
        callback(acc, this[i]);
    }
    return acc;
};






// Array.prototype.myReduce = function (callback, inititalValue) {
//     let acc; 
//     let i;
//     if (inititalValue) {
//         acc = inititalValue;
//         i = 0;
//     }
//     else{
//         acc = this[0];
//         i = 1;
//     }

//     for (; i < this.length; i++) {
//         acc = callback(acc, this[i]);
//     }

//     return acc;
// };

