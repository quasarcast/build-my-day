<script setup>
import { useVModels } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  seconds: {
    type: Number,
    required: true
  }
})

const emit = defineEmits([
  'update:title',
  'update:description',
  'update:color',
  'update:seconds'
])

const {
  title,
  description,
  color,
  seconds
} = useVModels(props, emit)
</script>

<template>
  <q-form>
    <q-input
      v-model="title"
      label="title"
      class="q-mb-md"
      outlined
    />
    <q-input
      v-model="description"
      label="description"
      type="textarea"
      class="q-mb-md"
      outlined
    />
    <q-color
      v-model="color"
      format-model="hex"
      class="q-mb-md"
    />
    <q-input
      v-model="seconds"
      label="seconds"
      outlined
      type="number"
      class="q-mb-md"
    />
  </q-form>
</template>
