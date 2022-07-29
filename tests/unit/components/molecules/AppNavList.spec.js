// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppNavList from "@/components/molecules/AppNavList.vue"

describe("AppNavList", () => {
  it("should display menu items for navigation", () => {
    const wrapper = mount(AppNavList)
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

  it("should change display to vertical", () => {
    const wrapper = mount(AppNavList, {
      props: {
        isVertical: true
      }
    })

    expect(wrapper.classes()).toContain("vc-nav--vertical")
  })
})
