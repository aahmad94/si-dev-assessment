class AddUserIdIndexOnTasks < ActiveRecord::Migration[5.0]
  def change
    add_index :tasks, :user_id
  end
end
