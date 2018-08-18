class RemoveTaskIdOnUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :task_id
  end
end
