import { useEffect } from "react";
import hotkeys from "hotkeys-js";
export default callback => {
  useEffect(() => {
    hotkeys("enter", event => {
      callback();
    });
    return () => {
      hotkeys.unbind("enter");
    };
  });
};
