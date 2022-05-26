class Admin::LessonsController < Admin::ApplicationController
  before_action :set_lesson, only: %i[ show edit update destroy publish  ]
  before_action :get_lessons, only: %i[ index ]

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: { lessons: @lessons } }
    end
  end

  def show
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

  def new
    # last_lesson_position = Lesson.all.last.position
    # @lesson = Lesson.new(position: last_lesson_position + 1)

    lessons = Lesson.all
    @lesson = Lesson.new(position: lessons.count)

    respond_to do |format|
      if @lesson.save
        format.html { redirect_to edit_admin_lesson_url(@lesson), notice: "Lesson was successfully created." }
      end
    end
  end

  def edit
  end

  def update
    lesson = Lesson.find(params[:id])

    lesson.update_attribute(:name, params[:name])
    lesson.update_attribute(:description, params[:description])

    render json: { name: lesson.name, description: lesson.description }
  end

  def destroy
    @lesson.destroy

    get_lessons

    @lessons.each_with_index do |lesson, index|
      lesson.update_attribute(:position, index)
    end

    render json: { lessons: @lessons }

    # respond_to do |format|
    #   format.html { redirect_to admin_lessons_url, notice: "Lesson was successfully destroyed." }
    #   format.json { head :no_content }
    # end
  end

  def publish
    @lesson.update_attribute(:published, !@lesson.published)
    redirect_to admin_lessons_url
  end

  def update_lessons_position
    new_lessons = params[:newLessons]

    get_lessons

    @lessons.each_with_index do |lesson, index|
      lesson.update_attribute(:position, new_lessons[index][:position])
      lesson.update_attribute(:name, new_lessons[index][:name])
      lesson.update_attribute(:description, new_lessons[index][:description])
    end

    render json: { lessons: @lessons }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lesson
      @lesson = Lesson.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lesson_params
      params.require(:lesson).permit(:name, :description)
    end

    def get_lessons

      @lessons = Lesson.all
    end
end
