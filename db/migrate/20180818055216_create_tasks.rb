class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.text :body, null: false
      t.boolean :complete, default: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
