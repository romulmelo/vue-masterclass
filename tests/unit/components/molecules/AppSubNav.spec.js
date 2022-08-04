import { mount } from "@vue/test-utils"

import AppSubNav from "@/components/molecules/AppSubnav.vue"

describe("AppSubNav", () => {
  it("should display items for navigation", () => {
    const wrapper = mount(AppSubNav)
    const navigationMenuItem = wrapper.findAll('[data-test="subnav-list-item"]')
    const navigationMenuLink = navigationMenuItem.map((item) => item.find("a"))
    const navigationMenuText = navigationMenuItem.map((item) => item.text())

    expect(navigationMenuItem.length).toBe(2)
    expect(navigationMenuText).toEqual(["Saved Jobs", "Jobs Alert"])
    expect(
      navigationMenuLink.map((link) => link.attributes("aria-label"))
    ).toEqual(["Saved Jobs", "Jobs Alert"])
  })

  describe("when user is on job page", () => {
    it("should display job count", () => {
      const wrapper = mount(AppSubNav, {
        data: () => ({ onJobResultsPage: true })
      })
      const jobCount = wrapper.find('[data-test="subnav-job-count"]')

      expect(jobCount.exists()).toBe(true)
    })
  })

  describe("when user is not on job page", () => {
    it("should display a link to job results page", () => {
      const wrapper = mount(AppSubNav)
      const jobMessage = wrapper.find('[data-test="subnav-job-message"]')

      expect(jobMessage.text()).toMatch("Find a job at Google")
    })
  })
})
