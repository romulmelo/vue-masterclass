// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppLogo from "@/components/atoms/AppLogo.vue"

describe("AppLogo", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppLogo)
  })

  it("should display company name", () => {
    expect(wrapper.text()).toMatch("Vue Careers")
    expect(wrapper.attributes("aria-label")).toBe("Vue Careers")
    expect(wrapper.attributes("title")).toBe("Vue Careers")
  })

  it("should display logo", () => {
    expect(wrapper.find("svg").exists()).toBe(true)
    expect(wrapper.find("svg").attributes("aria-label")).toBe("Vue Logo")
  })
})
