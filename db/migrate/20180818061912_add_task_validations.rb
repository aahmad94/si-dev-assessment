class AddTaskValidations < ActiveRecord::Migration[5.0]
  def change
    change_column :tasks, :complete, :boolean, default: false
    change_column :tasks, :body, :text, null: false
    change_column :tasks, :user_id, :integer, null: false
  end
end
