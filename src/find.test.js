import find from './find';
import  {expect} from 'chai';

it('should be a function', () => {
    expect(find).to.be.a('function')
})

it('find([1,2], (item) => item === 1) should be 1', () => {
    expect(find([1,2], (item) => item === 1)).to.be.deep.equal(1)
})

it('find([1,2,4], (item) => item === 4) should be 4', () => {
    expect(find([1,2,4], (item) => item === 4)).to.be.deep.equal(4)
})

it('find([1,2,4], (item) => item === 5) should be undefined', () => {
    expect(find([1,2,4], (item) => item === 5)).to.be.deep.equal(undefined)
})