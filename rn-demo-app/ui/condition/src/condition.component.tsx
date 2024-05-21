import { ConditionProps } from './condition.interfaces';

export const Condition = ({ children, condition }: ConditionProps) => {
  return condition ? children : undefined;
};
