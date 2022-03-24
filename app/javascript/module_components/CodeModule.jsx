import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
// import styles from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import { styles } from './CodeModule-styles'

SyntaxHighlighter.registerLanguage('javascript', js)

import React, { PureComponent } from 'react'

export default class CodeModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const dynamicPart = 'test'

    const codeTest = `import PropTypes from "prop-types";
    import React, { PureComponent } from "react";

    export default class Button extends PureComponent {
      constructor(props) {
        super(props);
      }

      render() {
        const { text, handleClick } = this.props;

        ${dynamicPart}

        return (
          <div className="Button" onClick={handleClick}>
            {text}
          </div>
        );
      }
    }

    Button.propTypes = {
      text: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    };`

    console.log('rendered')

    return (
      <div className="CodeModule">
        <h1>Пример кода</h1>

        <SyntaxHighlighter language="javascript" style={styles}>
          {codeTest}
        </SyntaxHighlighter>
      </div>
    )
  }
}
