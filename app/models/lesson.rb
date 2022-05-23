class Lesson < ApplicationRecord
  has_many :lesson_elements
  default_scope { order(position: 'ASC') }

  def as_json(options = nil)
    {
      id: id,
      position: position,
      name: name,
      description: description,
      published: published
    }
  end
end
