<script setup>
import PomodoroCategory from 'src/models/PomodoroCategory'

defineProps({
  category: {
    type: PomodoroCategory,
    required: true
  },

  updating: {
    type: Boolean,
    required: false,
    default: false
  },

  removing: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update'])
</script>

<template>
  <q-card class="shadow-2 relative-position">
    <q-card-section>
      <q-input
        :model-value="category.title"
        dense
        borderless
        :loading="updating"
        @blur="emit('update', category.id)"
      />
    </q-card-section>

    <q-btn
      icon="mdi-pencil"
      flat
      round
      size="sm"
      class="absolute-bottom-right q-mr-sm q-mb-sm"
      @click="emit('update', category.id)"
    />

    <q-btn
      :loading="removing"
      icon="mdi-delete"
      flat
      round
      size="sm"
      class="absolute-bottom-left q-mr-sm q-mb-sm"
      @click="emit('remove', category.id)"
    />
  </q-card>
</template>
