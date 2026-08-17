import {
  canCreateActionForFinding,
  validateOperationsActionTransition,
  validateOperationsFindingTransition,
  validateOperationsVisitTransition,
} from "../src/lib/domain/operations-adapter";

export type AdapterContractResult = {
  passed: boolean;
  failures: string[];
};

/**
 * Runtime contract checks for the adapter boundary. These deliberately use
 * only domain functions and contain no database or production-data access.
 */
export function verifyOperationsAdapterContract(): AdapterContractResult {
  const failures: string[] = [];

  const expect = (condition: boolean, message: string) => {
    if (!condition) failures.push(message);
  };

  expect(
    validateOperationsVisitTransition("scheduled", "in_progress").allowed,
    "scheduled -> in_progress must be accepted",
  );
  expect(
    validateOperationsVisitTransition("assigned", "in_progress").allowed,
    "assigned alias must behave like scheduled",
  );
  expect(
    !validateOperationsVisitTransition("cancelled", "scheduled").allowed,
    "cancelled -> scheduled must remain rejected",
  );

  expect(
    validateOperationsFindingTransition("open", "acknowledged").allowed,
    "open -> acknowledged must be accepted at the application boundary",
  );
  expect(
    validateOperationsFindingTransition("acknowledged", "actioned").allowed,
    "acknowledged -> actioned must be accepted",
  );
  expect(
    !validateOperationsFindingTransition("verified", "closed").allowed,
    "verified -> closed must remain rejected until canonical approval",
  );

  expect(
    validateOperationsActionTransition("open", "assigned").allowed,
    "open -> assigned must be accepted",
  );
  expect(
    validateOperationsActionTransition("verified", "closed").allowed,
    "verified -> closed action transition must be accepted",
  );
  expect(
    !validateOperationsActionTransition("closed", "open").allowed,
    "closed -> open action transition must be rejected",
  );

  expect(canCreateActionForFinding("open"), "open finding must be action-eligible");
  expect(canCreateActionForFinding("acknowledged"), "acknowledged finding must be action-eligible");
  expect(!canCreateActionForFinding("verified"), "verified finding must not create a new action");
  expect(!canCreateActionForFinding("closed"), "closed finding must not create a new action");

  return { passed: failures.length === 0, failures };
}
