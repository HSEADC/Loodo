class CreateLessonElements < ActiveRecord::Migration[6.1]
  def change
    create_table :lesson_elements do |t|
      t.integer :lesson_id
      t.integer :position
      t.string :kind
      t.text :text

      t.timestamps
    end
  end
end
