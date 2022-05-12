class InteractiveModulesController < ApplicationController

  def show
    @interactive_module = InteractiveModule.find(params[:id])
  end

end
