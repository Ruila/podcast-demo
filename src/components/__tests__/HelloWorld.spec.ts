import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Channel from "../ChannelComponent.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Channel, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
