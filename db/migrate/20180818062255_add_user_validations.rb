class AddUserValidations < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :email, :string, null: false
    change_column :users, :phone_number, :string, null: false
    change_column :users, :password_digest, :string, null: false
    remove_column :users, :name 
  end
end
