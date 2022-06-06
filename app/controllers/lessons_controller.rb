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

    if @lesson.id === 1
      render 'lesson_1'
    elsif @lesson.id === 2
      render 'lesson_2'
    elsif @lesson.id === 3
      render 'lesson_3'
    elsif @lesson.id === 4
      render 'lesson_4'
    elsif @lesson.id === 5
      render 'lesson_5'
    else
      render :show
    end
  end
end
