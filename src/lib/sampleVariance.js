import {mean, sum, __, divide, compose, map} from 'ramda';

function sampleVariance(list) {
    const listMean = mean(list);
    const cardinality = list.length;
    const deviation = (x, xi) => x - xi;
    return compose(
        divide(__, cardinality - 1),
        sum,
        map(x => deviation(x, listMean)**2)
    )(list);
}

export default sampleVariance;
