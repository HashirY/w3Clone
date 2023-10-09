import { useEffect, useState } from "react";
import Button from "./Button";
import Editor from "./Editor";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
          `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className="p-[1rem] text-white">
      <Link to={"/"}>
        <button className="w-[200px] h-auto p-2 bg-black text-white rounded-xl">
          Exit
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold pb-4">Welcome to the editor</p>
        <div className="flex">
          <Button
            title="HTML"
            onClick={() => {
              onTabClick("html");
            }}
          />
          <Button
            title="CSS"
            onClick={() => {
              onTabClick("css");
            }}
          />
          <Button
            title="JavaScript"
            onClick={() => {
              onTabClick("js");
            }}
          />
        </div>
      </div>
      <div className="pt-[0.4%]">
        {openedEditor === "html" ? (
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            setEditorState={setCss}
          />
        ) : (
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            setEditorState={setJs}
          />
        )}
      </div>
      <div>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
