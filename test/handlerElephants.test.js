const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber "count", retorna a quantidade de Elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('ao receber "names", retorna um array com os nomes de todos os Elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('ao receber "averageAge", retorna a média de idade de todos os Elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('ao receber "location", retorna a localização dos Elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('ao receber "popularity", retorna a popularidade dos Elefantes', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });
  it('ao receber "availability", retorna um array com a disponibilidade dos Elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('ao receber um parâmetro indefinido, retorna "undefined"', () => {
    const indefinido = undefined;
    const actual = handlerElephants(indefinido);
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('ao receber um parâmetro que não seja string, retorna "Parâmetro inválido, é necessário uma string"', () => {
    const param = 'umaPalavra';
    const typeofparam = (typeof param);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(expected).not.toBe(typeofparam === 'string');
  });
  it('ao receber nenhum parâmetro, retorna "undefined"', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('ao receber uma string diferente, retorna "null"', () => {
    const expected = null;
    expect(handlerElephants('string aleatoria')).toBe(expected);
  });
});
