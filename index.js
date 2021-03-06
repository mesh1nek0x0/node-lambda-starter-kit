'use strict';

exports.handler = async (event, context, callback) => {
    console.log('Event', event);
    console.log('context', context);
    if (event.result === 'failure') {
        return callback(new Error('error end'));
    }

    return callback(null, 'success end');
};
