import { mount } from "@vue/test-utils"

import { expect } from "vitest"

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
    expect(wrapper.findComponent({ name: "AppNav" }).exists()).toBe(true)
  })

  describe("when user is logged out", () => {
    it("should prompt user to log in", () => {
      const loginButtonComponent = wrapper.findComponent({ name: "AppButton" })

      expect(loginButtonComponent.exists()).toBe(true)
    })
  })

  describe("when user is logged in", () => {
    it("should display user profile picture", async () => {
      const wrapper = mount(AppHeader, {
        global: {
          stubs: {
            AppAvatar: true
          }
        }
      })

      let avatarImageComponent = wrapper.findComponent({ name: "AppAvatar" })

      expect(avatarImageComponent.exists()).toBe(false)

      const loginButtonComponent = wrapper.findComponent({ name: "AppButton" })

      await loginButtonComponent.trigger("click")

      avatarImageComponent = wrapper.findComponent({ name: "AppAvatar" })

      expect(avatarImageComponent.exists()).toBe(true)
    })
  })
})
