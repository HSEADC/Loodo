class LessonElement < ApplicationRecord
  belongs_to :lesson
  default_scope { order(position: 'ASC') }

  def as_json(options = nil)
    {
      id: id,
      position: position,
      type: kind,
      text: text
    }
  end
end
