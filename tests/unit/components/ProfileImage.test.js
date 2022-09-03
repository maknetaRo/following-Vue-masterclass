import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage";

describe("PrfileImage", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
