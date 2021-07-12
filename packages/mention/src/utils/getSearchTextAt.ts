import escapeRegExp from 'lodash/escapeRegExp';

export interface SearchTextAtResult {
  begin: number;
  end: number;
  matchingString: string;
}
/**
 * Return tail end of the string matching trigger upto the position.
 */
export default function getSearchTextAt(
  blockText: string,
  position: number,
  triggers: string[]
): SearchTextAtResult {
  const str = blockText.substr(0, position);

  const triggerPattern = triggers
    .map((trigger) => escapeRegExp(trigger))
    .join('|');

  const TRIGGER_REGEX = new RegExp(`(.|^)(${triggerPattern})`, 'g');

  const matches = str.matchAll(TRIGGER_REGEX);

  let triggerStartIndex = 0;
  let valueStartIndex = 0;

  for (const match of matches) {
    const charactersBeforeTriggerLen = match[1].length;
    const matchLen = match[2].length;

    triggerStartIndex = (match.index || 0) + charactersBeforeTriggerLen;
    valueStartIndex = triggerStartIndex + matchLen;
  }

  const matchingString = str.slice(valueStartIndex);

  const end = str.length;

  return {
    begin: triggerStartIndex,
    end,
    matchingString,
  };
}
