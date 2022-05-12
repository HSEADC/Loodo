class LessonsController < ApplicationController
  layout 'application', only: :index

  def index
    @lessons = Lesson.all
  end

  def show
    @lesson = Lesson.find(params[:id])
    last_lesson_id = Lesson.last.id
    first_lesson_id = Lesson.first.id
    next_lesson_id = @lesson.id + 1
    previous_lesson_id = @lesson.id - 1

    unless next_lesson_id > last_lesson_id
      @next_lesson = Lesson.find(next_lesson_id)
    end

    unless previous_lesson_id < first_lesson_id
      @previous_lesson = Lesson.find(previous_lesson_id)
    end
  end

end
