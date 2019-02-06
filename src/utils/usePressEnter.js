import { useEffect } from "react";

function usePressEnter(func) {
  useEffect(() => {
    document.onkeypress = event => {
      if (event.keyCode === 13) {
        func(event);
      }
    };

    return () => {
      console.log("test");
      document.onkeypress = null;
    };
  });
}

export default usePressEnter;
