import { mount } from "@vue/test-utils"

import AppDrawer from "@/components/molecules/AppDrawer.vue"

describe("AppDrawer", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppDrawer)
  })

  it("should display a logo", () => {
    expect(wrapper.findComponent({ name: "AppLogo" }).exists()).toBe(true)
  })
})
