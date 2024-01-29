# == Schema Information
#
# Table name: therapists
#
#  id         :uuid             not null, primary key
#  name       :string           not null
#  address    :string           not null
#  city       :string           not null
#  insurance  :string
#  remote     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Therapist < ApplicationRecord 
  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true, format: { with: /\A[a-zA-Z\s]+\z/, message: "only allows letters" }
  validates :remote, inclusion: { in: [true, false] }
  validate :custom_method_for_validation

private

  def custom_method_for_validation
    # So true
    true == true
  end
end
