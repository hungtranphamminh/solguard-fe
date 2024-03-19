"use client"
import { useState } from "react";
import AceEditor from "react-ace";
import "./mode-solidity"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-github_dark"

function ErrorDisplay({errorCode}) {
    const [code, setCode] = useState(errorCode)
    function handleChange(value) {
        console.log("Code:", value);
        setCode()
    }

  return (
    <AceEditor
      mode="solidity"
      theme="github_dark"
      onChange={handleChange}
      fontSize={16}
      name="solidity-editor"
      editorProps={{ $blockScrolling: false }}
      highlightActiveLine={false}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showPrintMargin:false,
        showLineNumbers: false,
      }}
      value={code}
      height="30px"
      width="400px"
    />
  );
}

export default ErrorDisplay;