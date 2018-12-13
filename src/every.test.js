import {expect} from 'chai';
import every from './every';

it("retornar uma function", () => {
    expect(every).to.be.a('function')
});

it("every([], item => item) precisa retornar true", () => {
    expect(every([], (item) => item)).to.be.ok
})

it('every([0,2,3], (item) => item) deve retornar false', () => {
    expect(every([0,2,3], item => item)).to.not.be.ok
})

it('every([1,2,0], (item) => item) deve retornar false', () => {
    expect(every([1,2,0], item => item)).to.not.be.ok
})

it('every([1,2,3], (item) => item) deve retornar true', () => {
    expect(every([1,2,3], item => item)).to.be.ok
})

it('every([1,2,3], (item) => item > 0) deve retornar true', () => {
    expect(every([1,2,3], item => item > 0)).to.be.ok
})

it('every([1,2,3], (item) => item > 2) deve retornar false', () => {
    expect(every([1,2,3], item => item > 2)).to.be.not.ok
})