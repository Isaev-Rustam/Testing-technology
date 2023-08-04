import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import Content from "./content";

describe("<Content />", () => {
  it("it should mount", () => {
    render(<Content children={<div />} />);
  });
});
