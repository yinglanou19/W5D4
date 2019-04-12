Array.prototype.bubbleSort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++){
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
};

// let arr = [6,1,2,5,4,3];
// arr.bubbleSort();
// console.log(arr);

String.prototype.substrings = function() {
    let res = [];
    for (let i = 0; i<this.length; i++){
        for (let j = i+1; j <= this.length; j++){
            res.push(this.slice(i,j));
        }
    }
    return res; 
};



// let str = "what?";
// str.substrings();



