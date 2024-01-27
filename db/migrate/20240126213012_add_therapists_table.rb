class AddTherapistsTable < ActiveRecord::Migration[7.1]
  def change
    create_table :therapists, id: :uuid do |t|
      t.string :name,       null: false
      t.string :address,    null: false
      t.string :city,       null: false
      t.string :insurance
      t.boolean :remote,    null: false

      t.timestamps
    end
  end
end
