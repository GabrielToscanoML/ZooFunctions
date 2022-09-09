const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber "count", retorna a quantidade de Elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('ao receber "names", retorna um array com os nomes de todos os Elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('ao receber "averageAge", retorna a média de idade de todos os Elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('ao receber "location", retorna a localização dos Elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('ao receber "popularity", retorna a popularidade dos Elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
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
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('ao receber nenhum parâmetro, retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('ao receber uma string diferente, retorna "null"', () => {
    expect(handlerElephants('string aleatoria')).toBe(null);
  });
});
