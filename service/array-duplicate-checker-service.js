'use strict';

module.exports = {
    check (array) {
        return new Promise ((resolve, reject) => {
            let i;
            const len=array.length;
            const result = [];
            const obj = {};
            for (i=0; i<len; i++)
            {
                obj[array[i]]=0;
            }
            for (i in obj) {
                result.push(i);
            }
            resolve (result);
        });

    }
};