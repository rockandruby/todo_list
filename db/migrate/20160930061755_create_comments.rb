class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :title
      t.string :file
      t.belongs_to :task, index: true
      t.timestamps
    end
  end
end
