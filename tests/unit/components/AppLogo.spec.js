// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppLogo from "@/components/atoms/AppLogo.vue"

describe("AppLogo", () => {
  it("should display company name", () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.text()).toMatch("Vue Careers")
    expect(wrapper.attributes("aria-label")).toBe("Vue Careers")
  })

  it("should have a title attribute with company name", () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.attributes("title")).toBe("Vue Careers")
  })
})
