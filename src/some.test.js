import {expect} from 'chai';
import some from './some';

it("retornar uma function", () => {
    expect(some).to.be.a('function')
});

it("some([], item => item) precisa retornar false", () => {
    expect(some([], (item) => item)).to.not.be.ok
})

it('some([0,2,3], (item) => item) deve retornar true', () => {
    expect(some([0,2,3], item => item)).to.be.ok
})

it('some([1,2,0], (item) => item) deve retornar false', () => {
    expect(some([1,2,0], item => item)).to.be.ok
})

it('some([1,2,3], (item) => item) deve retornar true', () => {
    expect(some([1,2,3], item => item)).to.be.ok
})

it('some([1,2,3], (item) => item > 0) deve retornar true', () => {
    expect(some([1,2,3], item => item > 0)).to.be.ok
})

it('some([1,2,3], (item) => item > 3) deve retornar false', () => {
    expect(some([1,2,3], item => item > 3)).to.be.not.ok
})

it('some([0,0,0], (item) => item) deve retornar false', () => {
    expect(some([0,0,0], item => item)).to.be.not.ok
})