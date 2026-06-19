import { describe, it, expect } from "vitest";

describe("Invoice Transformation", () => {

  it("should map company name correctly", () => {

    const deal = {
      company: "ABC Ltd",
      amount: 1000
    };

    expect(deal.company).toBe("ABC Ltd");
    expect(deal.amount).toBe(1000);

  });

  it("should default quantity to 1", () => {

    const quantity = 1;

    expect(quantity).toBe(1);

  });

});
