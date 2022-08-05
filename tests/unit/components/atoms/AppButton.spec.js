import { mount } from "@vue/test-utils"

import AppButton from "@/components/atoms/AppButton.vue"

describe("AppButton", () => {
  it("should display a text", () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: "Button"
      }
    })

    expect(wrapper.text()).toMatch("Button")
  })
})
