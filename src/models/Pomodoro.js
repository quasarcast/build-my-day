import { Model } from '@vuex-orm/core'
import PomodoroCategory from './PomodoroCategory'

export default class Pomodoro extends Model {
  static entity = 'pomodoros'

  static fields () {
    return {
      id: this.attr(null),
      pomodoro_category_id: this.number(),
      seconds_completed: this.attr(null),
      completed: this.boolean(false),
      user_id: this.number(),

      pomodoro_category: this.belongsTo(PomodoroCategory, 'pomodoro_category_id')
    }
  }
}
