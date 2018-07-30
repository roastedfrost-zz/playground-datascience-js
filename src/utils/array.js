/*
 * Copyright (C) 2018 roastedfrost
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
*/


const tail = ([,...t]) => t;


const head = ([h]) => h;


const isEmpty = array => Boolean(array.length === 0);


const at = index => arr => arr[index];


const sum = (function _r(array, accumulator = 0) {
    return isEmpty(array) ?
        accumulator :
        _r(tail(array), accumulator + head(array));
});


const uniq = array => ([...(function _r(array, set) {
    return isEmpty(array) ?
        set :
        _r(tail(array), set.add(head(array)));
})(array, new Set())]);


const count = (function _r(array, accumulator = new Map()) {
    if (isEmpty(array)) return accumulator;
    const item = head(array);
    accumulator.set(
        item,
        (accumulator.has(item) ? accumulator.get(item) : 0) + 1
    );
    return _r(tail(array), accumulator);
});


const freq = array => new Map(
    [...count(array)]
        .map(
            ([item, count]) => ([item, count / array.length])
        )
);


const entropy = array  => Math.abs(
    sum(
        [...freq(array)].map(
            ([,freq]) => freq * Math.log2(freq)
        )
    )
);


export {
    head,
    tail,
    isEmpty,
    at,
    sum,
    uniq,
    count,
    freq,
    entropy
};
