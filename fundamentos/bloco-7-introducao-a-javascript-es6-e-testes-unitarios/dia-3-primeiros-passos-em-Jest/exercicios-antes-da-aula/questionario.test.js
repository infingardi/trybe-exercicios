describe('Estudar na Trybe', () => {
    test('1 - Teste de Substring', () => {
      expect('A escola que te ensina a programar, a aprender e a trabalhar').toMatch('a escola');
    });
    test('2 - Teste de Substring', () => {
      expect('A escola').toMatch('A escola que te ensina a programar, a aprender e atrabalhar');
    });
    test('3 - Teste de Substring', () => {
      expect('A escola que te ensina a programar, a aprender e a trabalhar').stringMatching('escola');
    });
    test('4 - Teste de Substring', () => {
      expect('escola').stringMatching('A escola que te ensina a programar, a aprender e atrabalhar');
    });
    test('5 - Teste de Substring', () => {
      expect('A escola que te ensina a programar, a aprender e a trabalhar').toMatch('programa');
    });
  });
  