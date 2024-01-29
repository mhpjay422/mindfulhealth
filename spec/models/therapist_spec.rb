# == Schema Information
#
# Table name: therapists
#
#  id         :uuid             not null, primary key
#  address    :string           not null
#  city       :string           not null
#  insurance  :string
#  name       :string           not null
#  remote     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Therapist, type: :model do
  subject { described_class.new(name: "Cloud Strife", address: "1 Sunrise St", city: "Costa del Sol", remote: false) }

  it "can run tests" do
    expect(true).to eq(true)
  end
  
  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).not_to be_valid
    end

    it "is not valid without an address" do
      subject.address = nil
      expect(subject).not_to be_valid
    end
    
    it "is not valid without a city" do
      subject.city = nil
      expect(subject).not_to be_valid
    end
    
    it "is not valid with a numeric city" do
      subject.city = '12345'
      expect(subject).not_to be_valid
    end

    it "is valid with a boolean remote value" do
      subject.remote = true
      expect(subject).to be_valid
    end

    it "is not valid with a non-boolean remote value" do
      subject.remote = nil
      expect(subject).not_to be_valid
    end
    
  end

  describe "creation" do
    it 'is valid with valid attributes' do
      therapist = Therapist.new(name: 'Nanaki', address: '1 Rocky Hill', city: 'Cosmo Canyon', remote: false)
      expect(therapist).to be_valid
    end

    it 'is valid with a name and without insurance' do
      therapist = Therapist.new(name: 'Nanaki', address: '1 Rocky Hill', city: 'Cosmo Canyon', remote: false, insurance: nil)
      expect(therapist).to be_valid
    end
  end
  
  describe "Custom city validation" do
    it "is valid when city is not Midgar" do
      subject.city = "Rocket Town"
      expect(subject).to be_valid
    end
    
    it "is not valid when city is Midgar" do
      subject.city = "Midgar"
      expect(subject).not_to be_valid
      expect(subject.errors[:city]).to include("cannot be Midgar")
    end
  end
end
