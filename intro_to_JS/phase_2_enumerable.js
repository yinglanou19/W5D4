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

Array.prototype.myMapWithClosure = function (calling) {
    let res = [];
    this.myEach(function(ele) {
        res.push(calling(ele));
    });
};



Array.prototype.myMapWithClosure = function (calling) {
    let res = [];

    const myCallback = el => res.push(calling(el));
    this.myEach(myCallback);
    
// another way to code this! 
    // this.myEach(function (ele) {
    //     res.push(calling(ele));
    // });
};



Array.prototype.myReduce = function(callback, inititalValue) {
    let x;
    let acc;
    if (inititalValue){
        acc = inititalValue;
        x = 0;
    }
    else {
        acc = this[0];
        x = 1;
    }

    for (let i = x; i<this.length; i++){
        callback(acc, this[i]);
    }
    return acc;
};






