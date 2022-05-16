class Admin::ApplicationController < ActionController::Base
  layout 'admin'
  skip_before_action :verify_authenticity_token

  before_action :authenticate_user!
  load_and_authorize_resource

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden }
      format.html { redirect_to root_path, alert: exception.message }
    end
  end

  # CanCanCan bypass
  def create_params
  end
end
