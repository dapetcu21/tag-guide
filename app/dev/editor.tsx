import MDEditor from "@uiw/react-md-editor";
import classNames from "classnames";
import { use, useMemo, useState } from "react";
import { MdDownload } from "react-icons/md";
import { useParams } from "react-router";

import "~/quests/QuestMarkdown.css";

function getPaths(
  strings: any,
  prefix: Array<string>,
  paths: Array<Array<string>>,
) {
  if (!strings) return;

  if (typeof strings === "string") {
    paths.push(prefix);
    return;
  }

  if (typeof strings !== "object") return;

  for (const key of Object.keys(strings)) {
    getPaths(strings[key], [...prefix, key], paths);
  }
}

function setDeep(obj: any, path: Array<string>, value: string): any {
  if (path.length === 0) return value;

  const [key, ...rest] = path;
  return { ...obj, [key]: setDeep(obj[key] ?? {}, rest, value) };
}

export default function Editor() {
  const { lang } = useParams<{ lang: string }>();
  const initialStrings = use(
    useMemo(() => import(`../locales/${lang}/translation.json`), [lang]),
  ).default;
  const [strings, setStrings] = useState(initialStrings);

  const paths = useMemo(() => {
    const paths: Array<Array<string>> = [];
    getPaths(strings, [], paths);
    return paths;
  }, [strings]);

  const [currentPath, setCurrentPath] = useState(paths[0] ?? []);

  const [filter, setFilter] = useState("");

  const currentString = currentPath.reduce(
    (obj, element) => obj?.[element],
    strings,
  );

  const currentPathString = currentPath.join(".");

  const downloadJson = useMemo(
    () => () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(
        new Blob([JSON.stringify(strings, null, 2)]),
      );
      a.download = `translation.json`;
      a.click();
      a.remove();
    },
    [strings],
  );

  return (
    <div className="flex flex-row">
      <div className="flex flex-col h-screen flex-1 max-w-[30vw]">
        <div>
          <span>
            Filter:{" "}
            <input
              type="text"
              className="border-2 border-black"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </span>
          <button type="button" onClick={downloadJson}>
            <MdDownload />
          </button>
        </div>
        <div className="flex flex-col flex-1 overflow-auto">
          {paths.map((path) => {
            const pathString = path.join(".");
            if (pathString.indexOf(filter) === -1) return null;

            return (
              <button
                key={pathString}
                type="button"
                onClick={() => setCurrentPath(path)}
                className={classNames("text-left", {
                  "text-orange": pathString === currentPathString,
                })}
              >
                {pathString}
              </button>
            );
          })}
        </div>
      </div>
      {typeof currentString === "string" && (
        <MDEditor
          className="min-h-screen flex-2"
          value={currentString}
          onChange={(s) => {
            setStrings(setDeep(strings, currentPath, s ?? ""));
          }}
        />
      )}
    </div>
  );
}
