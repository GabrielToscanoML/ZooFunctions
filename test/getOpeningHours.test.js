const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('ao receber nenhum argumento, retorna um objeto específico', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos "Monday" e "09:00-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos "Tuesday" e "09:00-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos "Wednesday" e "09:00-PM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos "Thu" e "09:00-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    expect(actual).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('ao receber os argumentos "Friday" e "09:00-ZM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Friday', '09:00-ZM');
    expect(actual).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('ao receber os argumentos "Saturday" e "C9:00-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Saturday', 'C9:00-AM');
    expect(actual).toThrow(/^The hour should represent a number$/);
  });
  it('ao receber os argumentos "Sunday" e "09:c0-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Sunday', '09:c0-AM');
    expect(actual).toThrow(/^The minutes should represent a number$/);
  });
  it('ao receber os argumentos "Monday" e "13:00-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Monday', '13:00-AM');
    // const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrow(/^The hour must be between 0 and 12'$/);
  });
  it('ao receber os argumentos "Tuesday" e "09:60-AM", retorna uma mensagem', () => {
    const actual = getOpeningHours('Tuesday', '09:60-AM');
    // const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrow(/^The minutes must be between 0 and 59'$/);
  });
});
