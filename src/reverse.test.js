import {expect} from 'chai';
import reverse from './reverse';

it("retornar uma function", () => {
    expect(reverse).to.be.a('function');
})
it("reverse([1,2,3]) deve retornar [3,2,1]", () => {
    expect(reverse([1,2,3])).to.be.deep.equal([3,2,1])
})

it("reverse([1,2,3,4]) deve retornar [4,3,2,1]", () => {
    expect(reverse([1,2,3,4])).to.be.deep.equal([4,3,2,1])
})