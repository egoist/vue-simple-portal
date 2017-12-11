import Vue from 'vue'

export default {
  name: 'simple-portal',

  props: {
    target: {
      type: String,
      required: true
    },

    // The name option for mounted portal component
    componentName: {
      type: String,
      default: 'portal-target'
    }
  },

  mounted() {
    const { staticClass, class: className, attrs } = this.$vnode.data
    const children = this.$slots.default

    this.targetEl = document.getElementById(this.target)
    this.childEl = document.createElement('div')
    this.childEl.id = this.componentName
    this.targetEl.appendChild(this.childEl)
    this.childVm = new Vue({
      name: this.componentName,
      abstract: true,
      parent: this,
      render(h) {
        return h('div', { staticClass, class: className, attrs }, children)
      }
    })

    this.childVm.$mount(this.childEl)
    this.childEl = this.childVm.$el
  },

  beforeDestroy() {
    this.childVm.$destroy()
    this.targetEl.removeChild(this.childEl)
  },

  render() {
    return this.$slots.placeholder
  }
}
