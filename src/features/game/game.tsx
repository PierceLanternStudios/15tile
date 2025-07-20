import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, selectValue } from "./gameSlice";

export function Counter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectValue);

  return (
    <div>
      Value: {value}
      <button onClick={() => dispatch(increment())}>Increment Value</button>
    </div>
  );
}
