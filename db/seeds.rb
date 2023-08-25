# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

User.create!(
    username: "admin",
    email: "admin@admin.com",
    password: "aaaaaa",
    photo_url: Faker::Internet.url,        
    user_type: 1,
    status: 1,
    first_name: Faker::Name.first_name,
    middle_name: Faker::Name.name_with_middle.split(' ')[1],
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.phone_number,
    address: Faker::Address.full_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: Faker::Address.country,
    postal_code: Faker::Address.zip_code,
)

100.times do |index|
    User.create!(
        username: Faker::Internet.username(specifier: 5..10),
        email: Faker::Internet.email,
        password: "aaaaaa",
        photo_url: Faker::Internet.url,        
        user_type: 2,
        status: 1,
        first_name: Faker::Name.first_name,
        middle_name: Faker::Name.name_with_middle.split(' ')[1],
        last_name: Faker::Name.last_name,
        phone_number: Faker::PhoneNumber.phone_number,
        address: Faker::Address.full_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        country: Faker::Address.country,
        postal_code: Faker::Address.zip_code,
    )
end

p "Created #{User.count} users"