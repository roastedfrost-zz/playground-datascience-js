import chai from 'chai';
import coefficientTanimoto from './coefficientTanimoto';

const expect = chai.expect;

describe('Coefficient Tanimoto', () => {
    it('returns 1 for empty sets', () => {
        const result = coefficientTanimoto([], []);
        expect(result).to.be.eql(1);
    });
    it('returns coefficient value', () => {
        const result = coefficientTanimoto([ 0, 2 ], [ 1, 2 ]);
        expect(result).to.be.closeTo(0.333, 0.001);
    });
});
