<script setup>
import { ref } from 'vue'
import PomodoroCategory from 'models/PomodoroCategory'
import PomodoroCategoryForm from './PomodoroCategoryForm.vue'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  pomodoroCategory: {
    required: true,
    type: PomodoroCategory
  },
  updating: {
    required: true,
    type: Boolean,
    default: false
  },

  modelValue: {
    required: false,
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update', 'update:model-value'])

const form = ref({})

function setFormToModel () {
  form.value = {
    title: props.pomodoroCategory.title,
    description: props.pomodoroCategory.description,
    color: props.pomodoroCategory.color,
    seconds: props.pomodoroCategory.seconds
  }
}

setFormToModel()

useVModel(props, 'model-value', emit)
</script>

<template>
  <q-dialog v-model="showUpdateDialog">
    <q-card
      class="full-width"
      style="max-width: 360px"
    >
      <q-card-section>
        <PomodoroCategoryForm
          v-model:title="form.title"
          v-model:description="form.description"
          v-model:color="form.color"
          v-model:seconds="form.seconds"
        />
      </q-card-section>
      <q-btn
        v-if="updating"
        unelevated
        color="primary"
        :loading="updating"
        label="update"
        class="full-width"
        @click="emit('update', form)"
      />
    </q-card>
  </q-dialog>
</template>
