'use strict';

const sinon = require('sinon');
const index = require('../../index.js');

describe('index_spec test', () => {
    afterEach(() => {
        sinon.restore();
    });

    const TARGET_INDEX = 0;
    const CALLBACK_ARG_ERROR = 0;
    const CALLBACK_ARG_RESULT = 1;
    describe('正常系', () => {
        it('sample success', async () => {
            const stub = sinon.stub();
            await index.handler(
                { result: 'success' },
                { context: 'foo' },
                stub
            );
            expect(stub.callCount).toBe(1); // eslint-disable-line no-magic-numbers
            expect(stub.args[TARGET_INDEX][CALLBACK_ARG_ERROR]).toBeNull();
            expect(stub.args[TARGET_INDEX][CALLBACK_ARG_RESULT]).toBe(
                'success end'
            );
        });
    });

    describe('異常系', () => {
        it('sample error', async () => {
            const stub = sinon.stub();
            await index.handler(
                { result: 'failure' },
                { context: 'foo' },
                stub
            );
            expect(stub.callCount).toBe(1); // eslint-disable-line no-magic-numbers
            expect(stub.args[TARGET_INDEX][CALLBACK_ARG_ERROR]).not.toBeNull();
            expect(stub.args[TARGET_INDEX][CALLBACK_ARG_ERROR].message).toBe(
                'error end'
            );
        });
    });
});
