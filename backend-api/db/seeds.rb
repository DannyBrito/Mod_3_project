# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
ClothingItem.destroy_all

danny = User.create(username: "danny")
jack = User.create(username: "jack")

gray_hoodie = ClothingItem.create(brand: "Nike", clothing_type: "Sweater", color: "gray", temp_min: -40, temp_max: 60)
blundtstones = ClothingItem.create(brand: "BlundStones", clothing_type: "Shoes", color: "blue", temp_min: -40, temp_max: 45)
express = ClothingItem.create(brand: "Express", clothing_type: "Shoes", color: "gray", temp_min: 50, temp_max: 120)
white_tshirt = ClothingItem.create(brand: "Hanes", clothing_type: "Tshirt", color: "white", temp_min: 60, temp_max: 120)
white_socks = ClothingItem.create(brand: "Hanes", clothing_type: "Socks", color: "white", temp_exempt: true, temp_min: -40, temp_max: 140)
heavy_jacket = ClothingItem.create(brand: "Saturdays", clothing_type: "Heavy Jacket", color: "blue", temp_min: -40, temp_max: 40)
jeans = ClothingItem.create(brand: "Levy's", clothing_type: "Pants", color: "blue", temp_exempt: true, temp_min: -40, temp_max: 140)
shorts = ClothingItem.create(brand: "Addidas", clothing_type: "Pants", color: "black", temp_min: 70, temp_max: 140)
winter_hat = ClothingItem.create(brand: "Uniqlo", clothing_type: "Hat", color: "blue", temp_min: -40, temp_max: 45)
gloves = ClothingItem.create(brand: "Uniqlo", clothing_type: "Gloves", color: "black", temp_min: -40, temp_max: 39)
sunglasses = ClothingItem.create(brand: "Warby Parker", clothing_type: "Accessory", color: "patterned", temp_exempt: true, temp_min: -40, temp_max: 140)
longsleeve = ClothingItem.create(brand: "Gap", clothing_type: "Longsleeve", color: "black", temp_exempt: false, temp_min: -40, temp_max: 60)
chinos = ClothingItem.create(brand: "Dickies", clothing_type: "Pants", color: 'brown', temp_exempt: false, temp_min: -40, temp_max: 80)
heattech_tights = ClothingItem.create(brand: "Uniqlo", clothing_type: "Accessory", color: 'black', temp_exempt: false, temp_min: -40, temp_max: 35)
heattech_shirt = ClothingItem.create(brand: "Uniqlo", clothing_type: "Longsleeve", color: 'black', temp_exempt: false, temp_min: -40, temp_max: 35)
converse = ClothingItem.create(brand: "Converse", clothing_type: "Shoes", color: 'white', temp_exempt: false, temp_min: 20, temp_max: 140)


#danny
uci1 = UserClothingItem.create(user: danny, clothing_item: gray_hoodie, personal_nickname: 'gray hoodie')
uci2 = UserClothingItem.create(user: danny, clothing_item: express, personal_nickname: 'everyday shoes')
uci3 = UserClothingItem.create(user: danny, clothing_item: white_socks, personal_nickname: 'white socks')
uci4 = UserClothingItem.create(user: danny, clothing_item: jeans, personal_nickname: 'blue jeans')
uci5 = UserClothingItem.create(user: danny, clothing_item: heavy_jacket, personal_nickname: 'saturdays jacket')
uci6 = UserClothingItem.create(user: danny, clothing_item: white_tshirt, personal_nickname: 'white tee')
uci7 = UserClothingItem.create(user: danny, clothing_item: shorts, personal_nickname: 'short shorts')
uci8 = UserClothingItem.create(user: danny, clothing_item: gloves, personal_nickname: 'hand pants')
uci9 = UserClothingItem.create(user: danny, clothing_item: winter_hat, personal_nickname: 'head shirt')

#jack
uci10 = UserClothingItem.create(user: jack, clothing_item: gray_hoodie, personal_nickname: 'the warm boy')
uci11 = UserClothingItem.create(user: jack, clothing_item: heavy_jacket, personal_nickname: 'long coat')
uci12 = UserClothingItem.create(user: jack, clothing_item: white_tshirt, personal_nickname: 'white tee')
uci13 = UserClothingItem.create(user: jack, clothing_item: winter_hat, personal_nickname: 'stevan alan hat')
uci14 = UserClothingItem.create(user: jack, clothing_item: longsleeve, personal_nickname: 'black shirt')
uci15 = UserClothingItem.create(user: jack, clothing_item: chinos, personal_nickname: 'brown pants')
uci16 = UserClothingItem.create(user: jack, clothing_item: heattech_tights, personal_nickname: 'heattech tights')
uci17 = UserClothingItem.create(user: jack, clothing_item: heattech_shirt, personal_nickname: 'heattech shirt')
uci18 = UserClothingItem.create(user: jack, clothing_item: converse, personal_nickname: 'white converse')
uci19 = UserClothingItem.create(user: jack, clothing_item: blundtstones, personal_nickname: 'blue boots')
