import { describe, it, expect } from "vitest";
import sinon from "sinon";
import { mount } from "@vue/test-utils";
import Channel from "../channel/ChannelComponent.vue";
import { createTestingPinia } from "@pinia/testing";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Channel, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: sinon.spy,
          }),
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
