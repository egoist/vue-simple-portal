import { mount } from 'vue-test-utils'
import SimplePortal from './'

const $target = document.createElement('div')
$target.id = 'target'
document.body.appendChild($target)

test('it works', () => {
  const wrapper = mount({
    template: '<simple-portal target="target">hi</simple-portal>',
    components: {
      SimplePortal
    }
  })
  expect($target.outerHTML).toMatchSnapshot()
})
