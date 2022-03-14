class CreateInteractiveModules < ActiveRecord::Migration[6.1]
  def change
    create_table :interactive_modules do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
