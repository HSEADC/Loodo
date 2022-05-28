def seed
  reset_db
  create_admin
  create_interactive_modules
  create_lessons
  create_lesson_elements
end

def reset_db
  Rake::Task['db:drop:_unsafe'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def get_lesson_data_from_file(file)
  JSON.parse(File.read(Rails.root.join("db/seed_data/#{file}.json")))
end

def create_admin
  user = User.create!(email: 'admin@admin.com', password: 'testtest')
  puts "Admin with email #{user.email} just created"
end

def create_interactive_modules
  interactive_modules_data = get_lesson_data_from_file('interactive_modules')['interactive_modules']

  interactive_modules_data.each do |interactive_module_data|
    interactive_module = InteractiveModule.create!(interactive_module_data)
    puts "#{interactive_module.name} interactive_module just created"
  end
end

def create_lessons
  lessons_data = get_lesson_data_from_file('lessons')['lessons']

  lessons_data.each_with_index do |lesson_data, index|
    lesson_data[:position] = index
    lesson = Lesson.create!(lesson_data)
    puts "#{lesson.name} lesson just created"
  end
end

def create_lesson_elements
  lessons_elements_data = [
    {
      name: 'Синтез звука',
      elements: get_lesson_data_from_file('lesson_1')['elements']
    }, {
      name: 'Время и ноты в Tone.js',
      elements: get_lesson_data_from_file('lesson_2')['elements']
    }
  ]

  lessons_elements_data.each do |lesson_elements_data|
    lesson = Lesson.find_by_name(lesson_elements_data[:name])

    lesson_elements_data[:elements].each do |lesson_element_data|
      lesson_element = lesson.lesson_elements.create!(
        kind: lesson_element_data['type'],
        position: lesson_element_data['position'],
        text: lesson_element_data['text']
      )

      puts "Lesson element created with id #{lesson_element.id} for lesson with id #{lesson_element.lesson.id}"
    end
  end
end

seed
