json.tasks do
  @tasks.each do |task| 
    json.set! task.id do
      json.partial! 'api/tasks/task', message: message
    end 
  end 
end 