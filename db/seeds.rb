@interactive_modules_data = [
  {
    name: '1',
    description: 'About'
  },
  {
    name: '2',
    description: 'About'
  },
  {
    name: '3',
    description: 'About'
  },
  {
    name: '4',
    description: 'About'
  },
  {
    name: '5',
    description: 'About'
  },
  {
    name: '6',
    description: 'About'
  }
]

def seed
  reset_db
  create_interactive_modules
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

seed
