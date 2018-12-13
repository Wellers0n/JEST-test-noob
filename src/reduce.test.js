import { expect } from 'chai';
import reduce from './recude';

it('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
});

it("reduce([1,2,3], (acc, item) => acc + item retornar 6", () => {
    expect(reduce([1,2,3], (acc, item) => acc + item, 0)).to.be.equal(6)
})

it("reduce([1,2,3], (acc, item) => acc + item retornar 9", () => {
    expect(reduce([2,3,4], (acc, item) => acc + item, 0)).to.be.equal(9)
})

it('reduce([1,2], (acc, item) => acc, 1) retornar 1', () => {
    expect(reduce([1,2], (acc, item) => acc, 1)).to.be.deep.equal(1)
})

it('reduce([1, 2], (acc, item) => item, 0 retornar 2)', () => {
    expect(reduce([1,2], (acc, item) => item, 0)).to.be.deep.equal(2)
})
