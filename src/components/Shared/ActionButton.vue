<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },

  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 rounded hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:text-white hover:bg-brand-blue-2;
}
</style>
