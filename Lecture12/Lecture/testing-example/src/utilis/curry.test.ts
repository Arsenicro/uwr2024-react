import { expect, test, vi } from "vitest";
import { curry } from "./curry";

test("Test curry", () => {
  // Arrange
  function add(a: number, b: number) {
    return a + b;
  }

  const addMock = vi.fn(add);

  // Act
  const curriedAdd = curry(addMock);
  const result = curriedAdd(1)(2);

  // Assert
  expect(result).toBe(3);
  expect(addMock).toHaveBeenCalledWith(1, 2);
});
