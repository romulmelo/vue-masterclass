import { mount } from "@vue/test-utils"

import AppDrawer from "@/components/molecules/AppDrawer.vue"

describe("AppDrawer", () => {
  const open = false
  const factory = (props) => mount(AppDrawer, { props: open, ...props })

  it("should display a logo", () => {
    const wrapper = factory()

    expect(wrapper.findComponent({ name: "AppLogo" }).exists()).toBe(true)
  })

  it("should display menu items for navigation", () => {
    const wrapper = factory()

    const navigationMenuItems = wrapper.findAll('[data-test="nav-list-item"]')
    const navigationMenuText = navigationMenuItems.map((link) => link.text())

    expect(navigationMenuItems.length).toBe(5)
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students"
    ])
  })

  it("should close drawer when clicked outside", async () => {
    const wrapper = factory({ open: true })

    const backdrop = wrapper.find('[data-test="drawer-backdrop]')

    await backdrop.trigger("click")

    expect(wrapper.emitted("update:open")[0][0]).toBe(false)
  })
})
