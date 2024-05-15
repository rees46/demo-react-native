import { useState } from "react";
import { UseFocusType } from "./use-focus.interfaces";

export const useFocus: UseFocusType = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  const onFocus = () => {
    setSearchFocused(true);
  };

  const onBlur = () => {
    setSearchFocused(false);
  };

  return {
    focus: searchFocused,
    onFocus,
    onBlur,
  };
};
