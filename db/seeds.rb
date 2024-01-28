require 'faker'

Therapist.delete_all

cities = ["Brooklyn", "Queens", "Bronx", "Manhattan", "Staten Island"]
insurances = ["Kaiser", "BCBS", "United Health", "Aetna", "Ambetta", "Cigna", "Oscar", "Anthem", "HCSC", "Centene"]

# Using the faker gem, create 10 therapists 
# 

  20.times do
    Therapist.create(
      name: Faker::Name.name,
      address: Faker::Address.street_address,
      city: cities[rand(4)],
      insurance: insurances[rand(9)],
      remote: Faker::Boolean.boolean(true_ratio: 0.3),
  )
  end
