import React, { useRef, useEffect } from "react";
import Input from "components/Input";
import Card from "components/Card.js";

const CardInput = props => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Card
      img={props.face}
      body={
        <>
          {props.displayName && (
            <div>
              Name:{" "}
              <Input
                value={props.nameValue}
                onChange={props.nameHandleChange}
                ref={inputRef}
              />
            </div>
          )}
          {props.displayNum && (
            <div>
              Num:{" "}
              <Input
                value={props.numValue}
                onChange={props.numHandleChange}
                type="tel"
              />
            </div>
          )}
        </>
      }
    />
  );
};

export default props => CardInput(props);
