import React, { Component } from 'react';
import Prism from 'prismjs';

import simpleExampleCode from '!!raw-loader!./SimpleImageEditor';
import simpleExampleEditorStylesCode from '!!raw-loader!./SimpleImageEditor/editorStyles.module.css';
import customExampleCode from '!!raw-loader!./CustomImageEditor';
import customExampleEditorStylesCode from '!!raw-loader!./CustomImageEditor/editorStyles.module.css';
import addImageExampleCode from '!!raw-loader!./AddImageEditor';
import addImageExampleEditorStylesCode from '!!raw-loader!./AddImageEditor/editorStyles.module.css';
import gettingStarted from '!!raw-loader!./gettingStarted';
import webpackConfig from '!!raw-loader!./webpackConfig';
import webpackImport from '!!raw-loader!./webpackImport';

import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
import SimpleImageEditor from './SimpleImageEditor';
import CustomImageEditor from './CustomImageEditor';
import AddImageEditor from './AddImageEditor';
import ExternalLink from '../../../components/Link/Link';
import InlineCode from '../../../components/InlineCode/InlineCode';
import SocialBar from '../../../components/SocialBar/SocialBar';
import Menu from '../../../components/Menu/Menu';
import Separator from '../../../components/Separator/Separator';

export default class App extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <Separator />
        <Container>
          <Heading level={2}>Image</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: Yes</li>
            <li className={styles.listEntry}>Screen-reader: No</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/image" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/image/lib/plugin.css'}
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
            <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js">
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
                <span className={styles.subParamName}>image:</span> CSS class
                for the image.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImage:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImagePopover:</span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageClosedPopover:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageBottomGradient:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImageButton:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImagePressedButton:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImageInput:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageConfirmButton:
                </span>{' '}
                CSS class.
              </div>
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>imageComponent</span>
            <span>Pass in a custom image component to be rendered.</span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>addImageButtonContent</span>
            <span>
              Content of button which opens add image popup. (Default content is
              📷)
            </span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleImageEditor />
          <Code code={simpleExampleCode} name="SimpleImageEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>
            Alignment + Resize + Focus + Drag&apos;n&apos;Drop +
            Drag&apos;n&apos;Drop Upload Example
          </Heading>
          <CustomImageEditor />
          <Code code={customExampleCode} name="AddImageEditor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Add Image Button Example</Heading>
          <AddImageEditor />
          <Code code={addImageExampleCode} name="AddImageEditor.js" />
          <Code
            code={addImageExampleEditorStylesCode}
            name="editorStyles.css"
          />
        </Container>
        <SocialBar />
      </div>
    );
  }
}