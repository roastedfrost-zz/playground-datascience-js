import chai from 'chai';
import standardDeviation from './standardDeviation';

const expect = chai.expect;

describe('Standard Deviation', () => {
    it('returns value', () => {
        const list = [ 0, 2, 7 ];
        const result = standardDeviation(list);
        expect(result).to.be.closeTo(3.605, 0.001);
    });
});
