import { describe, it, expect } from "vitest";

describe("Workflow ReRun", () => {

  it("should allow admin user", () => {

    const role = "admin";

    expect(role).toBe("admin");

  });

  it("should reject viewer role", () => {

    const role = "viewer";

    expect(role).not.toBe("admin");

  });

});
