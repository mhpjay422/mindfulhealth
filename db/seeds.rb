require 'faker'

Therapist.delete_all

cities = ["Brooklyn", "Queens", "Bronx", "Manhattan", "Staten Island"]
insurances = ["Kaiser", "BCBS", "United Health", "Aetna", "Ambetta", "Cigna", "Oscar", "Anthem", "HCSC", "Centene"]

30.times do
  Therapist.create(
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    city: cities[rand(5)],
    insurance: insurances[rand(10)],
    remote: Faker::Boolean.boolean(true_ratio: 0.3),
  )
end
