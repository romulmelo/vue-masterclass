import { mount } from "@vue/test-utils"

import AppNav from "@/components/molecules/AppNav.vue"

describe("AppNav", () => {
  it("should display menu items for navigation", () => {
    const wrapper = mount(AppNav)
    const navigationMenuItems = wrapper.findAll("[data-test='nav-list-item']")
    const navigationMenuText = navigationMenuItems.map((item) => item.text())

    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students"
    ])
  })
})
