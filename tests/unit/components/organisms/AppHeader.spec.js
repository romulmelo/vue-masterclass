// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppHeader from "@/components/organisms/AppHeader.vue"

describe("AppHeader", () => {
  let sut

  beforeEach(() => {
    sut = mount(AppHeader)
  })

  it("should have a logo", () => {
    expect(sut.findComponent({ name: "AppLogo" }).exists()).toBe(true)
  })

  it("should have a navigation list", () => {
    expect(sut.findComponent({ name: "AppNavList" }).exists()).toBe(true)
  })
})
