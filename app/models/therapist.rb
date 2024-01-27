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
  
end
