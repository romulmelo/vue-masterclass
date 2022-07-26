// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppHeader from "@/components/organisms/AppHeader.vue"

describe("AppHeader", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppHeader)
  })

  it("should have a logo", () => {
    expect(wrapper.findComponent({ name: "AppLogo" }).exists()).toBe(true)
  })

  it("should have a navigation list", () => {
    expect(wrapper.findComponent({ name: "AppNavList" }).exists()).toBe(true)
  })
})
