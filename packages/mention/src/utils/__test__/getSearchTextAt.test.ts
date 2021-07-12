import getSearchTextAt from '../getSearchTextAt';

describe('getSearchTextAt', () => {
  test.each([
    [
      'finds the matching string following trigger',
      'hi @The Walking Dead',
      20,
      ['@'],
      {
        matchingString: 'The Walking Dead',
        begin: 3,
        end: 20,
      },
    ],
    [
      'finds the matching string following trigger upto the position only',
      'hi @The Walking Dead',
      15,
      ['@'],
      {
        matchingString: 'The Walking',
        begin: 3,
        end: 15,
      },
    ],
    [
      'finds the matching string following empty trigger',
      'Max',
      3,
      [''],
      {
        matchingString: '',
        begin: 3,
        end: 3,
      },
    ],
    [
      'finds the matching string even if it contains the trigger',
      '@one@example.c',
      14,
      ['@'],
      {
        matchingString: 'example.c',
        begin: 4,
        end: 14,
      },
    ],
    [
      'finds the matching string, including trigger, following a trigger',
      '@Max @one@example.c',
      19,
      ['@'],
      {
        matchingString: 'example.c',
        begin: 9,
        end: 19,
      },
    ],
    [
      'finds the matching string, with a multi character trigger',
      'hi :in:The Walking Dead',
      23,
      [':in:'],
      {
        matchingString: 'The Walking Dead',
        begin: 3,
        end: 23,
      },
    ],
  ])('%s', (_text, blockText, position, trigger, result) => {
    expect(getSearchTextAt(blockText, position, trigger)).toEqual(result);
  });
});
