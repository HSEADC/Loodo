class Admin::LessonsController < Admin::ApplicationController
  before_action :set_lesson, only: %i[ show edit update destroy publish ]
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
    respond_to do |format|
      if @lesson.update(lesson_params)
        format.html { redirect_to admin_lesson_url(@lesson), notice: "Lesson was successfully updated." }
        format.json { render :show, status: :ok, location: @lesson }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @lesson.destroy

    respond_to do |format|
      format.html { redirect_to admin_lessons_url, notice: "Lesson was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def publish
    @lesson.update_attribute(:published, !@lesson.published)
    redirect_to admin_lessons_url
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
