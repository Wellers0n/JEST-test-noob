import {expect} from 'chai';
import filter from './filter-recursion';


it("filter([1,2,3]) retorna [1,2,3]", () => {
    expect(filter([0,2,3], item => item)).to.be.deep.equal([2,3])
})
