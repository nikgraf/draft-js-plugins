import React, { ReactElement, useEffect } from 'react';
import styles from './Mention.module.css';
import Heading from '../../../components/Heading/Heading';
import Container from '../../../components/Container/Container';
import Separator from '../../../components/Separator/Separator';
import Menu from '../../../components/Menu/Menu';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import InlineCode from '../../../components/InlineCode/InlineCode';
import ExternalLink from '../../../components/Link/Link';
import Prism from 'prismjs';

import simpleExampleCode from '!!raw-loader!./SimpleMentionEditor/SimpleMentionEditor';
import simpleExampleMentionsCode from '!!raw-loader!./SimpleMentionEditor/Mentions';
import simpleExampleEditorStylesCode from '!!raw-loader!./SimpleMentionEditor/SimpleMentionEditor.module.css';
import customExampleCode from '!!raw-loader!./CustomMentionEditor/CustomMentionEditor';
import customExampleMentionsCode from '!!raw-loader!./CustomMentionEditor/Mentions';
import customExampleEditorStylesCode from '!!raw-loader!./CustomMentionEditor/CustomMentionEditor.module.css';
import customExampleMentionsStylesCode from '!!raw-loader!./CustomMentionEditor/MentionsStyles.module.css';
import remoteExampleCode from '!!raw-loader!./RemoteMentionEditor/RemoteMentionEditor';
import remoteExampleEditorStylesCode from '!!raw-loader!./RemoteMentionEditor/RemoteMentionEditor.module.css';
import customComponentExampleCode from '!!raw-loader!./CustomComponentMentionEditor/CustomComponentMentionEditor';
import customComponentExampleStylesCode from '!!raw-loader!./CustomComponentMentionEditor/CustomComponentMentionEditor.module.css';
import webpackConfig from '!!raw-loader!./webpackConfig';
import webpackImport from '!!raw-loader!./webpackImport';

import SocialBar from '../../../components/SocialBar/SocialBar';
import Footer from '../../../components/Footer/Footer';
import SimpleMentionEditor from './SimpleMentionEditor/SimpleMentionEditor';
import CustomMentionEditor from './CustomMentionEditor/CustomMentionEditor';
import RemoteMentionEditor from './RemoteMentionEditor/RemoteMentionEditor';
import CustomComponentMentionEditor from './CustomComponentMentionEditor/CustomComponentMentionEditor';

