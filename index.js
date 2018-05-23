'use strict';

exports.handler = async (event, context, callback) => {
    if (event.result === 'fail') {
        return callback(new Error('error end'));
    }
    return callback(null, 'success end')
};
