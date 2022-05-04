@interactive_modules_data = [
  {
    name: '1',
    description: 'Тригер'
  },
  {
    name: '2',
    description: 'Клаивтура'
  },
  {
    name: '3',
    description: 'Сиквенсор'
  },
  {
    name: '4',
    description: 'Синт 1 модуль'
  },
  {
    name: '5',
    description: 'Синт 2 модуля'
  },
  {
    name: '6',
    description: 'Синти 3 модуля'
  },
  {
    name: '7',
    description: 'Синт 4 модуля'
  },
  {
    name: '8',
    description: 'Синт Эффект Хорус'
  },
  {
    name: '9',
    description: 'Добавить эффект'
  },
  {
    name: '10',
    description: 'Использование семплов'
  },
  {
    name: '11',
    description: 'Создание музыкальной последовательности'
  },
  {
    name: '12',
    description: 'Кнопки 1 секунда 1 hz'
  },
  {
    name: '13',
    description: 'BPM'
  },
  {
    name: '14',
    description: 'Время в музыкальной теории'
  },
  {
    name: '15',
    description: 'Задание 1. Сикувенсор прямая бочка'
  },
  {
    name: '16',
    description: 'Задание 2. Клавиатура'
  },
  {
    name: '17',
    description: 'Тон синт'
  },
  {
    name: '18',
    description: 'Моно синт'
  },
  {
    name: '19',
    description: 'ФМ синт'
  },
  {
    name: '20',
    description: 'АМ синт'
  },
  {
    name: '21',
    description: 'Fat Oscilator'
  },
  {
    name: '22',
    description: 'Metal Synth'
  },
  {
    name: '23',
    description: 'Poly synth'
  },
  {
    name: '24',
    description: 'Семплер 1'
  },
  {
    name: '25',
    description: 'Семплер 2'
  },
  {
    name: '26',
    description: 'AutoFilter'
  },
  {
    name: '27',
    description: 'AutoPanner'
  },
  {
    name: '28',
    description: 'AutoWah'
  },
  {
    name: '29',
    description: 'BitCrusher'
  },
  {
    name: '30',
    description: 'Chebyshev'
  },
  {
    name: '31',
    description: 'Chorus'
  },
  {
    name: '32',
    description: 'Distortion'
  },
  {
    name: '33',
    description: 'FeedbackDelay'
  },
  {
    name: '34',
    description: 'Freeverb'
  },
  {
    name: '35',
    description: 'FrequencyShifter'
  },
  {
    name: '36',
    description: 'JCReverb'
  },
  {
    name: '37',
    description: 'MidSideEffect'
  },
  {
    name: '38',
    description: 'Phaser'
  },
  {
    name: '39',
    description: 'PingPongDelay'
  },
  {
    name: '40',
    description: 'PitchShift'
  },
  {
    name: '41',
    description: 'Reverb'
  },
  {
    name: '42',
    description: 'StereoWidener'
  },
  {
    name: '43',
    description: 'Tremolo'
  },
  {
    name: '44',
    description: 'Vibrato'
  },
  {
    name: '45',
    description: 'Микшер'
  },
]

@lessons_data = [
  {
    name: '1',
    description: 'Синтез звука'
  },
  {
    name: '2',
    description: 'Время и ноты в Tone.js'
  },
  {
    name: '3',
    description: 'Инструменты в тоне'
  },
  {
    name: '4',
    description: 'Звуковые эффекты в тоне'
  },
  {
    name: '5',
    description: 'Каналы, микширование
и создание музыки'
  }
]

def seed
  reset_db
  create_interactive_modules
  create_lessons
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_interactive_modules
  @interactive_modules_data.each do |interactive_module_data|
    interactive_module = InteractiveModule.create!(interactive_module_data)
    puts "#{interactive_module.name} interactive_module just created"
  end
end

def create_lessons
  @lessons_data.each do |lesson_data|
    lesson = Lesson.create!(lesson_data)
    puts "#{lesson.name} lesson just created"
  end
end

seed
