Array.prototype.uniq = function () {
    let result = [];
    for (let i=0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
    
};


Array.prototype.uniq2 = function () {
    let result = [];
    this.forEach( function (ele) { 
        if (!result.includes(ele)) {
            result.push(ele);
        }
    });
    return result;
};

Array.prototype.twoSum = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length; j++){
            if ((j > i) && (this[i] + this[j] === 0)) {
                result.push([i, j]);
            }
        }
    }
    return result;
};



Array.prototype.transpose = function () {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        let row = [];
        for (let j = 0; j < this.length; j++ ) {
            row.push(this[j][i]);
        }
        res.push(row);
    }
    return res;
};


Array.prototype.transpose1 = function () {
    let res = [];
    for (let i = 0; i < this.length; i++){
        let row = [];
        for (let j = 0; j < this.length; j++) {
            row.push(this[j][i]);
        }
        res.push(row);
    }
    return res;
};


Array.prototype.transpose2 = function () {
    let arrClone = this.slice(0);
    for(let i = 0; i < this.length-1; i++){
        for(let j = i+1;j<this.length; j++ ){
            let temp = arrClone[i][j];
            arrClone[i][j] = arrClone[j][i];
            arrClone[j][i] = temp;
        }
    }
    return arrClone;
};


