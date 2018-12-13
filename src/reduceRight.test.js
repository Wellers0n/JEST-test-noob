import reduceRigth from './reduceRight';
import { expect } from 'chai';

it('reduceRigth retornar uma function', () => {
    expect(reduceRigth).to.be.a('function');
})

it('reduceRight(["do","nan","fer"], (acc, item) => acc + item, "") retornar "fernando"', () => {
    expect(reduceRigth(["do","nan","fer"], (acc, item) => acc + item, "")).to.be.deep.equal("fernando")
})

it('reduceRight(["la","bo"], (acc, item) => acc + item, "") retornar "bola"', () => {
    expect(reduceRigth(["la","bo"], (acc, item) => acc + item, "")).to.be.deep.equal("bola")
})

it('reduceRight([1,2], (acc, item) => acc + item, 0) retornar 3', () => {
    expect(reduceRigth([1,2], (acc, item) => acc + item, 0)).to.be.deep.equal(3)
})