class Admin::LessonElementsController < Admin::ApplicationController
  before_action :set_lesson, only: %i[ update destroy ]

  def index
    lesson = Lesson.find(params[:lesson_id])
    lesson_elements = lesson.lesson_elements

    render json: { elements: lesson_elements }
  end

  def create
    # @lesson_element = LessonElement.new(lesson_element_params)
    # render json: { id: comment.id, tempId: params[:tempId] }
  end

  def update
  end

  def destroy
    # @lesson.destroy
  end

  private

    def set_lesson
      # @lesson = Lesson.find(params[:id])
    end

    def lesson_params
      # params.require(:lesson).permit(:name, :description)
    end

end
