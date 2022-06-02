class InteractiveModule < ApplicationRecord
  mount_uploader :javascript, InteractiveModuleScriptUploader
  mount_uploader :stylesheet, InteractiveModuleStyleUploader
end
