class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.integer :position
      t.string :name
      t.text :description
      t.boolean :published, default: false

      t.timestamps
    end
  end
end
