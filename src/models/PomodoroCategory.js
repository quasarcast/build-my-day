import { Model } from '@vuex-orm/core'

export default class PomodoroCategory extends Model {
  static entity = 'pomodoro_categories'

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(null),
      description: this.attr(null),
      color: this.attr(null),
      seconds: this.attr(null),
      user_id: this.number()
    }
  }
}
