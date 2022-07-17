import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Dev Careers");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Dev Corp",
      "Now we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginBtn = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginBtn.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  describe("when user is log in", () => {
    it("shows user's profile image", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginBtn = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginBtn.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
