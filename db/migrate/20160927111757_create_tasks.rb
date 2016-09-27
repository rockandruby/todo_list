class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.belongs_to :project, index: true
      t.integer :position, default: 1
      t.datetime :deadline
      t.boolean :is_done, default: false
      t.timestamps
    end
  end
end
