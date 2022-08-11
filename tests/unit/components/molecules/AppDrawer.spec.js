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

  it("should display a list of links", () => {
    const links = wrapper.findAll('[data-test="drawer-link"]')
    const linkText = links.map((link) => link.text())

    expect(links.length).toBe(5)
    expect(linkText).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students"
    ])
  })

  it("should close drawer when clicked outside", async () => {
    const wrapper = mount(AppDrawer, {
      props: {
        open: true
      }
    })
    const backdrop = wrapper.find('[data-test="drawer-backdrop]')

    await backdrop.trigger("click")

    expect(wrapper.emitted("update:open")[0][0]).toBe(false)
  })
})
