'use strict';

const {assert} = require('chai');
const sinon = require('sinon');
const index = require('../../index.js');

describe('index_spec test', () => {
    describe('正常系', () => {
        it('sample success', async () => {
            const stub = sinon.stub();
            await index.handler({result: 'success'}, {context:'foo'}, stub);
            assert.equal(stub.callCount, 1);
            assert.isNull(stub.args[0][0]);
            assert.equal(stub.args[0][1], 'success end');
        });
    });

    describe('異常系', () => {
        it('sample error', async () => {
            const stub = sinon.stub();
            await index.handler({result: 'fail'}, {context:'foo'}, stub);
            assert.equal(stub.callCount, 1);
            assert.isNotNull(stub.args[0][0]);
            assert.equal(stub.args[0][0].message, 'error end');
        });
    });
});
