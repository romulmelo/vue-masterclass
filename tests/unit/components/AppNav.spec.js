// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppNav from "@/components/molecules/AppNav.vue"

describe("AppNav", () => {
  it("should display company name", () => {
    const wrapper = mount(AppNav)

    expect(wrapper.text()).toMatch("Vue Careers")
  })
})
