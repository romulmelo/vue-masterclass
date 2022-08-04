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
      const wrapper = mount(AppHeader, {
        data: () => ({
          isLoggedIn: false
        })
      })
      const loginButtonComponent = wrapper.findComponent({ name: "AppButton" })
      const avatarImageComponent = wrapper.findComponent({ name: "AppAvatar" })

      expect(loginButtonComponent.exists()).toBe(true)
      expect(avatarImageComponent.exists()).toBe(false)
    })
  })

  describe("when user is logged in", () => {
    it("should display user profile picture", () => {
      const wrapper = mount(AppHeader, {
        data: () => ({
          isLoggedIn: true
        }),
        global: {
          stubs: {
            AppAvatar: true
          }
        }
      })

      const loginButtonComponent = wrapper.findComponent({ name: "AppButton" })
      const avatarImageComponent = wrapper.findComponent({ name: "AppAvatar" })

      expect(loginButtonComponent.exists()).toBe(false)
      expect(avatarImageComponent.exists()).toBe(true)
    })
  })
})
