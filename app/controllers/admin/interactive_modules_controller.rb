class Admin::InteractiveModulesController < Admin::ApplicationController
  before_action :set_interactive_module, only: %i[ show edit update destroy ]
  before_action :get_interactive_modules, only: %i[ index ]

  # GET /interactive_modules or /interactive_modules.json
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: { interactive_modules: @interactive_modules } }
    end
  end

  # GET /interactive_modules/1 or /interactive_modules/1.json
  def show
  end

  # GET /interactive_modules/new
  def new
    @interactive_module = InteractiveModule.new
  end

  # GET /interactive_modules/1/edit
  def edit
  end

  # POST /interactive_modules or /interactive_modules.json
  def create
    @interactive_module = InteractiveModule.new(interactive_module_params)

    respond_to do |format|
      if @interactive_module.save
        format.html { redirect_to interactive_module_url(@interactive_module), notice: "Prototype was successfully created." }
        format.json { render :show, status: :created, location: @interactive_module }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @interactive_module.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /interactive_modules/1 or /interactive_modules/1.json
  def update
    respond_to do |format|
      if @interactive_module.update(interactive_module_params)
        format.html { redirect_to interactive_module_url(@interactive_module), notice: "Prototype was successfully updated." }
        format.json { render :show, status: :ok, location: @interactive_module }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @interactive_module.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interactive_modules/1 or /interactive_modules/1.json
  def destroy
    @interactive_module.destroy

    respond_to do |format|
      format.html { redirect_to interactive_modules_url, notice: "Prototype was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interactive_module
      @interactive_module = InteractiveModule.find(params[:id])
    end

    def get_interactive_modules
      @interactive_modules = InteractiveModule.all
    end

    # Only allow a list of trusted parameters through.
    def interactive_module_params
      params.require(:interactive_module).permit(:name, :description)
    end
end
