import ramda from 'ramda';

function coefficientTanimoto(a=[], b=[]) {
    const aCardinality = a.length;
    const bCardinality = b.length;
    if (!aCardinality && !bCardinality) {
        return 1;
    }
    const cCardinality = ramda.intersection(a, b).length;
    return cCardinality / (aCardinality + bCardinality - cCardinality);
}

export default coefficientTanimoto;
