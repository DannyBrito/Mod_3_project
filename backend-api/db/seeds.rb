# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
ClothingItem.destroy_all

danny = User.create(username: "fujack")
jack = User.create(username: "fudanny")

gray_hoodie = ClothingItem.create(brand: "Nike", clothing_type: "hoodie", color: "gray", temp_min: -40, temp_max: 60)
blundtstones = ClothingItem.create(brand: "BlundStones", clothing_type: "Shoes", color: "blue", temp_min: -40, temp_max: 45)
express = ClothingItem.create(brand: "Express", clothing_type: "Shoes", color: "gray", temp_min: 50, temp_max: 120)
white_tshirt = ClothingItem.create(brand: "Hanes", clothing_type: "tshirt", color: "white", temp_min: 60, temp_max: 120)
white_socks = ClothingItem.create(brand: "Hanes", clothing_type: "socks", color: "white", temp_exempt: true, temp_min: -40, temp_max: 140)
heavy_jacket = ClothingItem.create(brand: "Saturdays", clothing_type: "heavy_jacket", color: "blue", temp_min: -40, temp_max: 40)
jeans = ClothingItem.create(brand: "Levy's", clothing_type: "pants", color: "blue", temp_exempt: true)
shorts = ClothingItem.create(brand: "Addidas", clothing_type: "pants", color: "black", temp_min: 70, temp_max: 140)
winter_hat = ClothingItem.create(brand: "Uniqlo", clothing_type: "hat", color: "blue", temp_min: -40, temp_max: 45)
gloves = ClothingItem.create(brand: "Uniqlo", clothing_type: "gloves", color: "black", temp_min: -40, temp_max: 39)

uci1 = UserClothingItem.create(user: danny, clothing_item: gray_hoodie, personal_nickname: 'go to gray hoodie')
uci2 = UserClothingItem.create(user: danny, clothing_item: express)
uci3 = UserClothingItem.create(user: danny, clothing_item: white_socks)
uci4 = UserClothingItem.create(user: danny, clothing_item: jeans)
uci5 = UserClothingItem.create(user: danny, clothing_item: heavy_jacket)
uci6 = UserClothingItem.create(user: danny, clothing_item: white_tshirt)
uci7 = UserClothingItem.create(user: danny, clothing_item: shorts)
uci8 = UserClothingItem.create(user: danny, clothing_item: gloves)
uci9 = UserClothingItem.create(user: danny, clothing_item: winter_hat)
uci10 = UserClothingItem.create(user: jack, clothing_item: gray_hoodie, personal_nickname: 'the warm boy')