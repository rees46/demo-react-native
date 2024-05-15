interface UseFocusReturnedType {
  focus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export type UseFocusType = () => UseFocusReturnedType;
