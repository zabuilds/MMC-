import {
  type TransitionResult,
} from "./transitions";
import {
  validateOperationsActionTransition,
  type OperationsActionStatus,
} from "./operations-adapter";

export function validateActionTransition(
  current: OperationsActionStatus,
  next: OperationsActionStatus,
): TransitionResult {
  return validateOperationsActionTransition(current, next);
}
