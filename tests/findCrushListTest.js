const should = require('should');
const findCrushs = require('../findCrushs');

describe('find crushs', () => {
    it('soma crushs', () => {
        findCrushs.somaCrush(2, 3).should.be.equal(5)
    });
    it('somar dois números e retornar 30', () => {
        findCrushs.somaCrush(10, 20).should.be.equal(30)
    });
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushs.encontraCrush('Joselito Marques').should.be.equal('Crush não encontrado')
    });
    it('Retorna mensagem de campo nome está vazio', () => {
        findCrushs.encontraCrush().should.be.equal('Campo nome está vazio')
    });
    it('Retorna mensagem de tipo inválido', () => {
        findCrushs.encontraCrush(123).should.be.equal('Tipo inválido')
    });
    it('Deve retornar um nome da lista', () => {
        findCrushs.encontraCrush('Carlos Daniel').should.be.equal('Carlos Daniel')
    });
})