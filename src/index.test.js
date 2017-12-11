import { mount } from 'vue-test-utils'
import SimplePortal from './'

test('it works', () => {
  const wrapper = mount(SimplePortal)
  expect(wrapper.isVueInstance()).toBe(true)
})
