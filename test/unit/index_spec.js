'use strict';

const sinon = require('sinon');
const index = require('../../index.js');

describe('index_spec test', () => {
    describe('正常系', () => {
        it('sample success', async () => {
            const stub = sinon.stub();
            await index.handler(
                { result: 'success' },
                { context: 'foo' },
                stub
            );
            expect(stub.callCount).toBe(1);
            expect(stub.args[0][0]).toBeNull();
            expect(stub.args[0][1]).toBe('success end');
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
            expect(stub.callCount).toBe(1);
            expect(stub.args[0][0]).not.toBeNull();
            expect(stub.args[0][0].message).toBe('error end');
        });
    });
});
