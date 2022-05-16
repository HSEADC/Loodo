class Admin::LessonElementsController < Admin::ApplicationController
  protect_from_forgery with: :null_session

  before_action :set_lesson, only: %i[ update destroy ]


  def index
    # puts "__________"
    # puts params
    # puts "__________"

    lesson = Lesson.find(params[:lesson_id])
    lesson_elements = lesson.lesson_elements



    render json: { elements: lesson_elements }
  end

  def create

    lesson = Lesson.find(params[:lesson_id])
    lesson_element = lesson.lesson_elements.create!(
        kind: params[:type],
        position: params[:position],
        text: params[:text]
      )

    #
    # @lesson_element = LessonElement.new(lesson_element_params)
    render json: { id: lesson_element.id, tempId: params[:tempId] }
  end

  def update

    lesson_element = LessonElement.find(params[:id])
    lesson_element.update_attribute(:body, params[:lesson_element][:body])

    render json: { id: lesson_element.id }

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
