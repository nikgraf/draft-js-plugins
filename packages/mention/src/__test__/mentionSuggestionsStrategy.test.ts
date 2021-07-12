import {
  ContentBlock,
  convertFromRaw,
  genKey,
  RawDraftEntity,
  RawDraftEntityRange,
} from 'draft-js';
import mentionSuggestionsStrategy from '../mentionSuggestionsStrategy';
import defaultRegExp from '../defaultRegExp';

const getBlock = (
  text: string,
  entityRanges: RawDraftEntityRange[] = [],
  entityMap: { [key: string]: RawDraftEntity } = {}
): ContentBlock => {
  const contentState = convertFromRaw({
    blocks: [
      {
        key: genKey(),
        text,
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges,
      },
    ],
    entityMap,
  });
  return contentState.getFirstBlock();
};

describe('test strategy with whitespace support disabled', () => {
  test.each([
    ['test empty string', '', ['@'], []],
    ['trigger only', '@', ['@'], [[0, 1]]],
    ['match single word', '@the ', ['@'], [[0, 4]]],
    ['should match a word with special characters', '@ęĻŌ', ['@'], [[0, 4]]],
    ['should match not match spaces', '@the walking dead', ['@'], [[0, 4]]],
    ['match within text', 'a lof @of text', ['@'], [[6, 9]]],
    [
      'should match if no whitespace before trigger',
      'a lof@of text',
      ['@'],
      [[5, 8]],
    ],
    [
      'should match multiple mentions',
      '@the @walking @dead',
      ['@'],
      [
        [0, 4],
        [5, 13],
        [14, 19],
      ],
    ],
    ['multi char trigger - empty string', '', [':in:'], []],
    ['multi char trigger - match single word', ':in:the ', [':in:'], [[0, 7]]],
    [
      'multi char trigger - match within text',
      'a lof :in:of text',
      [':in:'],
      [[6, 12]],
    ],
    [
      'multi char trigger - should match multiple mentions',
      ':in:the :in:walking :in:dead',
      [':in:'],
      [
        [0, 7],
        [8, 19],
        [20, 28],
      ],
    ],
  ])('%s', (_description, text, trigger, result) => {
    const callback = jest.fn();
    mentionSuggestionsStrategy(
      trigger,
      false,
      defaultRegExp
    )(getBlock(text), callback);
    expect(callback).toHaveBeenCalledTimes(result.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < result.length; ++i) {
      expect(callback).toHaveBeenNthCalledWith(i + 1, ...result[i]);
    }
  });
});
describe('test strategy with whitespace support enabled', () => {
  test.each([
    ['test empty string', '', ['@'], []],
    ['trigger only', '@', ['@'], [[0, 1]]],
    ['match single word', '@the', ['@'], [[0, 4]]],
    ['match single with following whitespace', '@the ', ['@'], [[0, 5]]],
    ['should match a word with special characters', '@ęĻŌ', ['@'], [[0, 4]]],
    ['match within text', 'a lof @of text', ['@'], [[6, 14]]],
    [
      'should match if no whitespace before trigger',
      'a lof@of text',
      ['@'],
      [[5, 13]],
    ],
    [
      'should match multiple mentions with spaces',
      '@the walking dead tv @the white house',
      ['@'],
      [
        [0, 21],
        [21, 37],
      ],
    ],
    [
      'should match multiple mentions with spaces and special characters',
      '@Thomas Müller @Mario Götze',
      ['@'],
      [
        [0, 15],
        [15, 27],
      ],
    ],

    ['multi char trigger - empty string', '', [':in:'], []],
    ['multi char trigger - match single word', ':in:the ', [':in:'], [[0, 8]]],
    [
      'multi char trigger - should match multiple mentions with spaces',
      ':in:the walking dead tv :in:the white house',
      [':in:'],
      [
        [0, 24],
        [24, 43],
      ],
    ],
  ])('%s', (_description, text, trigger, result) => {
    const callback = jest.fn();
    mentionSuggestionsStrategy(
      trigger,
      true,
      defaultRegExp
    )(getBlock(text), callback);
    expect(callback).toHaveBeenCalledTimes(result.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < result.length; ++i) {
      expect(callback).toHaveBeenNthCalledWith(i + 1, ...result[i]);
    }
  });

  it('should not match entities', () => {
    const callback = jest.fn();
    const key = genKey();
    const trigger = ['@'];
    mentionSuggestionsStrategy(
      trigger,
      true,
      defaultRegExp
    )(
      getBlock(
        '@the walking dead tv the white house',
        [
          {
            key: key as unknown as number,
            offset: 20,
            length: 15,
          },
        ],
        {
          [key]: {
            type: 'mention',
            mutability: 'IMMUTABLE',
            data: {},
          },
        }
      ),
      callback
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(0, 20);
  });
});
describe('multi mentions test strategy with whitespace support disabled', () => {
  test.each([
    ['test empty string', '', ['@', '('], []],
    ['trigger only', '@', ['@', '('], [[0, 1]]],
    [
      'match single word',
      '@the ( ',
      ['@', '('],
      [
        [0, 4],
        [5, 6],
      ],
    ],
    [
      'should match a word with special characters',
      '@ęĻŌ ęĻŌ(',
      ['@', '('],
      [
        [0, 4],
        [8, 9],
      ],
    ],
    [
      'should match not match spaces',
      '@the walking (dead',
      ['@', '('],
      [
        [0, 4],
        [13, 18],
      ],
    ],
    [
      'match within text',
      'a (lof @of text',
      ['@', '('],
      [
        [2, 6],
        [7, 10],
      ],
    ],
    [
      'should match if no whitespace before trigger',
      'a lof@of text(',
      ['@', '('],
      [
        [5, 8],
        [13, 14],
      ],
    ],
    [
      'should match multiple mentions',
      '@the (walking @dead',
      ['@', '('],
      [
        [0, 4],
        [5, 13],
        [14, 19],
      ],
    ],
  ])('%s', (_description, text, trigger, result) => {
    const callback = jest.fn();
    mentionSuggestionsStrategy(
      trigger,
      false,
      defaultRegExp
    )(getBlock(text), callback);
    expect(callback).toHaveBeenCalledTimes(result.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < result.length; ++i) {
      expect(callback).toHaveBeenNthCalledWith(i + 1, ...result[i]);
    }
  });
});
describe('multi mentions test strategy with whitespace support enabled', () => {
  test.each([
    ['test empty string', '', ['@', '('], []],
    ['trigger only', '@', ['@', '('], [[0, 1]]],
    [
      'match single word',
      '@the ( ',
      ['@', '('],
      [
        [0, 5],
        [5, 7],
      ],
    ],
    [
      'should match a word with special characters',
      '@ęĻŌ ęĻŌ(',
      ['@', '('],
      [
        [0, 8],
        [8, 9],
      ],
    ],
    [
      'should match not match spaces',
      '@the walking (dead',
      ['@', '('],
      [
        [0, 13],
        [13, 18],
      ],
    ],
    [
      'match within text',
      'a (lof @of text',
      ['@', '('],
      [
        [2, 7],
        [7, 15],
      ],
    ],
    [
      'should match if no whitespace before trigger',
      'a lof@of text(',
      ['@', '('],
      [
        [5, 13],
        [13, 14],
      ],
    ],
    [
      'should match multiple mentions',
      '@the (walking @dead',
      ['@', '('],
      [
        [0, 5],
        [5, 14],
        [14, 19],
      ],
    ],
  ])('%s', (_description, text, trigger, result) => {
    const callback = jest.fn();
    mentionSuggestionsStrategy(
      trigger,
      true,
      defaultRegExp
    )(getBlock(text), callback);
    expect(callback).toHaveBeenCalledTimes(result.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < result.length; ++i) {
      expect(callback).toHaveBeenNthCalledWith(i + 1, ...result[i]);
    }
  });

  it('should not match entities', () => {
    const callback = jest.fn();
    const key = genKey();
    const trigger = ['@'];
    mentionSuggestionsStrategy(
      trigger,
      true,
      defaultRegExp
    )(
      getBlock(
        '@the walking dead tv the white house',
        [
          {
            key: key as unknown as number,
            offset: 20,
            length: 15,
          },
        ],
        {
          [key]: {
            type: 'mention',
            mutability: 'IMMUTABLE',
            data: {},
          },
        }
      ),
      callback
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(0, 20);
  });
});
