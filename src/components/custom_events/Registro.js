const inputComponent = {
  template: `<input
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" type="text" />`,
  props: ['placeholder'],
  data() {
    return {
      input: ''
    }
  }
}

