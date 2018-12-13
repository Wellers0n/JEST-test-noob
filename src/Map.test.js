import {expect} from 'chai';
import app from './Map.js';

it('retorna uma func', () => {
  expect(app).to.be.a('function')
})

it('retornar um array [1,2]', () => {
  expect(app([1,2], (item) => item)).to.be.deep.equal([1,2])
})

it('retornar um array [2,3]', () => {
  expect(app([2,3], (item) => item)).to.be.deep.equal([2,3])
})

it('app([1,2], (item) => item + 1) retorna [2,3]', () => {
  expect(app([1,2], (item) => item + 1)).to.be.deep.equal([2,3])
})

it('app([2,3], (item) => item + 1) retorna [3,4]', () => {
  expect(app([2,3], (item) => item + 1)).to.be.deep.equal([3,4])
})

it('app([1,2], (item, index) => index) retorna [0,1]', () => {
  expect(app([1,2], (item, index) => index)).to.be.deep.equal([0,1])
})

it('app([1,2], (item, index, arr) => arr) retorna [[1,2], [1,2]]', () => {
  expect(app([1,2], (item, index, arr) => arr)).to.be.deep.equal([[1,2], [1,2]])
})

it('map(1) should return trhow a typeError', () => {
  let error
  try {
    app(1)
  } catch (e) {
    error = e
  }
  expect(error.name).to.be.equal('TypeError')
})

it('map([1,2], "function") should return trhow a typeError', () => {
  let error
  try {
    app([1,2], 'function')
  } catch (e) {
    error = e
  }
  expect(error.message).to.be.equal('erro, esse params deve ser um function')
})