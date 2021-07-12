# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

- modify trigger regex to allow triggering menu suggestions without leading space [#973]

## 4.5.2

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.5.1

- do not render popover if there are no mentions, add `renderEmptyPopup` prop [#2049](https://github.com/draft-js-plugins/draft-js-plugins/issues/2049)
- remove the trigger from the search value [#2047](https://github.com/draft-js-plugins/draft-js-plugins/issues/2047)

## 4.5.0

- fixing multi-character trigger [#2017](https://github.com/draft-js-plugins/draft-js-plugins/issues/2017)
- change MentionSuggestions to popper.js with option `popperOptions`, `popoverContainer` and deprecate `popoverComponent` and `positionSuggestions` [#1933](https://github.com/draft-js-plugins/draft-js-plugins/issues/1933)
- Fix @-mentions to work when the trigger character appears within the search string, for instance an email address.

## 4.4.1

- fixing issue that line does not work [#2004](https://github.com/draft-js-plugins/draft-js-plugins/issues/2004)

## 4.4.0

- fixing issue with build for commen js bundels [#1976](https://github.com/draft-js-plugins/draft-js-plugins/issues/1976)

## 4.3.2

- Add store to PositionSuggestionsParams types [#1945](https://github.com/draft-js-plugins/draft-js-plugins/issues/1945)
- Fixing issue if trigger is first character and cursor if before trigger [#1957](https://github.com/draft-js-plugins/draft-js-plugins/issues/1957)

## 4.3.1

- Fix the @ mentions to actually work. Right now they don't work in the middle of a line. If you start a line with "@" it works but if you start typing text then type "@" it doesn't work.
- Extend the support for chinese symbols [#1888](https://github.com/draft-js-plugins/draft-js-plugins/issues/1888)

## 4.3.0

- fixing trigger range for suggestion strategy [#1772](https://github.com/draft-js-plugins/draft-js-plugins/issues/1772)
- fixing lookahead RegExp which is not supported in Safari [#1844](https://github.com/draft-js-plugins/draft-js-plugins/issues/1844)
- added support for multiple triggers

## 4.2.0

- remove `entryComponent` from plugin config [#1736](https://github.com/draft-js-plugins/draft-js-plugins/issues/1736)

## 4.1.0

- add "sideEffects": false for tree shaking
- Fix regex to ignore trigger in text with supportWhitespace [#1723](https://github.com/draft-js-plugins/draft-js-plugins/issues/1723)

## 4.0.2

- Fix key bindings issue if dropdown is open but there's no suggestion [#1696](https://github.com/draft-js-plugins/draft-js-plugins/issues/1696)
- Fix popoverComponent types

## 4.0.1

- fixing issue Failed to execute 'removeChild' on 'Node' [#1697](https://github.com/draft-js-plugins/draft-js-plugins/issues/1697)

## 4.0.0

- Add Arabic Support
- Remove legacy lifecycle hooks
- Require react 16.3 and above version
- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- Use lodash-es in esm bundle
- Added open and onOpenChange required props to make state controlled outside and prevent reacting on suggestions list
- onOpen and onClose callbacks are removed in favour of onOpenChange
- Made suggestions prop required (pass empty array for async suggestions)
- Remove prevState and state from positionSuggestions
- add entryComponent to mention plugin
- convert to typescript
- use the setEditorState and getEditorState functions from props.store in EmojiSuggestionsPortal

## 3.1.5

- removed deprecated draft-js hooks (onUpArrow, onDownArrow, onEscape, onTab) usage

## 3.1.4

- Allow draft-js v0.11
- Remove unused dependencies

## 3.1.3

- Force update regex's `lastIndex` to avoid infinite loop
- Fixed replace issue while `mentionTrigger` is empty

## 3.1.2

- Allow empty `mentionTrigger` with `supportWhitespace: true` #1182

## 3.1.1

- Fix regression for special characters in mention strategy.

## 3.1.0

- Added `supportWhitespace` option to allow more precise matching of mentions containing spaces

## 3.0.4

- Added an `id` attribute on the listbox options so the `aria-activedescendant` value refers to the focused option.

## 3.0.2 - 3.0.3

- bumped find-with-regex

## 3.0.1

- Added `aria-selected="true"` for the suggestions listbox focused option.
- Update aria attributes to use booleans

## 3.0.0

- Deprecate immutable suggestions (breaking change), use arrays from now on
- export default theme (in case we want to extend it)

## 2.0.2

(Much thanks to "dem" aka "Michael Deryugin" - https://github.com/dem)

- fix suggestions dropdown position in case of line wrap
- Allow mention popup for styled text
- Fixed bug where a user typed not existing mention @xxx and cursor is not moved with up/down arrow key
- Updated dependencies to support react 16

## 2.0 alpha

### Added

- Passing through `isFocused` prop to `entryComponent`. Thanks to @thomas88
- Added support for Latin-1 Supplement and Latin Extended-A characters. Thanks to @thomas88
- Fixed incorrect opening of suggestions. Thanks to @thomas88
- Added multiple character support for mentionTrigger
- Added config option `mentionSuggestionsComponent`. If provided the passed component replaces the default `MentionSuggestions` component. The provided component must implement the same interface like `MentionSuggestions`.
- Added support popoverComponent on the `MentionSuggestions` component. Thanks to @samdroid-apps
- Introduced a new configuration option `mentionTrigger`. By default it is set to `@`. As before by default typing `@` will trigger the search for mentions. You can provide a custom character or string to change when the search is triggered. [#320](https://github.com/draft-js-plugins/draft-js-plugins/pull/320) Thanks to @yjang1031
- MentionSuggestions accepts a new prop `entryComponent`. The passed component is used as the template for each of the suggestions' entry. [#317](https://github.com/draft-js-plugins/draft-js-plugins/pull/327). Thanks to @Zhouzi
- `defaultEntryComponent` component is passed `searchValue` prop to enable more customizations when displaying the the MentionSuggestions. Thanks to @nishp1
- The config now accepts a new prop `mentionComponent`. If provided the passed component is used to render a Mention. [#271](https://github.com/draft-js-plugins/draft-js-plugins/pull/271). Thanks to @alexkuz
- Introduced the `mentionRegExp` configuration to overwrite the regular expression for initiating the dropdown. By default this supports any alphanumeric character as well as Chinese, Japanese & Korean characters.
- Added support for Chinese words. Thanks to @mzbac
- Added support for Japanese characters (hiragana & katakana).
- Added support for Korean characters (Hangul Syllables & Hangul Compatibility Jamo). Thanks to @FourwingsY
- Added support for Cyrillic characters. Thanks to @imamatory
- Added `onAddMention` prop to MentionSuggestions. The first argument of this callback will contain the mention entry.

### Fixed

- Escape spaces before mention trigger properly
- Escape mention trigger regex properly
- Fix bug that selects candidate on hitting return key even if the dropdown was closed. Thanks to @ngs [#720](https://github.com/draft-js-plugins/draft-js-plugins/pull/720)
- Fix issue with: add two mentions in the Custom Mention Component Example editor, then press backspace key, will remove the first one. Thanks to @chenyuejie [#693](https://github.com/draft-js-plugins/draft-js-plugins/pull/693)
- Prevents inserting the selected item on Enter or Tab when there's no trigger in sight and dropdown is not rendered. Thanks to @alexfedoseev [#706](https://github.com/draft-js-plugins/draft-js-plugins/pull/706)
- Reopens mentions dropdown if new suggestions are available. Thanks to @jameskraus [#659](https://github.com/draft-js-plugins/draft-js-plugins/pull/659)
- Solved a bug with @ being placed in the beginning. Thanks to @hjyue1 [#621](https://github.com/draft-js-plugins/draft-js-plugins/pull/621)
- Fixed "Cannot read property 'getBoundingClientRect' of null" issue. Thanks to @ismyrnow [#666](https://github.com/draft-js-plugins/draft-js-plugins/pull/667)
- Mentions popover showed up when typing before a @ [#323](https://github.com/draft-js-plugins/draft-js-plugins/issues/323) Thanks to @nishp1
- Only pass element properties to the root Div of MentionSuggestions to remove the "Unknown prop warning" in React 15.2.0
- Fixed bug where a user typed @xxx (invalid mention) and hit Enter. [#416](https://github.com/draft-js-plugins/draft-js-plugins/pull/416)
- Fixed bug where press up arrow would not cycle back to the bottom of suggestions
- Fixed race condition where the SuggestionPortal would unregister and not register again when inputting Japanese, etc.
- Fixed bug where `mentionPrefix` does not appear in `editorState`. `mentionPrefix` is no longer passed to `mentionComponent`.
- Fixed bug where `onSearchChange` didn't fire when a user switched between two different mention autocompletions with the same search value. Now it will trigger `onSearchChange` in such a case.
- Fixed unrecognized `isFocused` React prop.

## 1.1.2 - 2016-06-26

### Fixed

- Accepts plain JavaScript Objects for mentions from now on. Until now it only accepted an `Immutable.Map`. This change would make it play nicer together with `convertFromRaw` by default. Thanks to @anderslemke [#326](https://github.com/draft-js-plugins/draft-js-plugins/pull/326)
- `positionSuggestions` now works by default with non-static parents. Thanks to @Zhouzi
  [#309](https://github.com/draft-js-plugins/draft-js-plugins/pull/309)
  [#206](https://github.com/draft-js-plugins/draft-js-plugins/issues/206)
  [#283](https://github.com/draft-js-plugins/draft-js-plugins/issues/283)
  [#289](https://github.com/draft-js-plugins/draft-js-plugins/issues/289)

## 1.1.1 - 2016-06-05

### Fixed

- Close mention suggestions when suggestions filtered results are empty [#291](https://github.com/draft-js-plugins/draft-js-plugins/pull/291) [#265](https://github.com/draft-js-plugins/draft-js-plugins/issues/265)

## 1.1.0 - 2016-05-27

### Added

- `MentionSuggestions` now accepts `onOpen`and `onClose` props. These callbacks are triggered when the popover has opened or closed.

## 1.0.2 - 2016-05-24

### Fixed

- Fix rendering the MentionSuggestions in IE11 by avoiding to render an Immutable List [#266](https://github.com/draft-js-plugins/draft-js-plugins/issues/266) [#270](https://github.com/draft-js-plugins/draft-js-plugins/pull/270)
- Fix React 0.14.x support by returning `<noscript />` instead of `null` [#267](https://github.com/draft-js-plugins/draft-js-plugins/pull/267)

## 1.0.1 - 2016-04-29

### Fixed

- Make sure there is no autocomplete on tab after deleting a mention [#234](https://github.com/draft-js-plugins/draft-js-plugins/issues/234)

## 1.0.0 - 2016-04-20

### Changed

- Instead of the popover inline it is now exported as `MentionSuggestions` and can be placed anywhere in the DOM. It's recommended to place it right after the Editor. This change was important to avoid selection issues trigged by `contentEditable={false}`.
- `mentions` has been renamed to `suggestions` and now has to be directly provided to the `MentionSuggestions` component as property.
- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)
- Improved the regex and now test for a whitespace in front of the `@` to make sure it doesn't match on normal text like an email [#104](https://github.com/draft-js-plugins/draft-js-plugins/issues/104)
- Moved the option `theme` from an Immutable Map to a JavaScript object. This is more likely to become a standard.
- Improved styling and added animations for the Suggestions overlay as well as the hover on a single suggestion.
- Updated the theme properties.

### Fixed

- Fix using backspace to close the autocomplete suggestions after typing an `@` [#110](https://github.com/draft-js-plugins/draft-js-plugins/issues/110)

### Added

- The config now takes a property `entityMutability`. A developer can choose between 'IMMUTABLE', 'SEGMENTED' & 'MUTABLE'. Read in detail about it [here](https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability).
- The config now takes a property `positionSuggestions`. The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the @. In addition the object contains prevProps, prevState, state & props. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.
- Introduce a new config property: `mentionPrefix`. By default it is an empty String. For Twitter or Slack like mention behaviour you can provide an `@`.

```
const mentionPlugin = createMentionPlugin({ entityMutability: 'IMMUTABLE' });
```

- The `MentionSuggestions` component now takes a property `onSearchChange` which will trigger whenever the search value of changes.
- The module now exports `defaultSuggestionsFilter` for convenience. As first argument it takes the search term as a String. The second argument is the Immutable list of mentions. The function returns the filter list based on substring matches.

## 0.0.4 - 2016-03-29

### Fixed

- Fix issue with showing two menus at the same time [#132](https://github.com/draft-js-plugins/draft-js-plugins/issues/132)
- When typing ahead to 0 results and then back the first item must be still selected. [#149](https://github.com/draft-js-plugins/draft-js-plugins/pull/149)

## 0.0.3 - 2016-03-25

### Released the first working version of DraftJS Mention Plugin

It's not recommended to use the version 0.0.0 - 0.0.2
