import chai from 'chai';
import sampleVariance from './sampleVariance';

const expect = chai.expect;

describe('Sample Variance', () => {
    it('returns variance value', () => {
        const list = [ 1, 2, 3 ];
        const result = sampleVariance(list);
        expect(result).to.be.eql(1);
    });
});
