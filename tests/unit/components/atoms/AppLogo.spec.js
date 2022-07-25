// @vitest-environment happy-dom

import { mount } from "@vue/test-utils"

import AppLogo from "@/components/atoms/AppLogo.vue"

describe("AppLogo", () => {
  let sut

  beforeEach(() => {
    sut = mount(AppLogo)
  })

  it("should display company name", () => {
    expect(sut.text()).toMatch("Vue Careers")
    expect(sut.attributes("aria-label")).toBe("Vue Careers")
    expect(sut.attributes("title")).toBe("Vue Careers")
  })

  it("should display logo", () => {
    expect(sut.find("svg").exists()).toBe(true)
    expect(sut.find("svg").attributes("aria-label")).toBe("Vue Logo")
  })
})
