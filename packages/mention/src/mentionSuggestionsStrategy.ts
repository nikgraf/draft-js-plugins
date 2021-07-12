import { ContentBlock } from 'draft-js';
import escapeRegExp from 'lodash/escapeRegExp';

interface FindWithRegexCb {
  (start: number, end: number): void;
}

function findInContentBlock(
  regex: RegExp,
  text: string,
  nonEntityStart: number,
  callback: FindWithRegexCb
): void {
  let matchArr;
  let start;
  let prevLastIndex = regex.lastIndex;

  // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed
  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }

    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;
    const end = start + matchArr[0].length;

    // trim the result if we have a leading character
    if (matchArr[1].length > 0) {
      start += 1;
    }

    callback(start, end);
  }
}

function findInContentBlockWithWhitespace(
  regex: RegExp,
  text: string,
  nonEntityStart: number,
  callback: FindWithRegexCb
): void {
  let matchArr;
  let start;
  let prevLastIndex = regex.lastIndex;

  // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed
  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }
    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;
    const end = start + matchArr[0].length;
    callback(start, end);
  }
}

const findWithRegex = (
  regex: RegExp,
  contentBlock: ContentBlock,
  supportWhiteSpace: boolean,
  callback: FindWithRegexCb
): void => {
  const contentBlockText = contentBlock.getText();

  // exclude entities, when matching
  contentBlock.findEntityRanges(
    (character) => !character.getEntity(),
    (nonEntityStart, nonEntityEnd) => {
      const text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
      if (supportWhiteSpace) {
        findInContentBlockWithWhitespace(regex, text, nonEntityStart, callback);
      } else {
        findInContentBlock(regex, text, nonEntityStart, callback);
      }
    }
  );
};

export default (
  triggers: string[],
  supportWhiteSpace: boolean,
  regExp: string
): ((contentBlock: ContentBlock, callback: FindWithRegexCb) => void) => {
  const triggerPattern = `(${triggers
    .map((trigger) => escapeRegExp(trigger))
    .join('|')})`;
  const MENTION_REGEX = supportWhiteSpace
    ? new RegExp(`${triggerPattern}(${regExp}|\\s)*`, 'g')
    : new RegExp(`(.|^)${triggerPattern}${regExp}*`, 'g');

  return (contentBlock: ContentBlock, callback: FindWithRegexCb) => {
    findWithRegex(MENTION_REGEX, contentBlock, supportWhiteSpace, callback);
  };
};
