'use strict';

const FileReaderService = require ('./file-reader-service');
const FileWriterService = require ('./file-writer-service');
const ArrayDuplicateCheckerService = require ('./array-duplicate-checker-service');
const ArrayConverterToCodeService = require ('./array-converter-to-code-service');

module.exports = {
    convert (file) {
       return FileReaderService.read(file).then((array) => {
            return ArrayDuplicateCheckerService.check(array).then((array1) => {
                return ArrayConverterToCodeService.convert(array1).then ((code) => {
                    return FileWriterService.writeArray('./res/code/code.js', code);
                });
        });
        }).catch ((err) => {
            throw new Error(err);
        })


    }

}