export default function Mention(): ReactElement {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div>
      <Menu />
      <Separator />
      <Container>
        <Heading level={2}>Mention</Heading>
        <p>
          Mentions for everyone! This plugin allows the user to choose an entry
          from a list. After selection an entry the search text will be replace
          with the selected entity. The list of suggestions mentions needs to
          contain at least a name to display. If desired a link and/or an avatar
          image can be provided.
        </p>
        <Heading level={3}>Escape Behaviour</Heading>
        <p>
          While the suggestion popover is open, the user can close it by
          pressing ESC. This will be stored for as long as the the selection
          stays inside the word that triggered the search. After the selection
          left this word once the escape behaviour will be reset. The
          suggestions will appear again once the user selects the word that that
          triggered the selection.
        </p>
        <Heading level={3}>Supported Environment</Heading>
        <ul className={styles.list}>
          <li className={styles.listEntry}>Desktop: Yes</li>
          <li className={styles.listEntry}>Mobile: Yes</li>
          <li className={styles.listEntry}>Screen-reader: Yes</li>
        </ul>
      </Container>
      <AlternateContainer>
        <Heading level={2}>Getting Started</Heading>
        <Code code="npm install @draft-js-plugins/editor" />
        <Code code="npm install @draft-js-plugins/mention" />
        <Code code="Please checkout the 'Simple Example' further down the page." />
        <Heading level={3}>Importing the default styles</Heading>
        <p>
          The plugin ships with a default styling available at this location in
          the installed package: &nbsp;
          <InlineCode
            code={'node_modules/@draft-js-plugins/mention/lib/plugin.css'}
          />
        </p>
        <Heading level={4}>Webpack Usage</Heading>
        <ul className={styles.list}>
          <li className={styles.listEntry}>
            1. Install Webpack loaders: &nbsp;
            <InlineCode code={'npm i style-loader css-loader --save-dev'} />
          </li>
          <li className={styles.listEntry}>
            2. Add the below section to Webpack config (if your config already
            has a loaders array, simply add the below loader object to your
            existing list.
            <Code code={webpackConfig} className={styles.guideCodeBlock} />
          </li>
          <li className={styles.listEntry}>
            3. Add the below import line to your component to tell Webpack to
            inject the style to your component.
            <Code code={webpackImport} className={styles.guideCodeBlock} />
          </li>
          <li className={styles.listEntry}>4. Restart Webpack.</li>
        </ul>
        <Heading level={4}>Browserify Usage</Heading>
        <p>
          Please help, by submiting a Pull Request to the{' '}
          <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Mention/index.js">
            documentation
          </ExternalLink>
          .
        </p>
      </AlternateContainer>
      <Container>
        <Heading level={2}>Configuration Parameters</Heading>
        <div className={styles.param}>
          <span className={styles.paramName}>theme</span>
          <span>Object of CSS classes with the following keys.</span>
          <div className={styles.subParams}>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>mention:</span>
              CSS class for mention text.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>mentionSuggestions:</span>
              CSS class for suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntry:
              </span>
              CSS class for an entry in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryFocused:
              </span>
              CSS class for the focused entry in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryText:
              </span>
              CSS class for an entry’s text in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryAvatar:
              </span>
              CSS class for an entry’s avatar image in the suggestions
              component.
            </div>
          </div>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>positionSuggestions</span>
          <span>
            The function can be used to manipulate the position of the popover
            containing the suggestions. It receives one object as arguments
            containing the visible rectangle surrounding the decorated search
            string including the @. In addition the object contains prevProps
            and props. An object should be returned which can contain all sorts
            of styles. The defined properties will be applied as inline-styles.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>entityMutability</span>
          <span>
            Can be one of: &quot;IMMUTABLE&quot;, &quot;SEGMENTED&quot; or
            &quot;MUTABLE&quot;. Read in detail about it
            <ExternalLink href="https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability">
              &nbsp;here
            </ExternalLink>
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionPrefix</span>
          <span>
            By default it is an empty String. For Twitter or Slack like mention
            behaviour you can provide an `@`
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionTrigger</span>
          <span>
            Allows you to provide a custom character to change when the search
            is triggered. By default it is set to `@`. By default typing `@`
            will trigger the search for mentions. Note: the implementation does
            not support a multi-character mentionTrigger.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionRegExp</span>
          <span>
            Allows you to overwrite the regular expression for initiating the
            dropdown. By default this supports any alphanumeric character as
            well as Chinese, Japanese & Korean characters. We are happy to
            accept pull requests to extend the default mentionRegExp as well.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>supportWhitespace</span>
          <span>
            Allows you to support a whitespace while typing a search option,
            useful for searching first and last names. By default this is set to
            `false`
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionComponent</span>
          <span>
            If provided the passed component is used to render a Mention. It
            receives the following props: entityKey, mention, className &
            decoratedText
          </span>
        </div>
        <Heading level={3}>MentionSuggestions</Heading>
        <div>
          The MentionSuggestions component is part of the plugin and should
          placed somewhere in the JSX after the Editor. It takes the following
          props:
          <div className={styles.param}>
            <span className={styles.paramName}>open</span>
            <span>Controlled state of mention popup.</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onOpenChange</span>
            <span>
              A callback which is triggered whenever the suggestions popover
              should be opened or closed.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>suggestions</span>
            <span>The list of suggestions to be shown.</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onSearchChange</span>
            <span>
              A callback which is triggered whenever the search term changes.
              The first argument is an object which constains the search term in
              the property value.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>entryComponent</span>
            <span>
              Component to be used as the template for each of the suggestions
              entry.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onAddMention</span>
            <span>
              A callback which is triggered whenever the mention is about to be
              added. The first argument of this callback will contain the
              mention entry.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>popoverComponent</span>
            <span>
              Component to be used as the template for the popover (the parent
              of entryComponent). Defaults to a div.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>
              mentionSuggestionsComponent
            </span>
            <span>
              Component to be used to render the suggestions dropdown. It must
              implement the same interface like{' '}
              <InlineCode code="MentionSuggestions" />. Defaults to{' '}
              <InlineCode code="MentionSuggestions" />.
            </span>
          </div>
          <div className={styles.param}>
            <span>
              Additional properties are passed to the{' '}
              <InlineCode code="popoverComponent" />
            </span>
          </div>
        </div>
        <Heading level={3}>Additional Exports</Heading>
        <div>
          In addition to the plugin the module exports
          `defaultSuggestionsFilter`. As first argument it takes the search term
          as a String. The second argument is an array of mentions. The function
          returns the filter list based on substring matches.
          <Code code="import { defaultSuggestionsFilter } from '@draft-js-plugins/mention';" />
        </div>
      </Container>
      <Container>
        <Heading level={2}>Simple Example</Heading>
        <SimpleMentionEditor />
        <Code code={simpleExampleCode} name="SimpleMentionEditor.tsx" />
        <Code code={simpleExampleMentionsCode} name="Mentions.ts" />
        <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
      </Container>
      <Container>
        <Heading level={2}>Custom Themed Mention Example</Heading>
        <CustomMentionEditor />
        <Code code={customExampleCode} name="CustomMentionEditor.ts" />
        <Code
          code={customExampleMentionsStylesCode}
          name="mentionsStyles.css"
        />
        <Code code={customExampleMentionsCode} name="Mentions.ts" />
        <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
      </Container>
      <Container>
        <Heading level={2}>Remote Data Mention Example</Heading>
        <RemoteMentionEditor />
        <Code code={remoteExampleCode} name="RemoteMentionEditor.tsx" />
        <Code code={remoteExampleEditorStylesCode} name="editorStyles.css" />
      </Container>
      <Container>
        <Heading level={2}>Custom Mention Component Example</Heading>
        <CustomComponentMentionEditor />
        <Code
          code={customComponentExampleCode}
          name="CustomComponentMentionEditor.tsx"
        />
        <Code code={customComponentExampleStylesCode} name="editorStyles.css" />
      </Container>
      <SocialBar />
      <Footer />
    </div>
  );
}