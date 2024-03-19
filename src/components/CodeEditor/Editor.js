"use client"
import { useState } from "react";
import AceEditor from "react-ace";
import "./mode-solidity"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-github_dark"

function SolidityEditor({contractCode}) {
  return (
    <AceEditor
      mode="solidity"
      theme="github_dark"
      // onChange={handleChange}
      name="solidity-editor"
      fontSize={16}
      editorProps={{ $blockScrolling: false }}
      highlightActiveLine={false}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showPrintMargin:false
      }}
      value={contractCode}
      height="100%"
      width=""
    />
  );
}

export default SolidityEditor;