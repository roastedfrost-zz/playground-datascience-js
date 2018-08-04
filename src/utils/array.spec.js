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


import chai from 'chai';
import * as array from './array';


const expect = chai.expect;

describe('head', () => {
    it('returns the first item', () => {
        const result = array.head([1, 2, 3]);
        expect(result).to.be.eql(1);
    });
});

describe('tail', () => {
    it('returns all items except the first item', () => {
        const result = array.tail([1, 2, 3]);
        expect(result).to.be.eql([2, 3]);
    });
});

describe('isEmpty', () => {
    it('returns true if array is empty', () => {
        const result = array.isEmpty([]);
        expect(result).to.be.true;
    });
    it('returns false if array isn\'t empty', () => {
        const result = array.isEmpty([1, 2, 3]);
        expect(result).to.be.false;
    });
});

describe('sum', () => {
    it('returns sum of items', () => {
        const result = array.sum([1, 2, 3]);
        expect(result).to.be.eql(6);
    });
});

describe('uniq', () => {
    it('returns a new list containing only one copy of each element in the original list', () => {
        const result = array.uniq([1, 2, 3, 2, 1]);
        expect(result).to.be.eql([1, 2, 3]);
    });
});
