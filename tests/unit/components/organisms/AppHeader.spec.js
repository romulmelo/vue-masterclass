// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppHeader from "@/components/organisms/AppHeader.vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppNavList from "@/components/molecules/AppNavList.vue"

describe("AppNav", () => {
  let sut

  beforeEach(() => {
    sut = mount(AppHeader)
  })

  it("should have a logo", () => {
    expect(sut.findComponent(AppLogo).exists()).toBe(true)
  })

  it("should have a navigation list", () => {
    expect(sut.findComponent(AppNavList).exists()).toBe(true)
  })

  it("should display menu hambuguer", () => {
    const hamburguerMenuButton = sut.find("[data-test='main-hamburguer-menu']")
    const hamburguerMenuButtonIcon = hamburguerMenuButton.find("svg")

    expect(hamburguerMenuButton.exists()).toBe(true)
    expect(hamburguerMenuButton.attributes("aria-label")).toBe(
      "Navigation drawer"
    )
    expect(hamburguerMenuButtonIcon.exists()).toBe(true)
    expect(hamburguerMenuButtonIcon.attributes("aria-label")).toBe("Open menu")
  })
})
