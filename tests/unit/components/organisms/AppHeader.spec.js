// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppHeader from "@/components/organisms/AppHeader.vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppNavList from "@/components/molecules/AppNavList.vue"

describe("AppNav", () => {
  it("should have a logo", () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.findComponent(AppLogo).exists()).toBe(true)
  })

  it("should have a navigation list", () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.findComponent(AppNavList).exists()).toBe(true)
  })

  it("should display menu hambuguer", () => {
    const wrapper = mount(AppHeader)
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
