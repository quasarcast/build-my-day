<script setup>
import { ref } from 'vue'
import PomodoroCategoryForm from './PomodoroCategoryForm.vue'

defineProps({
  creating: {
    required: false,
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['create'])

const form = ref({
  title: '',
  description: '',
  color: '',
  seconds: 1200
})

const showDialog = ref(false)
</script>

<template>
  <q-btn
    v-bind="$attrs"
    @click="() => {
      showDialog = true
    }"
  />

  <q-dialog v-model="showDialog">
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
        unelevated
        color="primary"
        :loading="creating"
        label="create"
        class="full-width"
        @click="emit('create', form)"
      />
    </q-card>
  </q-dialog>
</template>
