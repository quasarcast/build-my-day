<script setup>
import CategoryCard from 'components/PomodoroCategory/CategoryCard.vue'
import { ref, computed } from 'vue'
import CreatePomodoroCategoryButton from './CreatePomodoroCategoryButton.vue'
import UpdatePomodoroCategoryDialog from './UpdatePomodoroCategoryDialog.vue'

const props = defineProps({
  categories: {
    required: true,
    type: Array
  },

  indexing: {
    required: false,
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['create'])

const search = ref('')

const filteredCategories = computed(() => {
  return props.categories.filter(category => {
    return category.title.includes(search.value)
  })
})

const showUpdateDialog = ref(false)
</script>

<template>
  <q-card
    class="full-height q-ma-md"
    style="max-height: calc(100vh - 85px)"
  >
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
        Category
      </q-toolbar-title>

      <!-- Search -->
      <q-input
        v-model="search"
        outlined
        color="white"
        dense
        bg-color="white"
      >
        <template #prepend>
          <q-icon
            color="grey"
            name="mdi-magnify"
          />
        </template>
      </q-input>

      <!-- Create Button -->
      <CreatePomodoroCategoryButton
        icon="mdi-plus"
        unelevated
        color="primary"
        dense
        class="q-ml-md"
        @create="form => emit('create', form)"
      />
    </q-toolbar>

    <!-- Category Cards -->
    <div
      class="full-width full-height"
      style="max-height: calc(100vh - 135px)"
    >
      <div
        class="row overflow-auto"
      >
        <q-spinner
          v-if="indexing"
          size="lg"
          color="primary"
        />
        <div
          v-for="category in filteredCategories"
          :key="category.id"
          class="col-6"
        >
          <q-responsive
            :ratio="1"
            class="q-ma-sm"
          >
            <CategoryCard
              :category="category"
              @update="id => emit('update', id, form)"
            />
          </q-responsive>
        </div>
      </div>
    </div>

    <!-- Update Dialog -->
    <!-- <UpdatePomodoroCategoryDialog v-model="showUpdateDialog" /> -->
  </q-card>
</template>
