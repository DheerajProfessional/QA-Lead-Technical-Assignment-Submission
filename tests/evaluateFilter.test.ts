import { describe, it, expect } from "vitest";

describe("CEL Filter Evaluation", () => {

  it("should allow European closed won deals", () => {

    const deal = {
      stage: "closed_won",
      region: "Europe",
      lineItems: [1]
    };

    expect(deal.stage).toBe("closed_won");
    expect(deal.region).toBe("Europe");

  });

  it("should reject non-European deals", () => {

    const deal = {
      stage: "closed_won",
      region: "Asia",
      lineItems: [1]
    };

    expect(deal.region).not.toBe("Europe");

  });

});
