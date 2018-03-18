'use strict';


module.exports = {
    convert (array) {
        return new Promise ((resolve, reject) => {
            let result = [];

        for (let i in array) {
            result.push (" crawler.queue(\'" + array[i] + "\');");
        }
        resolve(result);
        })

    }

}