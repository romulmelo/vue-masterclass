// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppNav from "@/components/molecules/AppNav.vue"
import AppLogo from "@/components/atoms/AppLogo.vue"

describe("AppNav", () => {
  it("should have a logo", () => {
    const wrapper = mount(AppNav)

    expect(wrapper.findComponent(AppLogo).exists()).toBe(true)
  })

  it("should display menu items for navigation", () => {
    const wrapper = mount(AppNav)
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    )
    const navigationMenuText = navigationMenuItems.map((item) => item.text())

    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students"
    ])
  })

  it("should display menu hambuguer", () => {
    const wrapper = mount(AppNav)
    const hamburguerMenu = wrapper.find("[data-test='main-hamburguer-menu']")

    expect(hamburguerMenu.exists()).toBe(true)
    expect(hamburguerMenu.attributes("aria-label")).toBe("Navigation drawer")
    expect(hamburguerMenu.attributes("aria-controls")).toBe(
      "vc-header__drawer vc-header__drawer-backdrop"
    )
    expect(hamburguerMenu.find("svg").exists()).toBe(true)
    expect(hamburguerMenu.find("svg").attributes("aria-label")).toBe(
      "Open menu"
    )
  })
})
