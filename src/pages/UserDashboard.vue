<script setup>
import { useModelCollection } from '@vuemodel/supabase'
import PomodoroCategory from 'models/PomodoroCategory'
import ManagePomodoroCategoriesCard from 'components/PomodoroCategory/ManagePomodoroCategoriesCard.vue'

const {
  collection: categories,
  index: indexCategories,
  indexing
} = useModelCollection(PomodoroCategory)

indexCategories()

function onCreate (form) {
  console.log(form)
}
</script>

<template>
  <q-page class="row">
    <div class="col-lg-4">
      <ManagePomodoroCategoriesCard
        :indexing="indexing"
        :categories="categories"
        @create="onCreate"
      />
    </div>
    <div class="bg-green col-lg-3">
      two
    </div>
    <div class="bg-orange col-lg-5">
      three
    </div>
  </q-page>
</template>
