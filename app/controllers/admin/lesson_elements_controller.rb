class Admin::LessonElementsController < Admin::ApplicationController
  before_action :set_lesson, only: %i[ update destroy ]

  def index
    lesson = Lesson.find(params[:lesson_id])
    lesson_elements = lesson.lesson_elements

    render json: { elements: lesson_elements }
  end

  def create
    lesson = Lesson.find(params[:lesson_id])

    lesson_element = lesson.lesson_elements.create!(
      kind: params[:lesson_element][:type],
      position: params[:lesson_element][:position],
      text: params[:lesson_element][:text]
    )


    render json: { id: lesson_element.id, tempId: params[:temp_id] }
  end

  def update
    lesson_element = LessonElement.find(params[:id])
    lesson_element.update_attribute(:text, params[:lesson_element][:text])

    render json: { id: lesson_element.id }
  end

  def destroy

    lesson_element = LessonElement.find(params[:id])
    lesson_element.destroy


    render json: { id: lesson_element.id }

  end

  private

    def set_lesson
      # @lesson = Lesson.find(params[:id])
    end

    def lesson_params
      # params.require(:lesson).permit(:name, :description)
    end

end
