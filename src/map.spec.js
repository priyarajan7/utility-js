const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');

describe('Map', () => {

    it('Map of [], cube should be []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Map of [1,2,3], cube should be [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('Map of [1,2,3], identity should be [1,2,3]', () => {
            expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });
})