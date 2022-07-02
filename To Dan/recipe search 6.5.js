const ingredientsCountries = {"Chuck Beef/Stew Meat":["Ireland","Hungary","Botswana","Finland","Madagascar","Russia","Pakistan","Vietnam","Germany"],"Sirloin":["Vietnam"],"Cow's Feet":["Armenia"],"Corned Beef":["Suriname"],"Beef Tallow":["United Kingdom"],"Brisket":["France","North Korea","Tonga"],"Rump Steak":["Namibia"],"Top Round Roast":["Ethiopia"],"Bottom Round Roast":["France"],"Flank Steak":["Cuba","Venezuela"],"Short Ribs":["France"],"Beef Shank":["Taiwan"],"Blade Roast":[],"Veal Stew Meat":["Italy"],"Veal":["Austria"],"Carne Seca":["Brazil"],"Tripe":["Nigeria"],"Beef":["Burkina Faso","Iran","Mali","Dominican Republic","Nigeria","Syria","South Africa","Uruguay","Yemen","Bosnia and Herzegovina","Guyana","Poland"],"Marrow Bones":["Russia","France","Vietnam"],"Ground Beef":["Uganda","Lithuania","Bolivia","Chile","Sweden","Serbia","Eritrea","Kenya"],"Rookwurst":["Hungary"],"Pork Cracklings":["Slovenia"],"Pork Collar":["Luxembourg"],"Pork Neck":["Italy"],"Pepperoni":["Bosnia and Herzegovina"],"Ham Hock":[],"Ham":["Uruguay"],"Pork Shoulder":["Finland","El Salvador","Czech Republic"],"Bacon":["Lithuania","Brazil","Moldova","New Zealand","Czech Republic","Romania","Uruguay","Poland"],"Bacon Fat":["Germany"],"Prosciutto":["Vatican City"],"Smoked Sausage":["Romania","Poland"],"Italian-style Sausage":["Italy"],"Paio Sausage":["Brazil"],"Pork Butt":["Mexico"],"Pork Belly":["Denmark"],"Calabresa Sausage":["Brazil"],"Pig Tail":["Belize","Grenada"],"Pork Ribs":[],"Pork Loin":["Poland"],"Pork Lard":["Czech Republic"],"Pork":["Rwanda"],"Ground Pork":["Lithuania","Sweden","Moldova","Serbia"],"Chicken":["Guinea","Bahrain","Republic of the Congo","Indonesia","Niger","Panama","Saudi Arabia","Madagascar","Angola","Philippines","Qatar","Dominican Republic","Sri Lanka","Mozambique","Democratic Republic of the Congo","Turkmenistan","Turkey","Morocco","Vanuatu","Papua New Guinea","Togo","Zimbabwe","Colombia","Gabon","Palestine","Palau","Ivory Coast","Liberia","Micronesia","Poland","Greece","Burundi","Grenada","Israel","Suriname"],"Chicken Liver":["Israel"],"Chicken Hearts":["Israel"],"Chicken Giblets":["Burundi"],"Turkey":["United States of America","Sierra Leone"],"Goat":["Somalia"],"Frog":["Dominica"],"Ground Lamb":["Azerbaijan","Serbia"],"Lamb Shoulder":["Libya","Cyprus","India"],"Leg of Lamb":["Afghanistan","Kazakhstan","Oman"],"Rack of Lamb":["Kazakhstan"],"Lamb Meat":["Uzbekistan","Finland","Albania","Djibouti","Tajikistan","Norway","Kyrgyzstan","United Arab Emirates","Jordan"],"Crayfish":["Nigeria","Cameroon","Sierra Leone"],"Catfish":["Myanmar"],"Tilapia":["Malawi"],"Octopus":["Mauritius"],"Conch":["Bahamas"],"Hilsa":["Bangladesh"],"Anchovies":["Malaysia"],"Tuna":["Ecuador","Tunisia","Maldives"],"Mussels":["Belgium"],"Crab":["Trinidad and Tobago"],"Fish":["Belize","The Gambia","Liberia"],"Cod":["United Kingdom"],"Stock Fish":["Nigeria"],"Saltfish":["The Gambia","Jamaica","Saint Kitts and Nevis","Saint Lucia"],"Snapper":["Timor Leste"],"Walu":["Fiji"],"Corvina":["Peru"],"Shrimp":["Kuwait","Madagascar","Cameroon","Liberia","Thailand"],"Lobster":["Kiribati"],"Whitefish":["Nauru","Iraq","Cambodia"],"Feta":["Bulgaria","Georgia","Sudan","Romania"],"Sirene":["Montenegro"],"Cheese Curds":["Canada"],"Yak Cheese":["Bhutan"],"Cottage Cheese":["Croatia"],"Ricotta":["Italy","Georgia","Latvia","Malta","Monaco"],"Parmigiano-Reggiano":["Italy","Tunisia","Vatican City","Malta","Monaco"],"Mozzarella":["El Salvador","Georgia","Malta","Uruguay"],"Fresh Mozzarella":["Italy"],"White Cheese":["Bhutan"],"Gruyere":["Liechtenstein"],"Emmanthaler":["Liechtenstein","Switzerland"],"Fontina":["Liechtenstein"],"Queso Paraguay":["Paraguay"],"Cotija":["Honduras"],"Yogurt":["Bulgaria","Azerbaijan","Kazakhstan","Pakistan","Turkey","Palestine","Jordan","India","Greece"],"Sour Cream":["Lithuania","Russia","Ukraine","Kosovo","Croatia"],"Kefir":["Kosovo"],"Whipped Cream":["San Marino"],"Milk":["Georgia","Austria","Chile","Paraguay","Sweden","South Africa","Czech Republic","Kosovo"],"Evaporated Milk":["Bahamas"],"Whole Milk":["Liechtenstein","Denmark"],"Mishti Doi":["Bangladesh"],"Heavy Cream":["Latvia","Sweden","Vatican City","Marshall Islands","Belgium","Denmark","Australia","Colombia"],"Unsalted Butter":["Ireland","Bulgaria","Hungary","Netherlands","Bhutan","Liechtenstein","Algeria","Georgia","Albania","Montenegro","Sweden","Vatican City","Kazakhstan","Marshall Islands","Pakistan","Belgium","Denmark","San Marino","Uruguay","Ukraine","Saint Kitts and Nevis","Antigua and Barbuda","Bosnia and Herzegovina","Dominica","United States of America","Kosovo","Ethiopia","Canada","Croatia","Luxembourg","Suriname"],"Smen":[],"Clarified Butter":["Austria"],"Ghee":["Bahrain","Azerbaijan","Kuwait","Saudi Arabia","Djibouti","Qatar","United Arab Emirates","Bangladesh","India","Burundi"],"Margarine":["Haiti"],"Egg Yolks":["Kazakhstan","New Zealand"],"Egg Whites":["Serbia","Australia"],"Eggs":["Bulgaria","Malaysia","Nauru","Liechtenstein","Italy","Indonesia","Bolivia","Georgia","Austria","Belize","Chile","Tunisia","Paraguay","Sweden","Vatican City","Kazakhstan","New Zealand","Marshall Islands","Sudan","Spain","South Africa","Czech Republic","Bahamas","Uruguay","Ukraine","Myanmar","Cambodia","Monaco","Samoa","Kosovo","Thailand","North Korea"],"Leek":["Netherlands","France","Luxembourg"],"Bok Choy":["Taiwan"],"Luau Leaf":["Tonga"],"Cassava Leaves":["Sierra Leone"],"Noni Leaves":["Cambodia"],"Sorghum Stems":["Ghana"],"Bean Sprout":["Vietnam","Thailand"],"Korean Cucumber":["North Korea"],"Korean Radish":["North Korea"],"Radish":["Armenia"],"Bitterleaf":["Cameroon"],"Taro":["Solomon Islands","Vanuatu","Papua New Guinea","Grenada"],"White Yams":["Nigeria"],"Pumpkin Leaves":["Nigeria"],"Lettuce":["Dominican Republic","Uruguay","Greece"],"Auyama":["Dominican Republic"],"Kale":["Netherlands","Madagascar","Kenya"],"Collard Greens":["Zambia"],"Spinach":["Madagascar","Papua New Guinea","Zimbabwe","Cameroon","Monaco","Trinidad and Tobago"],"Swiss Chard":["Monaco"],"Dasheen":["Dominica","Grenada"],"Arugula":["Sudan"],"Beet":["Russia","Dominican Republic"],"Rutabaga":["Netherlands"],"Cassava":["Ecuador","Panama","Belize","The Gambia"],"Cucumber":["Malaysia","Dominican Republic","Palestine","Saint Lucia","Greece"],"Cauliflower":["Palestine"],"Sweet Potato/Yam":["Netherlands","Belize","The Gambia","Papua New Guinea","Dominica"],"Okra":["Angola","Chad","Antigua and Barbuda","Gabon","Trinidad and Tobago"],"Bottle Gourd":[],"Butternut Squash":["Netherlands","Angola","The Gambia"],"Calabaza Squash":[],"Acorn Squash":[],"Tomatoes":["Uganda","Guinea-Bissau","Bhutan","Bahrain","Ecuador","Venezuela","Kuwait","Lesotho","Niger","Fiji","Algeria","El Salvador","Bolivia","Burkina Faso","Belize","Iran","Madagascar","Angola","Tanzania","Mali","Central African Republic","Equitorial Guinea","Qatar","The Gambia","Sudan","Dominican Republic","Sri Lanka","Rwanda","Kyrgyzstan","Chad","Vanuatu","Uruguay","Jamaica","Saint Kitts and Nevis","Bosnia and Herzegovina","Gabon","Palestine","Mauritius","Saint Lucia","Ivory Coast","Kenya","Liberia","Zambia","Sierra Leone","Lebanon","Greece","Taiwan","Somalia","Suriname"],"Cabbage":["Lesotho","Algeria","El Salvador","Russia","The Gambia","Norway","Vanuatu","France","Poland"],"Peas":["Vatican City"],"Pigeon Peas":[],"Yellow Split Peas":[],"Pumpkin":["Libya","Chad","Trinidad and Tobago","Grenada"],"Potatoes":["Hungary","Algeria","Panama","Montenegro","Iran","Russia","Mali","Libya","Denmark","Belarus","United Kingdom","Ukraine","Palestine","Greece","Somalia","Suriname"],"Yellow Potatoes":["Colombia"],"Baby Potatoes":["Kazakhstan","France"],"Eggplant":["Mali","The Gambia"],"Mushrooms":["Russia","Ukraine","Poland"],"Russet Potatoes":["Ireland","Netherlands","Lithuania","Tunisia","Canada"],"White Potatoes":["Colombia"],"Red Potatoes":["Colombia","Bosnia and Herzegovina"],"Yukon Gold Potatoes":["Bolivia","Belgium","Spain"],"Green Beans":["Kyrgyzstan"],"Serrano Peppers":["Sri Lanka"],"Seasoning Pepper":["Saint Lucia"],"Bell Pepper":["Dominican Republic"],"Green Peppers":["Bolivia","Belize","Central African Republic","Kyrgyzstan","Malawi","Zimbabwe","Dominica"],"Red Bell Pepper":["Guinea-Bissau","Cuba","Venezuela","Lesotho","Costa Rica","Mozambique","South Africa","Zimbabwe","Jamaica","Saint Kitts and Nevis","Saint Lucia","Ivory Coast","Liberia","Greece"],"Green Bell Pepper":["Honduras","Nicaragua","Uganda","Cuba","Venezuela","Lesotho","El Salvador","Iran","Dominican Republic","Saint Kitts and Nevis","Liberia"],"Yellow Bell Pepper":["Saint Kitts and Nevis"],"Pimentos":["Trinidad and Tobago","Grenada"],"Sweet Oniom":["Tonga"],"Onion":["Ireland","Hungary","Netherlands","Uganda","Guinea","Guinea-Bissau","Malaysia","Bhutan","Bahrain","Botswana","Azerbaijan","Venezuela","Republic of the Congo","Uzbekistan","Lithuania","Brazil","Kuwait","Lesotho","Finland","Fiji","Algeria","Afghanistan","Burkina Faso","Panama","Nepal","Belize","Iran","Egypt","Saudi Arabia","Chile","Madagascar","Angola","Paraguay","Sweden","Djibouti","Tanzania","Vatican City","Moldova","Kazakhstan","Central African Republic","Equitorial Guinea","The Gambia","Pakistan","Serbia","Libya","Mozambique","Democratic Republic of the Congo","Rwanda","Kyrgyzstan","Syria","Turkmenistan","Spain","South Africa","Malawi","Czech Republic","Chad","France","Togo","Zimbabwe","Yemen","Mexico","Jamaica","Saint Kitts and Nevis","Bangladesh","Gabon","Cameroon","Myanmar","Palestine","Mauritius","Maldives","Palau","Saint Lucia","Dominica","United States of America","Ivory Coast","Liberia","Germany","Trinidad and Tobago","Sierra Leone","Lebanon","India","Poland","Greece","Burundi","Taiwan","North Korea","Somalia","Grenada","Israel","Luxembourg","Suriname"],"Yellow Onion":["Honduras","Nicaragua","Cuba","Niger","Costa Rica","Russia","Mali","North Macedonia","Tajikistan","Sri Lanka","Eritrea","Belarus","Morocco","Bahamas","Ukraine","Vietnam","Ethiopia"],"Red Onion":["Ecuador","Bolivia","Peru","Qatar","Iraq","Sudan","Dominican Republic","Malawi","Greece"],"White Onion":["Liechtenstein","El Salvador","France","Mexico","Kenya","Micronesia"],"Green Onion":["Venezuela","Panama","Tunisia","Ivory Coast"],"Leafy Greens":["Chad"],"Spring Onion":["Fiji","New Zealand","Vanuatu","Saint Kitts and Nevis","Saint Lucia","Lebanon"],"Scallions":["Niger","Kazakhstan","Eritrea","Colombia","Jamaica","Vietnam","Trinidad and Tobago","Micronesia","Taiwan","North Korea","Grenada"],"Shallot":["Malaysia","Indonesia","Belgium","Bosnia and Herzegovina","Monaco","Timor Leste","Thailand"],"Green Olives":["Cuba","Dominican Republic","Morocco"],"Black Olives":["Chile"],"Celery":["Venezuela","Algeria","Kazakhstan","Dominican Republic","Bosnia and Herzegovina","Germany","Trinidad and Tobago","Luxembourg"],"Celery Leaves":["Dominican Republic"],"Jalapeno":["Mozambique"],"Guajillo":["Mexico"],"Chili Pepper":["Uganda","Lesotho","Fiji","Central African Republic","Mozambique","Haiti","Rwanda","Vanuatu","Zimbabwe","Yemen","Saint Kitts and Nevis","Armenia","Gabon","Myanmar","Cambodia","Mauritius","Brunei"],"Thai Chili":["Vietnam","Timor Leste"],"Green Chili":["Bhutan","Bahrain","Pakistan","Libya","Namibia","Yemen","Bangladesh"],"Red Chilis":["Nepal","Namibia","Malawi","Cambodia","Timor Leste"],"Wiri Wiri Peppers":["Guyana"],"Hot Peppers":[],"Habanero":["Peru","Burkina Faso","Angola","The Gambia","Ivory Coast","Trinidad and Tobago"],"Sweet Habanero":["Venezuela"],"Scotch Bonnet":["Guinea","Guinea-Bissau","Jamaica","Cameroon","Liberia","Sierra Leone","Grenada"],"Cardoon":["Algeria"],"Zucchini":["Algeria"],"Turnip":["Algeria","France"],"Corn":["Panama","Equitorial Guinea","Colombia"],"Carrots":["Ireland","Hungary","Netherlands","Uzbekistan","Lesotho","Niger","Algeria","El Salvador","Afghanistan","Panama","Russia","Tanzania","Mali","Kazakhstan","Central African Republic","Tajikistan","The Gambia","Turkmenistan","Malawi","Morocco","Chad","France","Bosnia and Herzegovina","Palestine","Germany","Trinidad and Tobago","Somalia","Grenada","Luxembourg"],"Plantains":["Uganda","Venezuela","Belize","Papua New Guinea","Saint Kitts and Nevis","Seychelles","Grenada"],"Capers":["Tunisia","Colombia"],"Strawberries":["Australia"],"Peaches":["Malawi"],"Cranberries":["Latvia"],"Chayote":["Palau"],"Ackee":["Jamaica"],"Kiwi":["Australia"],"Pineapple":["Papua New Guinea","Mexico"],"Durian":["Brunei"],"Korean Pear":["North Korea"],"Breadfruit":["Saint Kitts and Nevis","Grenada"],"Apple":["South Africa","United States of America"],"Passionfruit":["Australia"],"Bananas":["Belize","Australia","Saint Lucia","Dominica"],"Banana Stem":["Myanmar"],"Lime":["Nauru","Indonesia","Fiji","Dominican Republic","Papua New Guinea","Vietnam","Myanmar","Cambodia","Dominica","Timor Leste","Thailand","Suriname"],"Coconut":["Nauru","Marshall Islands","Saint Kitts and Nevis"],"Orange":["Brazil"],"Lemon":["Uganda","Guinea","Fiji","Austria","Angola","Mozambique","South Africa","Turkey","Morocco","Oman","Vanuatu","Cyprus","Armenia","United States of America","Kenya","Lebanon"],"Small Red Beans":["Honduras","Nicaragua"],"Black Eyed Peas":["Ghana"],"Kidney Beans":["Tanzania","Haiti"],"Black Beans":["Venezuela","Brazil","Costa Rica"],"Baked Beans":["Lesotho"],"Lima Beans":["Equitorial Guinea"],"Pinto Beans":["Dominican Republic"],"Chickpeas":["Uzbekistan","Algeria","Iran","Egypt"],"White Beans":["Iran","North Macedonia"],"Fava Beans":["Algeria","Sudan","Luxembourg"],"Legume":["Algeria"],"Brown Lentil":["Egypt"],"Yellow Dal":["Nepal"],"Macadamia Nuts":["Indonesia","Marshall Islands"],"Candlenuts":["Timor Leste"],"Pistachios":["Afghanistan"],"Walnuts":["Syria"],"Cashews":["South Africa"],"Pine Nuts":["Palestine"],"Almonds":["Afghanistan","Jordan"],"Peanuts":["Malaysia","Chad","Zimbabwe","Cameroon","Benin","Thailand"],"Beef Stock":["Ireland","Hungary","Uganda","Finland","Chile","Sweden","South Africa","Canada"],"Chicken Stock":["Guinea","Bahrain","Indonesia","Panama","Angola","Central African Republic","Morocco","Zimbabwe","Saint Kitts and Nevis","Micronesia","India","Canada"],"Vegetable Stock":["Mali","Chad"],"Vegetable Juice":["Bosnia and Herzegovina"],"Worcestershire":["Ireland"],"Tobasco":["Honduras"],"Fish Sauce":["Vietnam","Myanmar","Cambodia","Palau","Thailand"],"Soy Sauce":["Venezuela","Sweden","Philippines","Taiwan","North Korea"],"Dijon Mustard":["Guinea"],"Hot Sauce":["Bahamas"],"Locust Beans":["Nigeria"],"Coconut Milk":["Guinea-Bissau","Indonesia","Fiji","Tanzania","Marshall Islands","Sri Lanka","Mozambique","Chad","Vanuatu","Papua New Guinea","Bangladesh","Cambodia","Samoa","Trinidad and Tobago","Micronesia","Seychelles","Grenada","Tonga","Kiribati"],"Dongchimi":["North Korea"],"Pickled Mustard Greens":["Taiwan"],"Spicy Bean Paste":["Taiwan"],"Hot Mustard Paste":["North Korea"],"Preserved Daikon Radish":["Thailand"],"Pressed Tofu":["Thailand"],"Sour Cabbage Leaves":["Moldova"],"Dried Apricots":["Malawi"],"Rice Powder":["Myanmar"],"Fish Paste":["Maldives"],"Shrimp Paste":["Myanmar","Cambodia","Brunei"],"Dried Shrimp":["Brunei","Thailand"],"Cassareep":["Guyana"],"Orange Peel":["Guyana"],"Hoison Sauce":["Vietnam"],"Palm Butter":["Gabon"],"Chili Sauce":["Vietnam"],"Corn Tortillas":["Mexico"],"Pineapple Juice":["Mexico"],"Achiote Paste":["Mexico"],"Dark Chocolate":["San Marino"],"Vanilla":["Australia"],"Vanilla Bean":["Seychelles"],"Nougat Chocolate":["San Marino"],"Gingersnap Cookies":["Germany"],"Crisco":["Malta"],"Ketchup":["Uruguay"],"Mayonnaise":["Bahamas","Uruguay"],"Sweet Pickles":["Bahamas","Armenia"],"Tahini":["Turkey","Israel"],"Sauerkraut":["Czech Republic","Poland"],"Apricot Jam":["South Africa"],"Coconut Cream":["Haiti"],"Dried Edible Roses":[],"Dried Chilis":["Taiwan"],"Lingonberry Jam":["Sweden"],"Harissa":[],"Prunes":["Poland"],"Raisins":["Uzbekistan","Afghanistan","Chile","Malawi","Poland"],"Applesauce":["Liechtenstein"],"Grape Leaves":["Azerbaijan"],"Peanut Butter":["Republic of the Congo","Niger","Mali","Central African Republic","Democratic Republic of the Congo","Chad","Zimbabwe"],"Peanut Powder":["Zambia"],"Tamarind Paste":["Thailand"],"Tamarind Juice":["Malaysia"],"Egusi":["Nigeria"],"Lemon Juice":["The Gambia","Iraq","Malawi","Turkey","Switzerland","Jordan","Greece"],"Lime Juice":["Kuwait","Peru","Bahamas","Saint Lucia"],"Orange Juice":["Suriname"],"Tomato Puree":["Cuba","Moldova","Rwanda","India"],"Italian Peeled Tomatoes":["Italy","Zimbabwe"],"Diced Tomatoes":["Hungary","Republic of the Congo","Djibouti","Iraq","Eritrea","Democratic Republic of the Congo"],"Tomato Sauce":["Kuwait","Belize","Egypt","Dominican Republic"],"Loomi":["Bahrain","Iran","Saudi Arabia","Qatar"],"Yellow Kroeung":["Cambodia"],"Chile Paste":["Malaysia"],"Ginger Paste":["Ivory Coast"],"Garlic Paste/Puree":["Ivory Coast"],"Ginger and Garlic Paste":["Pakistan","Bangladesh"],"Sambal Oelek":["Indonesia"],"Barley Flour":["Libya"],"Buckwheat Flour":["Slovenia"],"Millet Flour":["Chad"],"Teff Flour":["Eritrea"],"Malt Vinegar":["United Kingdom"],"White Vinegar":["El Salvador","Bolivia","Egypt","Philippines","Namibia","South Africa","Oman","Australia","Mexico","Dominica","North Korea","Croatia"],"Red Wine Vinegar":["Germany","Greece"],"Fruit Vinegar":["Dominican Republic","Sri Lanka"],"Masa Harina":["El Salvador"],"Rice Flour":["Togo"],"Corn Flour":["Montenegro","Paraguay","Tanzania","Togo","Zimbabwe"],"Cornmeal":["Moldova","Romania","Togo","Antigua and Barbuda","Zambia"],"Refried Beans":["El Salvador"],"Salsa":["Mexico"],"Salsa Lizano":["Costa Rica"],"Shortening":["Chile"],"Unflavored Gelatin":[],"Breadcrumbs":["Bolivia","Austria","Sweden"],"Tomato Paste":["Ireland","Cuba","Republic of the Congo","Italy","Burkina Faso","Iran","Saudi Arabia","Russia","Angola","Mali","The Gambia","Libya","Democratic Republic of the Congo","Liberia","Sierra Leone","Taiwan","Somalia","Suriname"],"Phyllo Dough":["Bulgaria"],"French Bread":["Switzerland"],"Wheat Grains":["United Arab Emirates"],"White Bread":["South Africa","Czech Republic"],"Rye Bread":["Latvia"],"Sweet Waffles":["San Marino"],"Sandwich Buns":["Uruguay"],"Puff Pastry":["New Zealand"],"Maslouka":["Tunisia"],"Bulgur":["Syria","Lebanon","Burundi"],"Couscous":["Algeria","Morocco"],"Flour Tortillas":["Honduras"],"Pasta":["Egypt"],"Pita":["Greece"],"Flat Bread":["Serbia","Armenia"],"Wheat Noodles":["Taiwan"],"Naengmyeon Noodles":["North Korea"],"All Purpose Flour":["Bulgaria","Hungary","Nauru","Liechtenstein","Italy","Georgia","Austria","Belize","Chile","Sweden","Vatican City","Kazakhstan","Marshall Islands","Norway","Libya","Denmark","Kyrgyzstan","Syria","Malawi","Czech Republic","Morocco","Bahamas","Vanuatu","Malta","United Kingdom","Ukraine","Saint Kitts and Nevis","Dominica","Monaco","Samoa","Switzerland","Kosovo","Canada","Croatia","Israel"],"White Rice":["Venezuela","Costa Rica","Bolivia","Albania","Ghana","Dominican Republic"],"Long-Grain Rice":["Nicaragua","Malaysia","Uzbekistan","Burkina Faso","Djibouti","Moldova","Qatar","The Gambia","Jordan"],"Short-Grain Rice":["Egypt"],"Jasmine Rice":["Haiti"],"Basmati Rice":["Bahrain","Kuwait","Saudi Arabia","Tajikistan","Sri Lanka","Turkmenistan","Oman","Bangladesh","India"],"Sela Rice":["Afghanistan"],"Rice Noodles":["Myanmar","Thailand"],"Vermicelli":["Indonesia","Egypt"],"Banh Pho":["Vietnam"],"Turkish Seasoning":["Turkey"],"Medium Grain Rice":["Guinea-Bissau","Azerbaijan","Palestine"],"Caraway Seeds":["Hungary","Czech Republic"],"Pepper Leaves":["Palau"],"Black Mustard":["Sri Lanka"],"Cumin":["Honduras","Cuba","Ecuador","Venezuela","Kuwait","Egypt","Chile","Angola","Djibouti","Tajikistan","Qatar","Pakistan","Sudan","Sri Lanka","Turkey","Morocco","Oman","Yemen","Mexico","Palestine","India","Greece","Somalia"],"Cumin Seeds":["Uzbekistan","Afghanistan","Nepal","Malawi","Oman","Yemen","United Arab Emirates"],"Coriander":["Uzbekistan","Indonesia","Kuwait","Fiji","Georgia","Nepal","Saudi Arabia","Russia","Angola","Qatar","Pakistan","Dominican Republic","Sri Lanka","Eritrea","South Africa","Morocco","Yemen","Palestine","Mauritius","Kenya","India","Timor Leste","Burundi","Somalia"],"Coriander Seeds":["Malawi","Oman"],"Oregano":["Cuba","El Salvador","Albania","Panama","Dominican Republic","Mozambique","Namibia","Cyprus","Poland","Greece"],"Tarragon":["France"],"Mexican Oregano":["Mexico"],"Herbes de Provence":["Mali","Poland"],"Adobo":["Cuba"],"Bhar":["Syria"],"Curry Powder":["Guinea-Bissau","Lesotho","Niger","Iraq","South Africa","Vanuatu","Papua New Guinea","Mauritius","Kenya","Micronesia","Grenada","Kiribati"],"Paprika":["Hungary","Niger","Algeria","Saudi Arabia","North Macedonia","Moldova","Serbia","Sri Lanka","Eritrea","Morocco","Chad","Myanmar","Switzerland","India","Greece"],"Smoked Paprika":["Lesotho","Angola","Mozambique","Ivory Coast","Kenya","Greece"],"Nutmeg":["Netherlands","Qatar","Eritrea","Denmark","Switzerland","India","Seychelles","Benin","Suriname"],"Onion Powder":["Guinea-Bissau","Haiti"],"Garlic Powder":["Guinea-Bissau","Haiti","Cyprus"],"Chili Powder":["Guinea-Bissau","Ecuador","Eritrea","Libya","Malawi","Chad","Oman","Vanuatu","Bangladesh","India","Benin"],"Red Pepper Flakes":["Republic of the Congo","Chile","Democratic Republic of the Congo","Dominica"],"Chili Flakes":["Chad","Bosnia and Herzegovina","Myanmar","Thailand"],"Cayenne Pepper":["Lesotho","Algeria","Djibouti","Central African Republic","Qatar","Pakistan","Serbia","Sri Lanka","South Africa","Turkey","Morocco","Gabon","Kenya","Liberia","Sierra Leone"],"Kalonji Seeds":["Ethiopia"],"Fenugreek Seeds":["Libya","Ethiopia"],"Fenugreek Powder":["Eritrea","Yemen"],"Ground Ginger":["Guinea-Bissau","Malaysia","Kuwait","Angola","Qatar","Eritrea","South Africa","Morocco","Benin","Burundi"],"Mixed Herbs":["Kyrgyzstan","South Africa"],"BBQ Spice":["Zimbabwe"],"Garam Masala":["Afghanistan","India"],"Baharat":["Bahrain"],"Hawaij":[],"Green Seasoning":["Trinidad and Tobago","Grenada"],"Epis":["Haiti"],"Seven Spice":["Lebanon"],"Jerusalem Spice Mix":["Israel"],"Berbere":["Ethiopia"],"Chinese Herb Packet":[],"Qatari Machboos Spice Blend":[],"Turmeric":["Bahrain","Uzbekistan","Indonesia","Kuwait","Nepal","Iran","Saudi Arabia","Qatar","Libya","South Africa","Malawi","Oman","Vanuatu","Yemen","Myanmar","Palestine","Jordan","India","Timor Leste","Burundi","Suriname"],"Juniper Berries":["Poland"],"Allspice":["Kuwait","Finland","Eritrea","Palestine","Jordan","Poland"],"Sumac":["Kuwait","Lebanon"],"Fennel Seeds":["Sri Lanka"],"Fennel Powder":["India"],"Cardamom Pods":["Bahrain","Afghanistan","Nepal","Saudi Arabia","Oman","United Arab Emirates","Bangladesh","India","Seychelles","Burundi"],"Cardamom Seeds":["Sri Lanka","Eritrea","Ethiopia"],"Ground Cardamom":["Kuwait","Djibouti","Qatar","Palestine","Jordan"],"Cinnamon Leaves":["Seychelles"],"Cinnamon Stick":["Bahrain","Afghanistan","Nepal","Saudi Arabia","Sri Lanka","Oman","United Arab Emirates","Bangladesh","Guyana","Jordan","India"],"Star Anise":["Oman","Vietnam"],"Ground Cinnamon":["Algeria","Iran","Djibouti","Qatar","Eritrea","Malawi","Morocco","Palestine","Mauritius"],"4 Epices":["Eritrea"],"Ground Cloves":["Bahrain","Saudi Arabia","Djibouti","Qatar","Haiti","Oman","United Arab Emirates","Palestine","Mauritius"],"Cloves":["Afghanistan","Nepal","Sri Lanka","Eritrea","Malawi","Oman","France","Mexico","Vietnam","Bangladesh","Guyana","Germany","Jordan","India","Luxembourg"],"Guascas":["Colombia"],"Dried Thyme":["Ireland","Guinea-Bissau","Lesotho","Niger","Angola","France"],"Poppy Seeds":["Malawi"],"Mustard Seeds":["Malawi"],"Lemongrass":["Indonesia","Myanmar","Timor Leste"],"Peppercorns":["Nepal","Russia","Philippines","Sri Lanka","Norway","Malawi","Oman","Bosnia and Herzegovina","Maldives","Germany","Jordan","North Korea"],"Saffron":["Grenada"],"Jumbo/Bouillon":["The Gambia","Haiti","Rwanda","Nigeria","Kenya","Sierra Leone"],"Chicken Bouillon":["Guinea","Lesotho","Niger","Burkina Faso","Angola","Mozambique","Colombia","Palau","Ivory Coast","Liberia","Sierra Leone","Suriname"],"Bay Leaves":["Ireland","Guinea","Guinea-Bissau","Malaysia","Botswana","Brazil","Niger","Saudi Arabia","Russia","Angola","Philippines","The Gambia","Oman","Cyprus","Bosnia and Herzegovina","Bangladesh","Palestine","Ivory Coast","Germany","Jordan","Poland","Timor Leste","Luxembourg"],"Curry Leaves":["Sri Lanka","Mauritius","Maldives"],"Parsley":["Ireland","Bahrain","Venezuela","Italy","Kuwait","Niger","Georgia","Tunisia","Angola","Moldova","Kazakhstan","The Gambia","Belgium","Denmark","Namibia","Turkey","Bahamas","France","Cyprus","Malta","Armenia","Palestine","Saint Lucia","Liberia","Micronesia","Jordan","Lebanon","Grenada","Israel","Suriname"],"Basil":["Italy","Equitorial Guinea","Mozambique","Bosnia and Herzegovina","Liberia"],"Asian Basil":["Vietnam"],"Rosemary":["Paraguay","United States of America","Poland"],"Cilantro":["Honduras","Bahrain","Ecuador","Azerbaijan","Venezuela","Indonesia","Costa Rica","Peru","Madagascar","Pakistan","Dominican Republic","Eritrea","Morocco","Mexico","Colombia","Armenia","Vietnam","Myanmar","Micronesia","Taiwan","Somalia"],"Culantro":["Panama","Vietnam","Grenada"],"Quillquiña":["Bolivia"],"Dill":["Azerbaijan","Russia","Moldova"],"Chives":["Georgia","Kazakhstan","Yemen","Thailand"],"Thyme":["Dominican Republic","Haiti","Jamaica","Saint Lucia","Dominica","United States of America","Ivory Coast","Trinidad and Tobago","Micronesia","Poland","Grenada"],"Savory":["Luxembourg"],"Sage":["United States of America","Poland"],"Mint":["Azerbaijan","Venezuela","Pakistan","Lebanon"],"Kaffir Lime Leaves":["Indonesia","Vanuatu","Timor Leste"],"Allspice Berries":["Finland"],"Ginger":["Malaysia","Bahrain","Republic of the Congo","Indonesia","Lesotho","Madagascar","Sri Lanka","Democratic Republic of the Congo","Vanuatu","Togo","Saint Kitts and Nevis","Vietnam","Cameroon","Myanmar","Palestine","Mauritius","Palau","Liberia","Sierra Leone","India","Timor Leste","Taiwan","North Korea"],"Galangal":["Timor Leste"],"Garlic":["Ireland","Netherlands","Honduras","Nicaragua","Uganda","Guinea","Malaysia","Bhutan","Bahrain","Cuba","Azerbaijan","Venezuela","Republic of the Congo","Italy","Uzbekistan","Indonesia","Brazil","Kuwait","Lesotho","Niger","Afghanistan","Burkina Faso","Albania","Panama","Iran","Egypt","Saudi Arabia","Madagascar","Russia","Angola","Philippines","Mali","Kazakhstan","Central African Republic","Tajikistan","Equitorial Guinea","Qatar","The Gambia","Belgium","Serbia","Dominican Republic","Sri Lanka","Eritrea","Libya","Mozambique","Namibia","Democratic Republic of the Congo","Kyrgyzstan","South Africa","Czech Republic","Turkey","Morocco","Chad","Oman","Vanuatu","Togo","Zimbabwe","Yemen","Mexico","Ukraine","Colombia","Saint Kitts and Nevis","Armenia","Bosnia and Herzegovina","Gabon","Cameroon","Myanmar","Mauritius","Maldives","Palau","Saint Lucia","Dominica","United States of America","Kenya","Liberia","Switzerland","Trinidad and Tobago","Micronesia","Sierra Leone","Jordan","India","Greece","Ethiopia","Timor Leste","Thailand","Taiwan","North Korea","Somalia","Grenada","Luxembourg"],"Olive Oil":["Ireland","Bulgaria","Guinea","Italy","Niger","Albania","Panama","Egypt","Madagascar","Paraguay","Vatican City","Kazakhstan","Equitorial Guinea","Iraq","Belgium","Dominican Republic","Eritrea","Libya","Mozambique","Namibia","Haiti","Belarus","Spain","Turkey","Morocco","Cyprus","Malta","Zimbabwe","Monaco","Trinidad and Tobago","Jordan","Lebanon","Greece","Grenada","Israel"],"Oil":["Bahrain","Venezuela","Uzbekistan","Lesotho","Algeria","Burkina Faso","Iran","Egypt","Philippines","Chad","Oman","Papua New Guinea","Yemen","Jamaica","Mauritius","Palau","Taiwan","Croatia","Israel"],"Coconut Oil":["Ghana","Sri Lanka","Vanuatu","Saint Lucia"],"Rapeseed Oil":["Poland"],"Sesame Oil":["Sudan"],"Sunflower Oil":["Ecuador","Ukraine"],"Red Palm Oil":["Republic of the Congo","Angola","Democratic Republic of the Congo","Nigeria","Togo","Gabon","Sierra Leone"],"Canola Oil":["Bolivia","Kazakhstan","Dominican Republic","Kenya"],"Peanut Oil":["Myanmar","Canada"],"Oil for Frying":["Uganda","Malaysia","Nauru","Lithuania","Egypt","United Kingdom","Dominica"],"Vegetable Oil":["Honduras","Nicaragua","Guinea-Bissau","Malaysia","Venezuela","Italy","Indonesia","Brazil","Algeria","El Salvador","Costa Rica","Afghanistan","Bolivia","Chile","Tunisia","Angola","Tanzania","Mali","North Macedonia","Moldova","Tajikistan","Qatar","The Gambia","Dominican Republic","Rwanda","Kyrgyzstan","Syria","Turkmenistan","Bahamas","Vanuatu","Saint Kitts and Nevis","Cameroon","Palestine","Liberia","Samoa","Micronesia","Timor Leste","Kiribati"],"Guinness":["Ireland"],"Shaoxing Wine":["Taiwan"],"Light Beer":["United Kingdom"],"Vodka":["Bosnia and Herzegovina"],"Sloe Gin":["Latvia"],"Kirsch":["Switzerland"],"Moselle Wine":["Luxembourg"],"White Wine":["Cuba","Kazakhstan","Belgium","Switzerland","Poland"],"Red Wine":["Ireland","Germany"],"Black Pepper":["Ireland","Hungary","Netherlands","Nauru","Botswana","Azerbaijan","Liechtenstein","Venezuela","Italy","Lithuania","Indonesia","Brazil","Niger","Algeria","Bolivia","Georgia","Burkina Faso","Albania","Panama","Austria","Belize","Iran","Egypt","Saudi Arabia","Chile","Russia","Tunisia","Solomon Islands","Mali","Vatican City","North Macedonia","Moldova","Kazakhstan","Central African Republic","Qatar","New Zealand","The Gambia","Belgium","Serbia","Sudan","Dominican Republic","Libya","Denmark","Mozambique","Namibia","Nigeria","Czech Republic","Morocco","Bahamas","Chad","Oman","Vanuatu","France","Togo","Cyprus","Malta","Uruguay","Mexico","Colombia","Jamaica","Saint Kitts and Nevis","Vietnam","Gabon","Myanmar","Palestine","Saint Lucia","Monaco","United States of America","Ivory Coast","Liberia","Switzerland","Germany","Trinidad and Tobago","Micronesia","Sierra Leone","India","Poland","Seychelles","Benin","Greece","Burundi","Canada","Somalia","Croatia","Grenada","Suriname"],"White Pepper":["Angola","Sweden","Eritrea","Mozambique"],"Salt":["Ireland","Bulgaria","Hungary","Netherlands","Honduras","Nicaragua","Guinea-Bissau","Malaysia","Nauru","Bahrain","Cuba","Botswana","Ecuador","Azerbaijan","Liechtenstein","Venezuela","Republic of the Congo","Italy","Uzbekistan","Lithuania","Indonesia","Brazil","Kuwait","Finland","Niger","Fiji","Algeria","El Salvador","Costa Rica","Afghanistan","Bolivia","Georgia","Peru","Burkina Faso","Albania","Panama","Austria","Nepal","Belize","Montenegro","Iran","Egypt","Saudi Arabia","Chile","Madagascar","Russia","Tunisia","Angola","Solomon Islands","Paraguay","Sweden","Philippines","Djibouti","Tanzania","Mali","Vatican City","Moldova","Kazakhstan","Central African Republic","Tajikistan","Equitorial Guinea","Qatar","New Zealand","Ghana","The Gambia","Marshall Islands","Iraq","Pakistan","Belgium","Serbia","Sudan","Dominican Republic","Sri Lanka","Norway","Eritrea","Libya","Denmark","Mozambique","Namibia","Haiti","Belarus","Democratic Republic of the Congo","Rwanda","Kyrgyzstan","Nigeria","Syria","Turkmenistan","Spain","South Africa","Malawi","Czech Republic","Turkey","Morocco","Bahamas","Chad","Oman","Vanuatu","Romania","France","Papua New Guinea","Togo","Cyprus","Malta","Uruguay","United Kingdom","Yemen","Mexico","Colombia","Saint Kitts and Nevis","Antigua and Barbuda","Armenia","Vietnam","Bosnia and Herzegovina","Bangladesh","Guyana","Gabon","Cameroon","Cambodia","Palestine","Maldives","Dominica","Monaco","United States of America","Ivory Coast","Liberia","Zambia","Samoa","Germany","Trinidad and Tobago","Micronesia","Sierra Leone","Jordan","Lebanon","Poland","Benin","Greece","Kosovo","Ethiopia","Timor Leste","Brunei","North Korea","Somalia","Croatia","Slovenia","Israel","Kiribati","Suriname"],"Seasoned Salt":["North Macedonia"],"Brown Sugar":["Kuwait","Marshall Islands","Sri Lanka","Guyana","Seychelles","Israel","Suriname"],"Rock Sugar":["Vietnam"],"Palm Sugar":["Cambodia","Timor Leste","Thailand"],"Icing Sugar":["Australia"],"Caster Sugar":["Australia"],"Sugar":["Ireland","Malaysia","Cuba","Afghanistan","Georgia","Russia","Latvia","Philippines","Dominican Republic","Malawi","Czech Republic","Togo","United Arab Emirates","Samoa","Burundi","Taiwan","North Korea"],"Baking Soda":["Bulgaria","Egypt","North Macedonia","Ghana","Serbia","Eritrea","Zambia"],"Baking Powder":["Belize","South Africa","Togo","United Kingdom"],"Sago Starch":["Brunei"],"Cornstarch":["Sweden","Australia","Canada"],"Active Yeast":["Eritrea","Czech Republic","Togo","Samoa","Israel"],"Instant Yeast":["Georgia"],"Honey":["Bulgaria","Marshall Islands","Morocco","United Arab Emirates","Greece"],"Vitamin C":[],"Transglutaminase":["Kazakhstan"],"Banana Leaf":["Vanuatu","Timor Leste"],"Ti Leaves":["Tonga"],"Carbonated Water":["Bulgaria","Honduras","Lithuania"],"Yellow Food Coloring":["Oman"],"Orange Food Coloring":["Oman"],"Rose Water":["Bahrain"],"Orange Flower Water":[],"Water":["Ireland","Nicaragua","Malaysia","Bhutan","Botswana","Ecuador","Venezuela","Republic of the Congo","Italy","Uzbekistan","Kuwait","Algeria","El Salvador","Georgia","Burkina Faso","Albania","Panama","Belize","Montenegro","Egypt","Saudi Arabia","Chile","Madagascar","Russia","Solomon Islands","Philippines","Djibouti","Tanzania","Kazakhstan","Qatar","New Zealand","Ghana","The Gambia","Marshall Islands","Pakistan","Dominican Republic","Sri Lanka","Norway","Eritrea","Libya","Democratic Republic of the Congo","Kyrgyzstan","Syria","Turkmenistan","Malawi","Czech Republic","Turkey","Chad","Oman","Romania","Togo","Malta","Zimbabwe","Yemen","Colombia","Saint Kitts and Nevis","Antigua and Barbuda","Bangladesh","Guyana","Myanmar","Maldives","Palau","Dominica","Monaco","Zambia","Samoa","Trinidad and Tobago","Jordan","Benin","Timor Leste","Brunei","Canada","Thailand","Taiwan","Croatia","Slovenia","Israel"]}

const countryIngredients = {"Ireland":["Chuck Beef/Stew Meat","Unsalted Butter","Russet Potatoes","Onion","Carrots","Beef Stock","Worcestershire","Tomato Paste","Dried Thyme","Bay Leaves","Parsley","Garlic","Olive Oil","Guinness","Red Wine","Black Pepper","Salt","Sugar","Water"],"Bulgaria":["Feta","Yogurt","Unsalted Butter","Eggs","Phyllo Dough","All Purpose Flour","Olive Oil","Salt","Baking Soda","Honey","Carbonated Water"],"Hungary":["Chuck Beef/Stew Meat","Rookwurst","Unsalted Butter","Potatoes","Onion","Carrots","Beef Stock","Diced Tomatoes","All Purpose Flour","Caraway Seeds","Paprika","Black Pepper","Salt"],"Netherlands":["Unsalted Butter","Leek","Kale","Rutabaga","Sweet Potato/Yam","Butternut Squash","Russet Potatoes","Onion","Carrots","Nutmeg","Garlic","Black Pepper","Salt"],"Honduras":["Cotija","Green Bell Pepper","Yellow Onion","Small Red Beans","Tobasco","Flour Tortillas","Cumin","Cilantro","Garlic","Vegetable Oil","Salt","Carbonated Water"],"Nicaragua":["Green Bell Pepper","Yellow Onion","Small Red Beans","Long-Grain Rice","Garlic","Vegetable Oil","Salt","Water"],"Uganda":["Ground Beef","Tomatoes","Green Bell Pepper","Onion","Chili Pepper","Plantains","Lemon","Beef Stock","Garlic","Oil for Frying"],"Guinea":["Chicken","Onion","Scotch Bonnet","Lemon","Chicken Stock","Dijon Mustard","Chicken Bouillon","Bay Leaves","Garlic","Olive Oil"],"Guinea-Bissau":["Tomatoes","Red Bell Pepper","Onion","Scotch Bonnet","Coconut Milk","Medium Grain Rice","Curry Powder","Onion Powder","Garlic Powder","Chili Powder","Ground Ginger","Dried Thyme","Bay Leaves","Vegetable Oil","Salt"],"Malaysia":["Anchovies","Eggs","Cucumber","Onion","Shallot","Peanuts","Tamarind Juice","Chile Paste","Long-Grain Rice","Ground Ginger","Bay Leaves","Ginger","Garlic","Oil for Frying","Vegetable Oil","Salt","Sugar","Water"],"Nauru":["Whitefish","Eggs","Lime","Coconut","All Purpose Flour","Oil for Frying","Black Pepper","Salt"],"Bhutan":["Yak Cheese","White Cheese","Unsalted Butter","Tomatoes","Onion","Green Chili","Garlic","Water"],"Bahrain":["Chicken","Ghee","Tomatoes","Onion","Green Chili","Chicken Stock","Loomi","Basmati Rice","Baharat","Turmeric","Cardamom Pods","Cinnamon Stick","Ground Cloves","Parsley","Cilantro","Ginger","Garlic","Oil","Salt","Rose Water"],"Cuba":["Flank Steak","Red Bell Pepper","Green Bell Pepper","Yellow Onion","Green Olives","Tomato Puree","Tomato Paste","Cumin","Oregano","Adobo","Garlic","White Wine","Salt","Sugar"],"Botswana":["Chuck Beef/Stew Meat","Onion","Bay Leaves","Black Pepper","Salt","Water"],"Ecuador":["Tuna","Cassava","Tomatoes","Red Onion","Cumin","Chili Powder","Cilantro","Sunflower Oil","Salt","Water"],"Azerbaijan":["Ground Lamb","Yogurt","Ghee","Onion","Grape Leaves","Medium Grain Rice","Cilantro","Dill","Mint","Garlic","Black Pepper","Salt"],"Liechtenstein":["Gruyere","Emmanthaler","Fontina","Whole Milk","Unsalted Butter","Eggs","White Onion","Applesauce","All Purpose Flour","Black Pepper","Salt"],"Venezuela":["Flank Steak","Tomatoes","Red Bell Pepper","Green Bell Pepper","Onion","Green Onion","Celery","Sweet Habanero","Plantains","Black Beans","Soy Sauce","White Rice","Cumin","Parsley","Cilantro","Mint","Garlic","Oil","Vegetable Oil","Black Pepper","Salt","Water"],"Republic of the Congo":["Chicken","Onion","Peanut Butter","Diced Tomatoes","Tomato Paste","Red Pepper Flakes","Ginger","Garlic","Red Palm Oil","Salt","Water"],"Italy":["Veal Stew Meat","Pork Neck","Italian-style Sausage","Ricotta","Parmigiano-Reggiano","Fresh Mozzarella","Eggs","Italian Peeled Tomatoes","Tomato Paste","All Purpose Flour","Parsley","Basil","Garlic","Olive Oil","Vegetable Oil","Black Pepper","Salt","Water"],"Uzbekistan":["Lamb Meat","Onion","Carrots","Chickpeas","Raisins","Long-Grain Rice","Cumin Seeds","Coriander","Turmeric","Garlic","Oil","Salt","Water"],"Lithuania":["Ground Beef","Bacon","Ground Pork","Sour Cream","Russet Potatoes","Onion","Oil for Frying","Black Pepper","Salt","Carbonated Water"],"Indonesia":["Chicken","Eggs","Shallot","Lime","Macadamia Nuts","Chicken Stock","Coconut Milk","Sambal Oelek","Vermicelli","Coriander","Turmeric","Lemongrass","Cilantro","Kaffir Lime Leaves","Ginger","Garlic","Vegetable Oil","Black Pepper","Salt"],"Brazil":["Carne Seca","Bacon","Paio Sausage","Calabresa Sausage","Onion","Orange","Black Beans","Bay Leaves","Garlic","Vegetable Oil","Black Pepper","Salt"],"Kuwait":["Shrimp","Ghee","Tomatoes","Onion","Lime Juice","Tomato Sauce","Basmati Rice","Cumin","Coriander","Ground Ginger","Turmeric","Allspice","Sumac","Ground Cardamom","Parsley","Garlic","Salt","Brown Sugar","Water"],"Lesotho":["Tomatoes","Cabbage","Red Bell Pepper","Green Bell Pepper","Onion","Chili Pepper","Carrots","Baked Beans","Curry Powder","Smoked Paprika","Cayenne Pepper","Dried Thyme","Chicken Bouillon","Ginger","Garlic","Oil"],"Finland":["Chuck Beef/Stew Meat","Pork Shoulder","Lamb Meat","Onion","Beef Stock","Allspice","Allspice Berries","Salt"],"Niger":["Chicken","Tomatoes","Yellow Onion","Scallions","Carrots","Peanut Butter","Curry Powder","Paprika","Dried Thyme","Chicken Bouillon","Bay Leaves","Parsley","Garlic","Olive Oil","Black Pepper","Salt"],"Fiji":["Walu","Tomatoes","Onion","Spring Onion","Chili Pepper","Lime","Lemon","Coconut Milk","Coriander","Salt"],"Algeria":["Unsalted Butter","Tomatoes","Cabbage","Potatoes","Onion","Celery","Cardoon","Zucchini","Turnip","Carrots","Chickpeas","Fava Beans","Legume","Couscous","Paprika","Cayenne Pepper","Ground Cinnamon","Oil","Vegetable Oil","Black Pepper","Salt","Water"],"El Salvador":["Pork Shoulder","Mozzarella","Tomatoes","Cabbage","Green Bell Pepper","White Onion","Carrots","White Vinegar","Masa Harina","Refried Beans","Oregano","Vegetable Oil","Salt","Water"],"Costa Rica":["Red Bell Pepper","Yellow Onion","Black Beans","Salsa Lizano","White Rice","Cilantro","Vegetable Oil","Salt"],"Afghanistan":["Leg of Lamb","Onion","Carrots","Pistachios","Almonds","Raisins","Sela Rice","Cumin Seeds","Garam Masala","Cardamom Pods","Cinnamon Stick","Cloves","Garlic","Vegetable Oil","Salt","Sugar"],"Bolivia":["Ground Beef","Eggs","Tomatoes","Yukon Gold Potatoes","Green Peppers","Red Onion","White Vinegar","Breadcrumbs","White Rice","Quillquiña","Canola Oil","Vegetable Oil","Black Pepper","Salt"],"Georgia":["Feta","Ricotta","Mozzarella","Milk","Unsalted Butter","Eggs","All Purpose Flour","Coriander","Parsley","Chives","Black Pepper","Salt","Sugar","Instant Yeast","Water"],"Peru":["Corvina","Red Onion","Habanero","Lime Juice","Cilantro","Salt"],"Burkina Faso":["Beef","Tomatoes","Onion","Habanero","Tomato Paste","Long-Grain Rice","Chicken Bouillon","Garlic","Oil","Black Pepper","Salt","Water"],"Albania":["Lamb Meat","Unsalted Butter","White Rice","Oregano","Garlic","Olive Oil","Black Pepper","Salt","Water"],"Panama":["Chicken","Cassava","Potatoes","Onion","Green Onion","Corn","Carrots","Chicken Stock","Oregano","Culantro","Garlic","Olive Oil","Black Pepper","Salt","Water"],"Austria":["Veal","Milk","Clarified Butter","Eggs","Lemon","Breadcrumbs","All Purpose Flour","Black Pepper","Salt"],"Nepal":["Onion","Red Chilis","Yellow Dal","Cumin Seeds","Coriander","Turmeric","Cardamom Pods","Cinnamon Stick","Cloves","Peppercorns","Salt"],"Belize":["Pig Tail","Fish","Eggs","Cassava","Sweet Potato/Yam","Tomatoes","Green Peppers","Onion","Plantains","Bananas","Tomato Sauce","All Purpose Flour","Black Pepper","Salt","Baking Powder","Water"],"Montenegro":["Sirene","Unsalted Butter","Potatoes","Corn Flour","Salt","Water"],"Iran":["Beef","Tomatoes","Potatoes","Green Bell Pepper","Onion","Chickpeas","White Beans","Loomi","Tomato Paste","Turmeric","Ground Cinnamon","Garlic","Oil","Black Pepper","Salt"],"Egypt":["Onion","Chickpeas","Brown Lentil","Tomato Sauce","White Vinegar","Pasta","Short-Grain Rice","Vermicelli","Cumin","Garlic","Olive Oil","Oil","Oil for Frying","Black Pepper","Salt","Baking Soda","Water"],"Saudi Arabia":["Chicken","Ghee","Onion","Loomi","Tomato Paste","Basmati Rice","Coriander","Paprika","Turmeric","Cardamom Pods","Cinnamon Stick","Ground Cloves","Bay Leaves","Garlic","Black Pepper","Salt","Water"],"Chile":["Ground Beef","Milk","Eggs","Onion","Black Olives","Beef Stock","Raisins","Shortening","All Purpose Flour","Cumin","Red Pepper Flakes","Vegetable Oil","Black Pepper","Salt","Water"],"Madagascar":["Chuck Beef/Stew Meat","Chicken","Shrimp","Kale","Spinach","Tomatoes","Onion","Cilantro","Ginger","Garlic","Olive Oil","Salt","Water"],"Russia":["Chuck Beef/Stew Meat","Marrow Bones","Sour Cream","Beet","Cabbage","Potatoes","Mushrooms","Yellow Onion","Carrots","Tomato Paste","Coriander","Peppercorns","Bay Leaves","Dill","Garlic","Black Pepper","Salt","Sugar","Water"],"Tunisia":["Tuna","Parmigiano-Reggiano","Eggs","Russet Potatoes","Green Onion","Capers","Maslouka","Parsley","Vegetable Oil","Black Pepper","Salt"],"Angola":["Chicken","Okra","Butternut Squash","Tomatoes","Onion","Habanero","Lemon","Chicken Stock","Tomato Paste","Cumin","Coriander","Smoked Paprika","Ground Ginger","Dried Thyme","Chicken Bouillon","Bay Leaves","Parsley","Garlic","Red Palm Oil","Vegetable Oil","White Pepper","Salt"],"Solomon Islands":["Taro","Black Pepper","Salt","Water"],"Latvia":["Ricotta","Heavy Cream","Cranberries","Rye Bread","Sloe Gin","Sugar"],"Paraguay":["Queso Paraguay","Milk","Eggs","Onion","Corn Flour","Rosemary","Olive Oil","Salt"],"Sweden":["Ground Beef","Ground Pork","Milk","Heavy Cream","Unsalted Butter","Eggs","Onion","Beef Stock","Soy Sauce","Lingonberry Jam","Breadcrumbs","All Purpose Flour","White Pepper","Salt","Cornstarch"],"Philippines":["Chicken","Soy Sauce","White Vinegar","Peppercorns","Bay Leaves","Garlic","Oil","Salt","Sugar","Water"],"Djibouti":["Lamb Meat","Ghee","Onion","Diced Tomatoes","Long-Grain Rice","Cumin","Cayenne Pepper","Ground Cardamom","Ground Cinnamon","Ground Cloves","Salt","Water"],"Tanzania":["Tomatoes","Onion","Carrots","Kidney Beans","Coconut Milk","Corn Flour","Vegetable Oil","Salt","Water"],"Mali":["Beef","Tomatoes","Potatoes","Eggplant","Yellow Onion","Carrots","Vegetable Stock","Peanut Butter","Tomato Paste","Herbes de Provence","Garlic","Vegetable Oil","Black Pepper","Salt"],"Vatican City":["Prosciutto","Parmigiano-Reggiano","Heavy Cream","Unsalted Butter","Eggs","Peas","Onion","All Purpose Flour","Olive Oil","Black Pepper","Salt"],"North Macedonia":["Yellow Onion","White Beans","Paprika","Vegetable Oil","Black Pepper","Seasoned Salt","Baking Soda"],"Moldova":["Bacon","Ground Pork","Onion","Sour Cabbage Leaves","Tomato Puree","Cornmeal","Long-Grain Rice","Paprika","Parsley","Dill","Vegetable Oil","Black Pepper","Salt"],"Kazakhstan":["Leg of Lamb","Rack of Lamb","Yogurt","Unsalted Butter","Egg Yolks","Eggs","Baby Potatoes","Onion","Scallions","Celery","Carrots","All Purpose Flour","Parsley","Chives","Garlic","Olive Oil","Canola Oil","White Wine","Black Pepper","Salt","Transglutaminase","Water"],"Central African Republic":["Tomatoes","Green Peppers","Onion","Chili Pepper","Carrots","Chicken Stock","Peanut Butter","Cayenne Pepper","Garlic","Black Pepper","Salt"],"Tajikistan":["Lamb Meat","Yellow Onion","Carrots","Basmati Rice","Cumin","Garlic","Vegetable Oil","Salt"],"Equitorial Guinea":["Tomatoes","Onion","Corn","Lima Beans","Basil","Garlic","Olive Oil","Salt"],"Qatar":["Chicken","Ghee","Tomatoes","Red Onion","Loomi","Long-Grain Rice","Cumin","Coriander","Nutmeg","Cayenne Pepper","Ground Ginger","Turmeric","Ground Cardamom","Ground Cinnamon","Ground Cloves","Garlic","Vegetable Oil","Black Pepper","Salt","Water"],"New Zealand":["Bacon","Egg Yolks","Eggs","Spring Onion","Puff Pastry","Black Pepper","Salt","Water"],"Ghana":["Sorghum Stems","Black Eyed Peas","White Rice","Coconut Oil","Salt","Baking Soda","Water"],"The Gambia":["Fish","Saltfish","Cassava","Sweet Potato/Yam","Butternut Squash","Tomatoes","Cabbage","Eggplant","Onion","Habanero","Carrots","Lemon Juice","Tomato Paste","Long-Grain Rice","Jumbo/Bouillon","Bay Leaves","Parsley","Garlic","Vegetable Oil","Black Pepper","Salt","Water"],"Marshall Islands":["Heavy Cream","Unsalted Butter","Eggs","Coconut","Macadamia Nuts","Coconut Milk","All Purpose Flour","Salt","Brown Sugar","Honey","Water"],"Iraq":["Whitefish","Red Onion","Lemon Juice","Diced Tomatoes","Curry Powder","Olive Oil","Salt"],"Pakistan":["Chuck Beef/Stew Meat","Yogurt","Unsalted Butter","Onion","Green Chili","Ginger and Garlic Paste","Cumin","Coriander","Cayenne Pepper","Cilantro","Mint","Salt","Water"],"Belgium":["Mussels","Heavy Cream","Unsalted Butter","Yukon Gold Potatoes","Shallot","Parsley","Garlic","Olive Oil","White Wine","Black Pepper","Salt"],"Serbia":["Ground Beef","Ground Pork","Ground Lamb","Egg Whites","Onion","Flat Bread","Paprika","Cayenne Pepper","Garlic","Black Pepper","Salt","Baking Soda"],"Sudan":["Feta","Eggs","Arugula","Tomatoes","Red Onion","Fava Beans","Cumin","Sesame Oil","Black Pepper","Salt"],"Dominican Republic":["Beef","Chicken","Lettuce","Auyama","Beet","Cucumber","Tomatoes","Bell Pepper","Green Bell Pepper","Red Onion","Green Olives","Celery","Celery Leaves","Lime","Pinto Beans","Tomato Sauce","Fruit Vinegar","White Rice","Coriander","Oregano","Cilantro","Thyme","Garlic","Olive Oil","Canola Oil","Vegetable Oil","Black Pepper","Salt","Sugar","Water"],"Sri Lanka":["Chicken","Tomatoes","Serrano Peppers","Yellow Onion","Coconut Milk","Fruit Vinegar","Basmati Rice","Black Mustard","Cumin","Coriander","Paprika","Cayenne Pepper","Fennel Seeds","Cardamom Seeds","Cinnamon Stick","Cloves","Peppercorns","Curry Leaves","Ginger","Garlic","Coconut Oil","Salt","Brown Sugar","Water"],"Norway":["Lamb Meat","Cabbage","All Purpose Flour","Peppercorns","Salt","Water"],"Eritrea":["Ground Beef","Yellow Onion","Scallions","Diced Tomatoes","Teff Flour","Coriander","Paprika","Nutmeg","Chili Powder","Fenugreek Powder","Ground Ginger","Allspice","Cardamom Seeds","Ground Cinnamon","4 Epices","Cloves","Cilantro","Garlic","Olive Oil","White Pepper","Salt","Baking Soda","Active Yeast","Water"],"Libya":["Lamb Shoulder","Pumpkin","Potatoes","Onion","Green Chili","Barley Flour","Tomato Paste","All Purpose Flour","Chili Powder","Fenugreek Seeds","Turmeric","Garlic","Olive Oil","Black Pepper","Salt","Water"],"Denmark":["Pork Belly","Whole Milk","Heavy Cream","Unsalted Butter","Potatoes","All Purpose Flour","Nutmeg","Parsley","Black Pepper","Salt"],"Mozambique":["Chicken","Red Bell Pepper","Onion","Jalapeno","Chili Pepper","Lemon","Coconut Milk","Oregano","Smoked Paprika","Chicken Bouillon","Basil","Garlic","Olive Oil","Black Pepper","White Pepper","Salt"],"Namibia":["Rump Steak","Green Chili","Red Chilis","White Vinegar","Oregano","Parsley","Garlic","Olive Oil","Black Pepper","Salt"],"Haiti":["Margarine","Chili Pepper","Kidney Beans","Coconut Cream","Jasmine Rice","Onion Powder","Garlic Powder","Epis","Ground Cloves","Jumbo/Bouillon","Thyme","Olive Oil","Salt"],"Belarus":["Potatoes","Yellow Onion","Olive Oil","Salt"],"Democratic Republic of the Congo":["Chicken","Onion","Peanut Butter","Diced Tomatoes","Tomato Paste","Red Pepper Flakes","Ginger","Garlic","Red Palm Oil","Salt","Water"],"Rwanda":["Pork","Tomatoes","Onion","Chili Pepper","Tomato Puree","Jumbo/Bouillon","Vegetable Oil","Salt"],"Kyrgyzstan":["Lamb Meat","Tomatoes","Green Beans","Green Peppers","Onion","All Purpose Flour","Mixed Herbs","Garlic","Vegetable Oil","Salt","Water"],"Nigeria":["Tripe","Beef","Crayfish","Stock Fish","White Yams","Pumpkin Leaves","Locust Beans","Egusi","Jumbo/Bouillon","Red Palm Oil","Black Pepper","Salt"],"Syria":["Beef","Onion","Walnuts","Bulgur","All Purpose Flour","Bhar","Vegetable Oil","Salt","Water"],"Turkmenistan":["Chicken","Onion","Carrots","Basmati Rice","Vegetable Oil","Salt","Water"],"Spain":["Eggs","Yukon Gold Potatoes","Onion","Olive Oil","Salt"],"South Africa":["Beef","Milk","Eggs","Red Bell Pepper","Onion","Apple","Lemon","Cashews","Beef Stock","Apricot Jam","White Vinegar","White Bread","Coriander","Curry Powder","Cayenne Pepper","Ground Ginger","Mixed Herbs","Turmeric","Garlic","Salt","Baking Powder"],"Malawi":["Tilapia","Green Peppers","Onion","Red Onion","Red Chilis","Carrots","Peaches","Dried Apricots","Raisins","Lemon Juice","All Purpose Flour","Cumin Seeds","Coriander Seeds","Chili Powder","Turmeric","Ground Cinnamon","Cloves","Poppy Seeds","Mustard Seeds","Peppercorns","Salt","Sugar","Water"],"Czech Republic":["Pork Shoulder","Bacon","Pork Lard","Milk","Eggs","Onion","Sauerkraut","White Bread","All Purpose Flour","Caraway Seeds","Garlic","Black Pepper","Salt","Sugar","Active Yeast","Water"],"Turkey":["Chicken","Yogurt","Lemon","Tahini","Lemon Juice","Turkish Seasoning","Cumin","Cayenne Pepper","Parsley","Garlic","Olive Oil","Salt","Water"],"Morocco":["Chicken","Yellow Onion","Green Olives","Carrots","Lemon","Chicken Stock","Couscous","All Purpose Flour","Cumin","Coriander","Paprika","Cayenne Pepper","Ground Ginger","Ground Cinnamon","Cilantro","Garlic","Olive Oil","Black Pepper","Salt","Honey"],"Bahamas":["Conch","Evaporated Milk","Eggs","Yellow Onion","Hot Sauce","Mayonnaise","Sweet Pickles","Lime Juice","All Purpose Flour","Parsley","Vegetable Oil","Black Pepper","Salt"],"Chad":["Okra","Tomatoes","Pumpkin","Onion","Leafy Greens","Carrots","Peanuts","Vegetable Stock","Coconut Milk","Peanut Butter","Millet Flour","Paprika","Chili Powder","Chili Flakes","Garlic","Oil","Black Pepper","Salt","Water"],"Oman":["Leg of Lamb","Lemon","White Vinegar","Basmati Rice","Cumin","Cumin Seeds","Coriander Seeds","Chili Powder","Turmeric","Cardamom Pods","Cinnamon Stick","Star Anise","Ground Cloves","Cloves","Peppercorns","Bay Leaves","Garlic","Oil","Black Pepper","Salt","Yellow Food Coloring","Orange Food Coloring","Water"],"Vanuatu":["Chicken","Taro","Tomatoes","Cabbage","Spring Onion","Chili Pepper","Lemon","Coconut Milk","All Purpose Flour","Curry Powder","Chili Powder","Turmeric","Kaffir Lime Leaves","Ginger","Garlic","Coconut Oil","Vegetable Oil","Black Pepper","Salt","Banana Leaf"],"Romania":["Bacon","Smoked Sausage","Feta","Cornmeal","Salt","Water"],"France":["Brisket","Bottom Round Roast","Short Ribs","Marrow Bones","Leek","Cabbage","Baby Potatoes","Onion","White Onion","Turnip","Carrots","Tarragon","Cloves","Dried Thyme","Parsley","Black Pepper","Salt"],"Papua New Guinea":["Chicken","Taro","Spinach","Sweet Potato/Yam","Plantains","Pineapple","Lime","Coconut Milk","Curry Powder","Oil","Salt"],"Togo":["Chicken","Onion","Rice Flour","Corn Flour","Cornmeal","Ginger","Garlic","Red Palm Oil","Black Pepper","Salt","Sugar","Baking Powder","Active Yeast","Water"],"San Marino":["Whipped Cream","Unsalted Butter","Dark Chocolate","Nougat Chocolate","Sweet Waffles"],"Cyprus":["Lamb Shoulder","Lemon","Oregano","Garlic Powder","Bay Leaves","Parsley","Olive Oil","Black Pepper","Salt"],"Malta":["Ricotta","Parmigiano-Reggiano","Mozzarella","Crisco","All Purpose Flour","Parsley","Olive Oil","Black Pepper","Salt","Water"],"Australia":["Heavy Cream","Egg Whites","Strawberries","Kiwi","Passionfruit","Bananas","Vanilla","White Vinegar","Icing Sugar","Caster Sugar","Cornstarch"],"Uruguay":["Beef","Ham","Bacon","Mozzarella","Unsalted Butter","Eggs","Lettuce","Tomatoes","Ketchup","Mayonnaise","Sandwich Buns","Black Pepper","Salt"],"Zimbabwe":["Chicken","Spinach","Green Peppers","Red Bell Pepper","Onion","Chili Pepper","Peanuts","Chicken Stock","Peanut Butter","Italian Peeled Tomatoes","Corn Flour","BBQ Spice","Garlic","Olive Oil","Water"],"United Kingdom":["Beef Tallow","Cod","Potatoes","Malt Vinegar","All Purpose Flour","Oil for Frying","Light Beer","Salt","Baking Powder"],"Yemen":["Beef","Onion","Chili Pepper","Green Chili","Cumin","Cumin Seeds","Coriander","Fenugreek Powder","Turmeric","Chives","Garlic","Oil","Salt","Water"],"Mexico":["Pork Butt","Onion","White Onion","Guajillo","Pineapple","Corn Tortillas","Pineapple Juice","Achiote Paste","White Vinegar","Salsa","Cumin","Mexican Oregano","Cloves","Cilantro","Garlic","Black Pepper","Salt"],"Ukraine":["Sour Cream","Unsalted Butter","Eggs","Potatoes","Mushrooms","Yellow Onion","All Purpose Flour","Garlic","Sunflower Oil"],"Colombia":["Chicken","Heavy Cream","Yellow Potatoes","White Potatoes","Red Potatoes","Scallions","Corn","Capers","Guascas","Chicken Bouillon","Cilantro","Garlic","Black Pepper","Salt","Water"],"Jamaica":["Saltfish","Tomatoes","Red Bell Pepper","Onion","Scallions","Scotch Bonnet","Ackee","Thyme","Oil","Black Pepper"],"Saint Kitts and Nevis":["Saltfish","Unsalted Butter","Tomatoes","Red Bell Pepper","Green Bell Pepper","Yellow Bell Pepper","Onion","Spring Onion","Chili Pepper","Plantains","Breadfruit","Coconut","Chicken Stock","All Purpose Flour","Ginger","Garlic","Vegetable Oil","Black Pepper","Salt","Water"],"Antigua and Barbuda":["Unsalted Butter","Okra","Cornmeal","Salt","Water"],"United Arab Emirates":["Lamb Meat","Ghee","Wheat Grains","Cumin Seeds","Cardamom Pods","Cinnamon Stick","Ground Cloves","Sugar","Honey"],"Armenia":["Cow's Feet","Radish","Chili Pepper","Lemon","Sweet Pickles","Flat Bread","Parsley","Cilantro","Garlic","Salt"],"Vietnam":["Chuck Beef/Stew Meat","Sirloin","Marrow Bones","Bean Sprout","Yellow Onion","Scallions","Thai Chili","Lime","Fish Sauce","Hoison Sauce","Chili Sauce","Banh Pho","Star Anise","Cloves","Asian Basil","Cilantro","Culantro","Ginger","Black Pepper","Salt","Rock Sugar"],"Bosnia and Herzegovina":["Beef","Pepperoni","Unsalted Butter","Tomatoes","Red Potatoes","Shallot","Celery","Carrots","Vegetable Juice","Chili Flakes","Peppercorns","Bay Leaves","Basil","Garlic","Vodka","Salt"],"Bangladesh":["Hilsa","Mishti Doi","Ghee","Onion","Green Chili","Coconut Milk","Ginger and Garlic Paste","Basmati Rice","Chili Powder","Cardamom Pods","Cinnamon Stick","Cloves","Bay Leaves","Salt","Water"],"Guyana":["Beef","Wiri Wiri Peppers","Cassareep","Orange Peel","Cinnamon Stick","Cloves","Salt","Brown Sugar","Water"],"Gabon":["Chicken","Okra","Tomatoes","Onion","Chili Pepper","Palm Butter","Cayenne Pepper","Garlic","Red Palm Oil","Black Pepper","Salt"],"Cameroon":["Crayfish","Shrimp","Bitterleaf","Spinach","Onion","Scotch Bonnet","Peanuts","Ginger","Garlic","Vegetable Oil","Salt"],"Myanmar":["Catfish","Eggs","Onion","Chili Pepper","Banana Stem","Lime","Fish Sauce","Rice Powder","Shrimp Paste","Rice Noodles","Paprika","Chili Flakes","Turmeric","Lemongrass","Cilantro","Ginger","Garlic","Peanut Oil","Black Pepper","Water"],"Cambodia":["Whitefish","Eggs","Noni Leaves","Chili Pepper","Red Chilis","Lime","Fish Sauce","Coconut Milk","Shrimp Paste","Yellow Kroeung","Salt","Palm Sugar"],"Palestine":["Chicken","Yogurt","Cucumber","Cauliflower","Tomatoes","Potatoes","Onion","Carrots","Pine Nuts","Medium Grain Rice","Cumin","Coriander","Turmeric","Allspice","Ground Cardamom","Ground Cinnamon","Ground Cloves","Bay Leaves","Parsley","Ginger","Vegetable Oil","Black Pepper","Salt"],"Mauritius":["Octopus","Tomatoes","Onion","Chili Pepper","Coriander","Curry Powder","Ground Cinnamon","Ground Cloves","Curry Leaves","Ginger","Garlic","Oil"],"Maldives":["Tuna","Onion","Fish Paste","Peppercorns","Curry Leaves","Garlic","Salt","Water"],"Palau":["Chicken","Onion","Chayote","Fish Sauce","Pepper Leaves","Chicken Bouillon","Ginger","Garlic","Oil","Water"],"Saint Lucia":["Saltfish","Cucumber","Tomatoes","Seasoning Pepper","Red Bell Pepper","Onion","Spring Onion","Bananas","Lime Juice","Parsley","Thyme","Garlic","Coconut Oil","Black Pepper"],"Dominica":["Frog","Unsalted Butter","Dasheen","Sweet Potato/Yam","Green Peppers","Onion","Bananas","Lime","White Vinegar","All Purpose Flour","Red Pepper Flakes","Thyme","Garlic","Oil for Frying","Salt","Water"],"Monaco":["Ricotta","Parmigiano-Reggiano","Eggs","Spinach","Swiss Chard","Shallot","All Purpose Flour","Olive Oil","Black Pepper","Salt","Water"],"United States of America":["Turkey","Unsalted Butter","Onion","Apple","Lemon","Rosemary","Thyme","Sage","Garlic","Black Pepper","Salt"],"Ivory Coast":["Chicken","Tomatoes","Red Bell Pepper","Onion","Green Onion","Habanero","Ginger Paste","Garlic Paste/Puree","Smoked Paprika","Chicken Bouillon","Bay Leaves","Thyme","Black Pepper","Salt"],"Kenya":["Ground Beef","Kale","Tomatoes","White Onion","Lemon","Coriander","Curry Powder","Smoked Paprika","Cayenne Pepper","Jumbo/Bouillon","Garlic","Canola Oil"],"Liberia":["Chicken","Fish","Shrimp","Tomatoes","Red Bell Pepper","Green Bell Pepper","Onion","Scotch Bonnet","Tomato Paste","Cayenne Pepper","Chicken Bouillon","Parsley","Basil","Ginger","Garlic","Vegetable Oil","Black Pepper","Salt"],"Zambia":["Collard Greens","Tomatoes","Peanut Powder","Cornmeal","Salt","Baking Soda","Water"],"Samoa":["Eggs","Coconut Milk","All Purpose Flour","Vegetable Oil","Salt","Sugar","Active Yeast","Water"],"Switzerland":["Emmanthaler","Lemon Juice","French Bread","All Purpose Flour","Paprika","Nutmeg","Garlic","Kirsch","White Wine","Black Pepper"],"Germany":["Chuck Beef/Stew Meat","Bacon Fat","Onion","Celery","Carrots","Gingersnap Cookies","Red Wine Vinegar","Cloves","Peppercorns","Bay Leaves","Red Wine","Black Pepper","Salt"],"Trinidad and Tobago":["Crab","Spinach","Okra","Pumpkin","Pimentos","Onion","Scallions","Celery","Habanero","Carrots","Coconut Milk","Green Seasoning","Thyme","Garlic","Olive Oil","Black Pepper","Salt","Water"],"Micronesia":["Chicken","White Onion","Scallions","Chicken Stock","Coconut Milk","Curry Powder","Parsley","Cilantro","Thyme","Garlic","Vegetable Oil","Black Pepper","Salt"],"Sierra Leone":["Turkey","Crayfish","Cassava Leaves","Tomatoes","Onion","Scotch Bonnet","Tomato Paste","Cayenne Pepper","Jumbo/Bouillon","Chicken Bouillon","Ginger","Garlic","Red Palm Oil","Black Pepper","Salt"],"Jordan":["Lamb Meat","Yogurt","Almonds","Lemon Juice","Long-Grain Rice","Turmeric","Allspice","Ground Cardamom","Cinnamon Stick","Cloves","Peppercorns","Bay Leaves","Parsley","Garlic","Olive Oil","Salt","Water"],"Lebanon":["Tomatoes","Onion","Spring Onion","Lemon","Bulgur","Seven Spice","Sumac","Parsley","Mint","Olive Oil","Salt"],"India":["Lamb Shoulder","Yogurt","Ghee","Onion","Chicken Stock","Tomato Puree","Basmati Rice","Cumin","Coriander","Paprika","Nutmeg","Chili Powder","Garam Masala","Turmeric","Fennel Powder","Cardamom Pods","Cinnamon Stick","Cloves","Ginger","Garlic","Black Pepper"],"Poland":["Beef","Bacon","Smoked Sausage","Pork Loin","Chicken","Cabbage","Mushrooms","Onion","Sauerkraut","Prunes","Raisins","Oregano","Herbes de Provence","Juniper Berries","Allspice","Bay Leaves","Rosemary","Thyme","Sage","Rapeseed Oil","White Wine","Black Pepper","Salt"],"Seychelles":["Plantains","Coconut Milk","Vanilla Bean","Nutmeg","Cardamom Pods","Cinnamon Leaves","Black Pepper","Brown Sugar"],"Benin":["Peanuts","Nutmeg","Chili Powder","Ground Ginger","Black Pepper","Salt","Water"],"Greece":["Chicken","Yogurt","Lettuce","Cucumber","Tomatoes","Potatoes","Red Bell Pepper","Onion","Red Onion","Lemon Juice","Red Wine Vinegar","Pita","Cumin","Oregano","Paprika","Smoked Paprika","Garlic","Olive Oil","Black Pepper","Salt","Honey"],"Kosovo":["Sour Cream","Kefir","Milk","Unsalted Butter","Eggs","All Purpose Flour","Salt"],"Ethiopia":["Top Round Roast","Unsalted Butter","Yellow Onion","Kalonji Seeds","Fenugreek Seeds","Berbere","Cardamom Seeds","Garlic","Salt"],"Timor Leste":["Snapper","Shallot","Thai Chili","Red Chilis","Lime","Candlenuts","Coriander","Turmeric","Lemongrass","Bay Leaves","Kaffir Lime Leaves","Ginger","Galangal","Garlic","Vegetable Oil","Salt","Palm Sugar","Banana Leaf","Water"],"Brunei":["Chili Pepper","Durian","Shrimp Paste","Dried Shrimp","Salt","Sago Starch","Water"],"Burundi":["Chicken","Chicken Giblets","Ghee","Onion","Bulgur","Coriander","Ground Ginger","Turmeric","Cardamom Pods","Black Pepper","Sugar"],"Canada":["Cheese Curds","Unsalted Butter","Russet Potatoes","Beef Stock","Chicken Stock","All Purpose Flour","Peanut Oil","Black Pepper","Cornstarch","Water"],"Thailand":["Shrimp","Eggs","Bean Sprout","Shallot","Lime","Peanuts","Fish Sauce","Preserved Daikon Radish","Pressed Tofu","Dried Shrimp","Tamarind Paste","Rice Noodles","Chili Flakes","Chives","Garlic","Palm Sugar","Water"],"Taiwan":["Beef Shank","Bok Choy","Tomatoes","Onion","Scallions","Soy Sauce","Pickled Mustard Greens","Spicy Bean Paste","Dried Chilis","Tomato Paste","Wheat Noodles","Cilantro","Ginger","Garlic","Oil","Shaoxing Wine","Sugar","Water"],"North Korea":["Brisket","Eggs","Korean Cucumber","Korean Radish","Onion","Scallions","Korean Pear","Soy Sauce","Dongchimi","Hot Mustard Paste","White Vinegar","Naengmyeon Noodles","Peppercorns","Ginger","Garlic","Salt","Sugar"],"Somalia":["Goat","Tomatoes","Potatoes","Onion","Carrots","Tomato Paste","Cumin","Coriander","Cilantro","Garlic","Black Pepper","Salt"],"Croatia":["Cottage Cheese","Sour Cream","Unsalted Butter","White Vinegar","All Purpose Flour","Oil","Black Pepper","Salt","Water"],"Grenada":["Pig Tail","Chicken","Taro","Dasheen","Pumpkin","Pimentos","Onion","Scallions","Scotch Bonnet","Carrots","Plantains","Breadfruit","Coconut Milk","Curry Powder","Green Seasoning","Saffron","Parsley","Culantro","Thyme","Garlic","Olive Oil","Black Pepper"],"Slovenia":["Pork Cracklings","Buckwheat Flour","Salt","Water"],"Israel":["Chicken","Chicken Liver","Chicken Hearts","Onion","Tahini","All Purpose Flour","Jerusalem Spice Mix","Parsley","Olive Oil","Oil","Salt","Brown Sugar","Active Yeast","Water"],"Luxembourg":["Pork Collar","Unsalted Butter","Leek","Onion","Celery","Carrots","Fava Beans","Cloves","Bay Leaves","Savory","Garlic","Moselle Wine"],"Tonga":["Brisket","Luau Leaf","Sweet Oniom","Coconut Milk","Ti Leaves"],"Kiribati":["Lobster","Coconut Milk","Curry Powder","Vegetable Oil","Salt"],"Suriname":["Corned Beef","Chicken","Unsalted Butter","Tomatoes","Potatoes","Onion","Lime","Orange Juice","Tomato Paste","Nutmeg","Turmeric","Chicken Bouillon","Parsley","Black Pepper","Salt","Brown Sugar"]}

const countryDietaryInformation = {"Ireland":[1,0,0],"Bulgaria":[0,1,0],"Hungary":[0,0,0],"Netherlands":[1,0,0],"Honduras":[0,1,0],"Nicaragua":[1,1,1],"Uganda":[1,0,0],"Guinea":[1,0,0],"Guinea-Bissau":[1,1,1],"Malaysia":[1,0,0],"Nauru":[0,0,0],"Bhutan":[1,1,0],"Bahrain":[1,0,0],"Cuba":[1,0,0],"Botswana":[1,0,0],"Ecuador":[1,0,0],"Azerbaijan":[1,0,0],"Liechtenstein":[0,1,0],"Venezuela":[1,0,0],"Republic of the Congo":[1,0,0],"Italy":[0,1,0],"Uzbekistan":[0,0,0],"Lithuania":[1,0,0],"Indonesia":[1,0,0],"Brazil":[1,0,0],"Kuwait":[0,0,0],"Lesotho":[1,1,1],"Finland":[1,0,0],"Niger":[1,0,0],"Fiji":[1,0,0],"Algeria":[0,1,0],"El Salvador":[1,0,0],"Costa Rica":[1,1,1],"Afghanistan":[1,0,0],"Bolivia":[0,0,0],"Georgia":[0,1,0],"Peru":[1,0,0],"Burkina Faso":[1,0,0],"Albania":[1,0,0],"Panama":[1,0,0],"Austria":[0,0,0],"Nepal":[1,1,1],"Belize":[0,0,0],"Montenegro":[1,1,0],"Iran":[1,0,0],"Egypt":[0,1,1],"Saudi Arabia":[1,0,0],"Chile":[0,0,0],"Madagascar":[1,0,0],"Russia":[1,0,0],"Tunisia":[0,0,0],"Angola":[1,0,0],"Solomon Islands":[1,1,1],"Latvia":[0,1,0],"Paraguay":[1,1,0],"Sweden":[0,0,0],"Philippines":[1,0,0],"Djibouti":[1,0,0],"Tanzania":[1,1,1],"Mali":[1,0,0],"Vatican City":[0,0,0],"North Macedonia":[1,1,1],"Moldova":[1,0,0],"Kazakhstan":[0,0,0],"Central African Republic":[1,0,0],"Tajikistan":[1,0,0],"Equitorial Guinea":[1,1,1],"Qatar":[1,0,0],"New Zealand":[0,0,0],"Ghana":[1,1,1],"The Gambia":[1,0,0],"Marshall Islands":[0,1,0],"Iraq":[1,0,0],"Pakistan":[0,0,0],"Belgium":[1,0,0],"Serbia":[0,0,0],"Sudan":[1,1,0],"Dominican Republic":[1,0,0],"Sri Lanka":[1,0,0],"Norway":[0,0,0],"Eritrea":[1,0,0],"Libya":[0,0,0],"Denmark":[0,0,0],"Mozambique":[1,0,0],"Namibia":[1,0,0],"Haiti":[1,1,0],"Belarus":[1,1,1],"Democratic Republic of the Congo":[1,0,0],"Rwanda":[1,0,0],"Kyrgyzstan":[0,0,0],"Nigeria":[0,0,0],"Syria":[0,0,0],"Turkmenistan":[1,0,0],"Spain":[0,1,0],"South Africa":[0,0,0],"Malawi":[0,0,0],"Czech Republic":[0,0,0],"Turkey":[1,0,0],"Morocco":[0,0,0],"Bahamas":[0,0,0],"Chad":[1,1,1],"Oman":[1,0,0],"Vanuatu":[0,0,0],"Romania":[1,0,0],"France":[1,0,0],"Papua New Guinea":[1,0,0],"Togo":[1,0,0],"San Marino":[0,1,0],"Cyprus":[1,0,0],"Malta":[0,0,0],"Australia":[0,0,0],"Uruguay":[0,0,0],"Zimbabwe":[1,0,0],"United Kingdom":[0,0,0],"Yemen":[1,0,0],"Mexico":[1,0,0],"Ukraine":[0,1,0],"Colombia":[1,0,0],"Jamaica":[1,0,0],"Saint Kitts and Nevis":[0,0,0],"Antigua and Barbuda":[1,1,0],"United Arab Emirates":[0,0,0],"Armenia":[1,0,0],"Vietnam":[1,0,0],"Bosnia and Herzegovina":[1,0,0],"Bangladesh":[1,0,0],"Guyana":[1,0,0],"Gabon":[1,0,0],"Cameroon":[1,0,0],"Myanmar":[1,0,0],"Cambodia":[1,0,0],"Palestine":[1,0,0],"Mauritius":[1,0,0],"Maldives":[1,0,0],"Palau":[1,0,0],"Saint Lucia":[1,0,0],"Dominica":[0,0,0],"Monaco":[0,1,0],"United States of America":[1,0,0],"Ivory Coast":[1,0,0],"Kenya":[1,0,0],"Liberia":[1,0,0],"Zambia":[1,1,1],"Samoa":[0,1,0],"Switzerland":[0,1,0],"Germany":[0,0,0],"Trinidad and Tobago":[1,0,0],"Micronesia":[1,0,0],"Sierra Leone":[0,0,0],"Jordan":[1,0,0],"Lebanon":[0,1,1],"India":[1,0,0],"Poland":[1,0,0],"Seychelles":[1,1,1],"Benin":[1,1,1],"Greece":[1,0,0],"Kosovo":[0,1,0],"Ethiopia":[1,0,0],"Timor Leste":[1,0,0],"Brunei":[1,0,0],"Burundi":[0,0,0],"Canada":[0,0,0],"Thailand":[1,0,0],"Taiwan":[0,0,0],"North Korea":[1,0,0],"Somalia":[1,0,0],"Croatia":[0,1,0],"Grenada":[1,0,0],"Slovenia":[0,0,0],"Israel":[0,0,0],"Luxembourg":[0,0,0],"Tonga":[1,0,0],"Kiribati":[1,0,0],"Suriname":[1,0,0]};

const ingredientListArray = ["Chuck Beef/Stew Meat","Sirloin","Cow's Feet","Corned Beef","Beef Tallow","Brisket","Rump Steak","Top Round Roast","Bottom Round Roast","Flank Steak","Short Ribs","Beef Shank","Blade Roast","Veal Stew Meat","Veal","Carne Seca","Tripe","Beef","Marrow Bones","Ground Beef","Rookwurst","Pork Cracklings","Pork Collar","Pork Neck","Pepperoni","Ham Hock","Ham","Pork Shoulder","Bacon","Bacon Fat","Prosciutto","Smoked Sausage","Italian-style Sausage","Paio Sausage","Pork Butt","Pork Belly","Calabresa Sausage","Pig Tail","Pork Ribs","Pork Loin","Pork Lard","Pork","Ground Pork","Chicken","Chicken Liver","Chicken Hearts","Chicken Giblets","Turkey","Goat","Frog","Ground Lamb","Lamb Shoulder","Leg of Lamb","Rack of Lamb","Lamb Meat","Crayfish","Catfish","Tilapia","Octopus","Conch","Hilsa","Anchovies","Tuna","Mussels","Crab","Fish","Cod","Stock Fish","Saltfish","Snapper","Walu","Corvina","Shrimp","Lobster","Whitefish","Feta","Sirene","Cheese Curds","Yak Cheese","Cottage Cheese","Ricotta","Parmigiano-Reggiano","Mozzarella","Fresh Mozzarella","White Cheese","Gruyere","Emmanthaler","Fontina","Queso Paraguay","Cotija","Yogurt","Sour Cream","Kefir","Whipped Cream","Milk","Evaporated Milk","Whole Milk","Mishti Doi","Heavy Cream","Unsalted Butter","Smen","Clarified Butter","Ghee","Margarine","Egg Yolks","Egg Whites","Eggs","Leek","Bok Choy","Luau Leaf","Cassava Leaves","Noni Leaves","Sorghum Stems","Bean Sprout","Korean Cucumber","Korean Radish","Radish","Bitterleaf","Taro","White Yams","Pumpkin Leaves","Lettuce","Auyama","Kale","Collard Greens","Spinach","Swiss Chard","Dasheen","Arugula","Beet","Rutabaga","Cassava","Cucumber","Cauliflower","Sweet Potato/Yam","Okra","Bottle Gourd","Butternut Squash","Calabaza Squash","Acorn Squash","Tomatoes","Cabbage","Peas","Pigeon Peas","Yellow Split Peas","Pumpkin","Potatoes","Yellow Potatoes","Baby Potatoes","Eggplant","Mushrooms","Russet Potatoes","White Potatoes","Red Potatoes","Yukon Gold Potatoes","Green Beans","Serrano Peppers","Seasoning Pepper","Bell Pepper","Green Peppers","Red Bell Pepper","Green Bell Pepper","Yellow Bell Pepper","Pimentos","Sweet Oniom","Onion","Yellow Onion","Red Onion","White Onion","Green Onion","Leafy Greens","Spring Onion","Scallions","Shallot","Green Olives","Black Olives","Celery","Celery Leaves","Jalapeno","Guajillo","Chili Pepper","Thai Chili","Green Chili","Red Chilis","Wiri Wiri Peppers","Hot Peppers","Habanero","Sweet Habanero","Scotch Bonnet","Cardoon","Zucchini","Turnip","Corn","Carrots","Plantains","Capers","Strawberries","Peaches","Cranberries","Chayote","Ackee","Kiwi","Pineapple","Durian","Korean Pear","Breadfruit","Apple","Passionfruit","Bananas","Banana Stem","Lime","Coconut","Orange","Lemon","Small Red Beans","Black Eyed Peas","Kidney Beans","Black Beans","Baked Beans","Lima Beans","Pinto Beans","Chickpeas","White Beans","Fava Beans","Legume","Brown Lentil","Yellow Dal","Macadamia Nuts","Candlenuts","Pistachios","Walnuts","Cashews","Pine Nuts","Almonds","Peanuts","Beef Stock","Chicken Stock","Vegetable Stock","Vegetable Juice","Worcestershire","Tobasco","Fish Sauce","Soy Sauce","Dijon Mustard","Hot Sauce","Locust Beans","Coconut Milk","Dongchimi","Pickled Mustard Greens","Spicy Bean Paste","Hot Mustard Paste","Preserved Daikon Radish","Pressed Tofu","Sour Cabbage Leaves","Dried Apricots","Rice Powder","Fish Paste","Shrimp Paste","Dried Shrimp","Cassareep","Orange Peel","Hoison Sauce","Palm Butter","Chili Sauce","Corn Tortillas","Pineapple Juice","Achiote Paste","Dark Chocolate","Vanilla","Vanilla Bean","Nougat Chocolate","Gingersnap Cookies","Crisco","Ketchup","Mayonnaise","Sweet Pickles","Tahini","Sauerkraut","Apricot Jam","Coconut Cream","Dried Edible Roses","Dried Chilis","Lingonberry Jam","Harissa","Prunes","Raisins","Applesauce","Grape Leaves","Peanut Butter","Peanut Powder","Tamarind Paste","Tamarind Juice","Egusi","Lemon Juice","Lime Juice","Orange Juice","Tomato Puree","Italian Peeled Tomatoes","Diced Tomatoes","Tomato Sauce","Loomi","Yellow Kroeung","Chile Paste","Ginger Paste","Garlic Paste/Puree","Ginger and Garlic Paste","Sambal Oelek","Barley Flour","Buckwheat Flour","Millet Flour","Teff Flour","Malt Vinegar","White Vinegar","Red Wine Vinegar","Fruit Vinegar","Masa Harina","Rice Flour","Corn Flour","Cornmeal","Refried Beans","Salsa","Salsa Lizano","Shortening","Unflavored Gelatin","Breadcrumbs","Tomato Paste","Phyllo Dough","French Bread","Wheat Grains","White Bread","Rye Bread","Sweet Waffles","Sandwich Buns","Puff Pastry","Maslouka","Bulgur","Couscous","Flour Tortillas","Pasta","Pita","Flat Bread","Wheat Noodles","Naengmyeon Noodles","All Purpose Flour","White Rice","Long-Grain Rice","Short-Grain Rice","Jasmine Rice","Basmati Rice","Sela Rice","Rice Noodles","Vermicelli","Banh Pho","Turkish Seasoning","Medium Grain Rice","Caraway Seeds","Pepper Leaves","Black Mustard","Cumin","Cumin Seeds","Coriander","Coriander Seeds","Oregano","Tarragon","Mexican Oregano","Herbes de Provence","Adobo","Bhar","Curry Powder","Paprika","Smoked Paprika","Nutmeg","Onion Powder","Garlic Powder","Chili Powder","Red Pepper Flakes","Chili Flakes","Cayenne Pepper","Kalonji Seeds","Fenugreek Seeds","Fenugreek Powder","Ground Ginger","Mixed Herbs","BBQ Spice","Garam Masala","Baharat","Hawaij","Green Seasoning","Epis","Seven Spice","Jerusalem Spice Mix","Berbere","Chinese Herb Packet","Qatari Machboos Spice Blend","Turmeric","Juniper Berries","Allspice","Sumac","Fennel Seeds","Fennel Powder","Cardamom Pods","Cardamom Seeds","Ground Cardamom","Cinnamon Leaves","Cinnamon Stick","Star Anise","Ground Cinnamon","4 Epices","Ground Cloves","Cloves","Guascas","Dried Thyme","Poppy Seeds","Mustard Seeds","Lemongrass","Peppercorns","Saffron","Jumbo/Bouillon","Chicken Bouillon","Bay Leaves","Curry Leaves","Parsley","Basil","Asian Basil","Rosemary","Cilantro","Culantro","Quillquiña","Dill","Chives","Thyme","Savory","Sage","Mint","Kaffir Lime Leaves","Allspice Berries","Ginger","Galangal","Garlic","Olive Oil","Oil","Coconut Oil","Rapeseed Oil","Sesame Oil","Sunflower Oil","Red Palm Oil","Canola Oil","Peanut Oil","Oil for Frying","Vegetable Oil","Guinness","Shaoxing Wine","Light Beer","Vodka","Sloe Gin","Kirsch","Moselle Wine","White Wine","Red Wine","Black Pepper","White Pepper","Salt","Seasoned Salt","Brown Sugar","Rock Sugar","Palm Sugar","Icing Sugar","Caster Sugar","Sugar","Baking Soda","Baking Powder","Sago Starch","Cornstarch","Active Yeast","Instant Yeast","Honey","Vitamin C","Transglutaminase","Banana Leaf","Ti Leaves","Carbonated Water","Yellow Food Coloring","Orange Food Coloring","Rose Water","Orange Flower Water","Water"];

const lowerCaseIngredientListArray = ingredientListArray.map(ingredient => ingredient.toLowerCase())
// console.log(lowerCaseIngredientListArray);

const searchResultsData = {"ireland":["Irish Stew","https://www.simplyrecipes.com/recipes/irish_beef_stew/"],"bulgaria":["Banitsa","https://tarasmulticulturaltable.com/banitsa-bulgarian-cheese-pie/"],"hungary":["Goulash","https://www.spendwithpennies.com/hungarian-goulash/"],"netherlands":["Stamppot","https://www.all-thats-jas.com/dutch-stamppot-vegetable-mash/"],"honduras":["Baleadas","https://www.onehappyhousewife.com/honduran-baleadas/"],"nicaragua":["Gallo Pinto","https://www.seriouseats.com/recipes/2012/05/gallopinto-nicaraguan-rice-and-beans-recipe.html"],"uganda":["Matoke","https://www.food.com/recipe/ugandan-matoke-235945#activity-feed"],"guinea":["Chicken Yassa","https://www.africanbites.com/yassa-chickenpoulet-au-yassa/"],"guinea-bissau":["Jollof Rice","https://cooking.nytimes.com/recipes/1018069-jollof-rice"],"malaysia":["Nasi Lemak","https://www.allrecipes.com/recipe/78938/malaysian-nasi-lemak/"],"nauru":["Coconut Fried Fish","https://www.internationalcuisine.com/nauru-coconut-crusted-fish/"],"bhutan":["Ema Datshi","https://www.internationalcuisine.com/ema-datshi/"],"bahrain":["Machboos","https://www.daringgourmet.com/chicken-machboos-bahraini-chicken-rice/"],"cuba":["Ropa Vieja","https://www.cocoandash.com/ropa-vieja-cuban-shredded-beef-2/"],"botswana":["Seswaa","https://afrogistmedia.com/seswaa-recipebotswana-pounded-meat/"],"ecuador":["Encebollada","https://www.laylita.com/recipes/encebollado-de-pescado-or-tuna-soup/"],"azerbaijan":["Dolmas","https://azcookbook.com/2017/09/15/stuffed-grape-leaves/"],"leichtenstein":["Kasknopfle","https://ethnicfoodsrus.com/around-the-world-recipes/smallest-countries-worldwide-cuisines/liechtensteiner-cuisine/tri-cheese-pasta-with-onion-kasknopfle/"],"venezuela":["Pabellon Criollo","https://venezuelancooking.wordpress.com/2011/12/14/recipe-pabellon-criollo/"],"republic of the congo":["Chicken Moambe","https://explorers.kitchen/recipes/mains/moambe-chicken/"],"italy":["Pasta","xxx"],"uzbekistan":["Tuy Palovi","https://ingmar.app/blog/recipe-the-national-dish-of-uzbekistan-tuy-palovi-wedding-plov/"],"lithuanua":["Cepelinai","http://lithuanianhomecooking.com/home/time-for-cepelinai"],"indoneisa":["Soto","https://glebekitchen.com/soto-ayam-indonesian-chicken-noodle-soup/"],"brazil":["Feijoada","https://www.oliviascuisine.com/feijoada-recipe/"],"kuwait":["Machboos","https://ingmar.app/blog/recipe-national-dish-of-kuwait-machboos-laham/"],"lesotho":["Chakalaka","https://www.africanbites.com/chakalaka/"],"finland":["Karjalanpaisti","https://www.europeancuisines.com/Finland-Finnish-Karelian-Ragout-Karjalan-Paisti-Beef-Lamb-Pork-Slow-Cook-Stew-Recipe"],"niger":["Djerma Stew","https://whonomstheworld.com/blog/traditional-niger-style-djerma/"],"fiji":["Kokoda","https://www.thisislandlife.com/travel/how-to-make-kokoda-recipe/"],"algeria":["Cous Cous","https://www.confessionsofaconfectionista.com/2011/12/algerian-couscous-with-vegetables.html"],"el salvador":["Pupusa","https://tasty.co/recipe/salvadoran-pupusas-as-made-by-curly-and-his-abuelita"],"costa rica":["Gallo Pinto","https://www.puravidamoms.com/costa-rican-gallo-pinto-recipe/"],"afghanistan":["Kabuli Pulao","http://www.rehanadujour.com/2014/06/19/the-dance-of-the-kabuli-pulao/"],"bolivia":["Saltenas","https://www.mylatinatable.com/bolivian-saltenas/"],"georgia":["Khachapuri","https://www.kingarthurbaking.com/recipes/khachapuri-georgian-feast-bread-recipe"],"peru":["Ceviche","https://www.laylita.com/recipes/peruvian-fish-cebiche-or-ceviche/"],"burkina faso":["Riz Gras","https://allafricandishesng.blogspot.com/2016/11/burkina-faso-recipes-riz-gras-fat-rice.html"],"albania":["Tave Kosi","https://www.myalbanianfood.com/recipe/albanian-tave-kosi/"],"panama":["Sancocho","https://www.centralamerica.com/experiencing/eating/panamanian-sancocho-recipe/"],"austria":["Weiner Schnitzel","https://www.strudelandschnitzel.com/wiener-schnitzel/?cn-reloaded=1"],"nepal":["Dhal Bhat","https://www.archanaskitchen.com/nepalese-style-dhal-bhat-recipe"],"belize":["Boil Up","https://www.theellysian.com/blog/how-to-make-belizean-boil-up/"],"montenegro":["Kachamak","https://www.soofoodies.com/recipe/kachamak-polenta/"],"iran":["Abgoosht","https://www.welcometoiran.com/abgousht-qonabid-qonabid-broth/"],"egypt":["Ful Medames","https://www.themediterraneandish.com/foul-mudammas-recipe/"],"yemen":["Kabsa","https://www.shibam.com/recipes/yemeni-food-kabsa/"],"chile":["Empanadas","https://www.chileanfoodandgarden.com/chilean-beef-empanadas/"],"madagascar":["Romazava","http://aroundtheblockwithjenni.com/blog/2020/5/15/traditional-malagasy-dish-romazava"],"russia":["Borscht","https://www.willcookforsmiles.com/russian-borscht-recipe/"],"tunisia":["Cous Cous","https://forward.com/food/452234/my-aunts-tunisian-couscous-with-beef-i-tweetyourshabbat/"],"angola":["Muamba de Galinha","https://www.conjuredcravings.com/post/muamba-de-galinha-angolan-chicken-stew"],"solomon islands":["Poi","https://nationalfoods.org/recipe/national-dish-of-solomon-islands-poi/"],"latvia":["Potato Panckes","https://latvianmom.com/2017/06/17/savory-potato-pancakes/"],"paraguay":["Sopa Paraguaya","https://www.all-thats-jas.com/paraguayan-cornbread/"],"sweden":["Kottbullar","https://www.all-thats-jas.com/swedish-meatballs-recipe/"],"philippines":["Adobo","https://panlasangpinoy.com/filipino-chicken-adobo-recipe/"],"djibouti":["Skoudehkaris","https://www.marga.org/food/int/djibouti/lamb.html"],"tanzania":["Ugali & Maharage","https://ingmar.app/blog/recipe-the-national-dish-of-tanzania-ugali-na-maharage-ya-nazi/"],"mali":["Tiguadege Na","https://diningforwomen.org/recipes/tiguadege-na-meat-in-peanut-sauce/"],"vatican city":["Fettuccini alla Papalina","https://memoriediangelina.com/2009/07/06/fettuccine-alla-papalina/"],"north macedonia":["Tavce Gravce","https://balkanlunchbox.com/pan-baked-beans-balkan-macedonian-baked-beans-tavce-gravce/"],"moldova":["Mamaliga","https://www.bakespace.com/recipes/detail/Moldovan-Polenta-~Mamaliga~/64092/"],"kazakhstan":["Beshbarmak","https://foodperestroika.com/2015/11/09/beshbarmak-kazakhstans-national-dish/"],"central african republic":["Fufu","https://www.preciouscore.com/water-fufu-cassava-fufu/"],"tajikistan":["O'sh","https://www.international-alert.org/news/recipes-peace-plov-tajikistan"],"equitorial guinea":["Succotash","https://naptimeprepcook.wordpress.com/2018/10/02/equatorial-guinea-%F0%9F%87%AC%F0%9F%87%B6-succotash/"],"qatar":["Machboos","https://dohafamily.com/healthy_living/a-taste-of-qatar-chicken-machboos-recipe/"],"new zealand":["Bacon and Egg Pie","https://eggs.org.nz/recipes/classic-bacon-egg-pie/"],"ghana":["Fufu","https://cheflolaskitchen.com/plantain-fufu/"],"the gambia":["Benachin","http://www.mygambiankitchen.com/benachin-jen/"],"marshall islands":["Macadamia Nut Pie","https://goodfoodonbadplates.wordpress.com/2016/03/19/too-good-at-least-marshallese-macadamia-nut-pie/"],"iraq":["Masgouf","https://cardamomandtea.com/341/masgouf/"],"pakistan":["Seekh Kebab","http://rookiewithacookie.com/pakistani-seekh-kebab-yogurt-raita/"],"belgium":["Moules Frites","https://www.abeautifulplate.com/classic-moules-frites/"],"serbia":["Cevapcici","https://belgradeatnight.com/how-to-make-cevapicevapcici-recipe/"],"sudan":["Ful Medames","https://tasteofsouthsudan.com/ful-medames-sudanese-fava-beans/"],"dominican republic":["La Bandera","https://www.dominicancooking.com/17570-la-bandera-dominicana-our-traditional-lunch-meal.html"],"sri lanka":["Rice and Curry","https://www.theflavorbender.com/sri-lankan-chicken-curry/#wprm-recipe-container-22262"],"norway":["Farikal","https://northwildkitchen.com/farikal-norwegian-lamb-cabbage-stew/"],"eritrea":["Zigni and Injera","http://www.eastafro.com/2013/12/30/zigni-and-injera/"],"libya":["Bazeen","http://libyanfood.blogspot.com/2010/08/bazeen.html"],"denmark":["Stegt Flaesk","https://www.copenhagenet.dk/CPH-Map/CPH-Recipes-Stegt-Flaesk.asp"],"mozambique":["Frango","https://www.africanbites.com/mozambique-peri-peri-grill-chicken/"],"namibia":["Braai","https://braai.com/namibian-chimichurri-steak/"],"haiti":["Rice and Beans","http://loveforhaitianfood.com/diri-kole-ak-pwa-wouj-red-beans-and-rice-2/"],"belarus":["Draniki","https://www.belarus.by/en/about-belarus/cuisine/draniki"],"democratic republic of the congo":["Poulet à la Moambé","https://www.epersianfood.com/moambe/"],"rwanda":["Ugali","http://africanproject.weebly.com/food.html"],"kyrgyzstan":["Beshbarmak","https://ingmar.app/blog/recipe-the-national-dish-of-kyrgyzstan-besh-barmak/"],"nigeria":["Egusi & Fufu","https://www.allnigerianrecipes.com/soups/egusi-soup/"],"syria":["Kibbeh","https://www.middleeasteye.net/discover/food-recipe-how-make-kibbeh-croquette-fried-aleppo-syria"],"turkmenistan":["Palaw","https://turkmenkitchen.com/en/2011/12/16/turkmen-pilaf/"],"spain":["Tortilla Espanola","https://spanishsabores.com/best-spanish-omelet-recipe/"],"south africa":["Bobotie","https://drizzleanddip.com/2018/09/26/traditional-south-african-bobotie-with-fragrant-yellow-rice/"],"malawi":["Nisima","https://www.openarmsmalawi.org/news/how-i-will-make-a-malawian-themed-meal"],"czech republic":["Vepro Knedlo Zelo","https://www.cooklikeczechs.com/vepro-knedlo-zelo/"],"turkey":["Doner","https://agoodcarrot.com/chicken-doner-kebab-recipe/"],"morocco":["Cous Cous","https://tasteofmaroc.com/moroccan-couscous-with-seven-vegetables/"],"bahamas":["Crack Conch","https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/cracked-conch/"],"chad":["Boule & Daraba","https://www.gourmetvegetarians.com/creamy-peanut-vegetable-stew-daraba-chad/"],"oman":["Shuwa","https://www.thasneen.com/cooking/shuwa-slow-cooked-lamb-served-over-aromatic-basmati-rice-omani-delicacy/"],"vanuatu":["Lap Lap","https://www.rpcvmadison.org/cpages/vanuatu-2015-recipes-lap-lap"],"romania":["Mamaliga","https://www.jocooks.com/recipes/traditional-romanian-polenta-mamaliga-cu-branza-in-paturi/"],"france":["Pot-Au-Feu","https://www.jamesbeard.org/recipes/pot-au-feu"],"papua new guinea":["Mumu","https://www.coffeeandvanilla.com/papuan-new-guinean-mumu/"],"togo":["Ablo & Togolese Chicken","https://ethnicfoodsrus.com/around-the-world-recipes/african-cuisine/togolese-cuisine/ablo/"],"san marino":["Torta Tre Monti","https://www.rosacooking.com/en/waffle-cakes-from-san-marino/"],"cyprus":["Souvla","https://costaskitchen.co.uk/lamb-souvla-cypriot-lamb-cooked-on-the-bbq/"],"malta":["Pastizzi","http://tessavalletta.com/2016/04/maltese-pastizzi-recipe/"],"australia":["Pavlova","https://www.wandercooks.com/easy-australian-pavlova-recipe/"],"uruguay":["Chivito","https://blog.amigofoods.com/index.php/other-latin-foods/chivito/"],"zimbabwe":["Sadza & Dovi","https://www.zimbokitchen.com/how-to-make-plain-sadza/"],"united kingdom":["Fish & Chips","https://www.daringgourmet.com/fish-and-chips/"],"mexico":["Tacos","https://www.mexicoinmykitchen.com/tacos-al-pastor/"]}

const data = {
    Afghanistan: [
      [ 'IMG_0529.JPEG', 'IMG_0532.JPEG' ],
      'Kabuli Pulao',
      'http://www.rehanadujour.com/2014/06/19/the-dance-of-the-kabuli-pulao/',
      "Qabeli palaw is a variety of pilaf made in Afghanistan. It consists of steamed rice mixed with raisins, carrots, and beef or lamb. There exist different variations depending on the region. Qabeli palaw is considered a festive and important dish due to the price and quality of the ingredients as well as its tradition of being Afghanistan's national dish. The dish is traditionally placed in the center of the meal with other foods making up the rest of the perimeter.",
      'Poverty is deeply entrenched in Afghanistan. This can be attributed in part to the country’s physical isolation, rugged terrain and often harsh climate; to underlying cultural norms, especially with regard to the rights of women; and to its recurring history of conflict, insecurity and outside interference.  Afghanistan’s poverty profile is further shaped by marked disparities between rural and urban areas, sustained population growth, extremely low levels of female participation in the work force, and the overwhelming prevalence of vulnerable forms of employment in informal and low-productivity jobs.  Afghanistan remains one of the most dangerous and most violent, crisis-ridden countries in the world. There is persistent deepening and geographic spread of conflict. There are also regular violations of International Law and Human Rights. CARE first established its mission in Afghanistan in 1961, but suspended activities after the Russian invasion of 1979. Resuming activities in 1989 from a new base in Peshawar, Pakistan, CARE delivered assistance to Afghanistan from across the border until 2002 when it shifted its main office back to Kabul.  CARE Afghanistan has developed three programs: Women’s & girls’ empowerment Enhanced resilience Humanitarian action ',
      '1961',
      '300',
      '90'
    ],
    Albania: [
      [ 'IMG_0606.JPEG', 'IMG_0607.JPEG' ],
      'Tave Kosi',
      'https://www.myalbanianfood.com/recipe/albanian-tave-kosi/',
      'Tavë kosi ("soured milk casserole") is a national dish in Albania. It is a dish of lamb (occasionally chicken, then called tavë kosi me mish pule) and rice baked with a mixture of yogurt and eggs (replacing the original soured milk) added to a roux (wheat flour and butter). It is also popular in Greece, North Macedonia and Turkey, where it is known as Elbasan tava (Albanian: Tavë Elbasani or Tava e Elbasanit), named after the Albanian city of Elbasan.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region.  To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission.  We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.  CARE has been working in the Balkans since 1993. ',
      '1993',
      '15',
      '110'
    ],
    Algeria: [
      [ 'IMG_0478.JPEG', 'IMG_0499.JPEG' ],
      'Cous Cous',
      'https://www.confessionsofaconfectionista.com/2011/12/algerian-couscous-with-vegetables.html',
      'Couscous is a North African dish of small steamed granules of rolled durum wheat semolina that is traditionally served with a stew spooned on top. Pearl millet, sorghum, Bulgur and other cereals can be cooked in a similar way in other regions and the resulting dishes are also sometimes called couscous. Couscous is a staple food throughout the Maghrebi cuisines of Algeria, Tunisia, Mauritania, Morocco, and Libya.  It is also widely consumed in France and in Sicily, where it was introduced by Maghreb immigrants. In 2020 it was inscribed in UNESCO Intangible Cultural Heritage Lists.',
      ' ',
      ' ',
      '40',
      '140'
    ],
    Angola: [
      [ 'IMG_0799.JPEG', 'IMG_0800.JPEG' ],
      'Muamba de Galinha',
      'https://www.conjuredcravings.com/post/muamba-de-galinha-angolan-chicken-stew',
      'Chicken moamba is a typical dish of Angolan cuisine . It is one of the most popular dishes in the country. Its confection involves, in addition to chicken , peanuts or palm oil, okra, gindungo, onion, and garlic. The chicken is cut into pieces and seasoned with salt, garlic and gindungo, then cooked with the onion. Later, palm oil (which can be made from fresh palm oil or purchased ready-to-use) is added, the okra. Moamba is served with mush or funge, which consists of boiled corn or manioc flour.',
      ' ',
      ' ',
      '10',
      '40'
    ],
    'Antigua and Barbuda': [
      [ 'IMG_2174.JPEG', 'IMG_2175.JPEG' ],
      'Fungee',
      'https://my.whisk.com/recipes/1013e0f0b3236f7d808934c529ead749eecafa3d262',
      "Cou-cou, coo-coo (as it is known in the Windward Islands), or fungie (as it is known in the Leeward Islands and Dominica) makes up part of the national dishes of Antigua and Barbuda, Barbados, British Virgin Islands and the U.S. Virgin Islands. It consists mainly of cornmeal (corn flour) and okra (ochroes). Cornmeal, which comes readily packaged and is available at supermarkets islandwide, and okra, which can be found at supermarkets, vegetable markets and home gardens, are very inexpensive ingredients. Because these main components are inexpensive, the dish became common for many residents in Barbados' early colonial history.",
      ' ',
      ' ',
      '15',
      '20'
    ],
    Armenia: [
      [ 'IMG_2031.JPEG', 'IMG_2032.JPEG' ],
      'Khash',
      'https://thearmeniankitchen.com/khash-brief-history-and-recipe-to-try/',
      "Khash is a dish of boiled cow or sheep parts, which might include the head, feet, and stomach (tripe). Khash is a purist meal with great parsimony in ingredients. The feet are depilated, cleaned, kept in cold water in order to get rid of bad smell, and boiled in water all night long, until the water has become a thick broth and the meat has separated from the bones. No salt or spices are added during the boiling process. The dish is served hot. One may add salt, garlic, lemon juice, or vinegar according to one's taste. Dried lavash is often crumbled into the broth to add substance. Khash is generally served with a variety of other foods, such as hot green and yellow peppers, pickles, radishes, cheese, and fresh greens such as cress. The meal is almost always accompanied by vodka (preferably mulberry vodka) and mineral water.",
      ' ',
      ' ',
      '30',
      '520'
    ],
    Australia: [
      [ 'IMG_1563.JPEG', 'IMG_1592.JPEG', 'IMG_1593.JPEG' ],
      'Pavlova',
      'https://www.wandercooks.com/easy-australian-pavlova-recipe/',
      "Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova. It has a crisp crust and soft, light inside, usually topped with fruit and whipped cream. The dessert is believed to have been created in honour of the dancer either during or after one of her tours to Australia and New Zealand in the 1920s. The nationality of its creator has been a source of argument between the two nations for many years. 'The pav' is a popular dish and an important part of the national cuisine of both Australia and New Zealand, and with its simple recipe, is frequently served during celebratory and holiday meals. It is a dessert most identified with the summer time, and popularly eaten during that period, including at Christmas time; however, it is also eaten all year round in many Australian and New Zealand homes.",
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.Australia is one of 16 members of the CARE confederation. CARE Australia joined the CARE International family in 1987, led by former Prime Minister Malcolm Frazer. Today, CARE Australia manages programs in more than 20 of the world’s poorest countries.',
      ' ',
      '30',
      '90'
    ],
    Austria: [
      [ 'IMG_0635.JPEG', 'IMG_0636.JPEG' ],
      'Weiner Schnitzel',
      'https://www.strudelandschnitzel.com/wiener-schnitzel/?cn-reloaded=1',
      'Wiener schnitzel, sometimes spelled Wienerschnitzel, as in Switzerland, is a type of schnitzel made of a thin, breaded, pan-fried veal cutlet. It is one of the best known specialities of Viennese cuisine, and one of the national dishes of Austria.',
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.After World War II, Austria was in ruins and people were starving. CARE sent more than 1 million CARE Packages to families across the country. Forty years later, Austria was one of the richest countries in the world and was able to provide aid to other countries in need. In 1986, CARE Austria was founded as the eighth member of the CARE International confederation. Each year, CARE Austria supports dozens of poverty-fighting programs around the world.',
      ' ',
      ' ',
      ' '
    ],
    Azerbaijan: [
      [ 'IMG_0348.jpeg', 'IMG_0349.jpeg' ],
      'Dolmas',
      'https://azcookbook.com/2017/09/15/stuffed-grape-leaves/',
      'Dolma is a family of stuffed dishes common in Anatolian, Levantine, Caucasian, Mesopotamian, Iranian and Maghrebi cuisines, that can be served warm or at room temperature. Some types of dolma are made with whole vegetables, fruit, offal or seafood, while others are made by wrapping grape, cabbage, or other leaves around the filling. Wrapped dolma are known as sarma.',
      ' ',
      ' ',
      '15',
      '90'
    ],
    Bahamas: [
      [ 'IMG_1459.JPEG', 'IMG_1460.JPEG' ],
      'Crack Conch',
      'https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/cracked-conch/',
      'Cracked conch is one of the most popular Bahamian dishes – conch meat is breaded in a batter made with flour, then deep-fried until golden and crispy. The name of this dish refers to a method of tenderizing the tough, chewy meat with a meat mallet or a frying pan. These golden conch nuggets are typically paired with french fries or peas and rice. When paired with french fries, the dish is usually served on a sweet bread roll with ketchup or hot sauce on the side. It can also be consumed as an appetizer, when it is served with fresh lime juice and goat pepper sauce.',
      ' ',
      ' ',
      '20',
      '25'
    ],
    Bahrain: [
      [ 'IMG_0413.JPEG', 'IMG_0417.JPEG', 'IMG_0420.JPEG' ],
      'Machboos',
      'https://www.daringgourmet.com/chicken-machboos-bahraini-chicken-rice/',
      'Machboos is a dish made with mutton, chicken, or fish accompanied over fragrant rice that has been cooked in chicken/mutton well-spiced broth',
      ' ',
      ' ',
      '10',
      '105'
    ],
    Bangladesh: [
      [ 'IMG_2080.JPEG', 'IMG_2083.JPEG', 'IMG_2085.JPEG' ],
      'Rice & Ilish',
      'https://www.archanaskitchen.com/ilish-pulao-recipe-bengali-style-hilsa-fish-pilaf',
      'The ilish (Tenualosa ilisha) also known as the ilishi, hilsa, hilsa herring or hilsa shad, is a species of fish related to the herring, in the family Clupeidae. It is a very popular and sought-after food fish in the Indian Subcontinent, and is the national fish of Bangladesh and the state fish of West Bengal. Ilish Polao or Hilsa Pulao is an extremely fragrant and delicious Bengali style Fish Pilaf cooked with Ilish mach or Hilsa. This flavoursome Bangladeshi delicacy is one of the traditional dishes of Bangladesh. This popular Bengali fish pilaf has quite unique combination of earthy flavours of fresh ilish and classic taste of Bengali gota groom moshla (whole garam masala).  The dish is often cooked in Mishti Doi and Coconut milk along with rice and mild spices.',
      'Bangladesh is one of the most densely populated countries on earth. Natural calamities, such as floods, tropical cyclones, tornadoes, and tidal bores occur almost every year, combined with the effects of deforestation, soil degradation and erosion. CARE works to build resilient communities able to withstand environmental shocks, implementing humanitarian and resilience programs, health and nutrition initiatives, empowering women and girls, and innovating to end extreme poverty in rural settings. Bangladesh is also home of the world’s largest refugee camp at Cox’s Bazar, which hosts some 850,000 ethnic Rohingyas who fled from neighboring Myanmar. CARE has worked in Cox’s Bazar and other refugee camps to provide shelter, water and sanitation/hygiene programs (WASH), cash vouchers for basic household items, and psychosocial and sexual and reproductive health services.  ',
      '1971',
      '5',
      '45'
    ],
    Belarus: [
      [ 'IMG_1315.JPEG', 'IMG_1321.JPEG' ],
      'Draniki',
      'https://www.belarus.by/en/about-belarus/cuisine/draniki',
      'Potato pancakes are shallow-fried pancakes of grated or ground potato, matzo meal or flour and a binding ingredient such as egg or applesauce, often flavored with grated garlic or onion and seasoning. They may be topped with a variety of condiments, ranging from the savory (such as sour cream or cottage cheese), to the sweet (such as apple sauce or sugar), or they may be served plain. The dish is sometimes made from mashed potatoes to make pancake-shaped croquettes. Some variations are made with sweet potatoes',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    Belgium: [
      [ 'IMG_1134.JPEG', 'IMG_1138.JPEG' ],
      'Moules Frites',
      'https://www.abeautifulplate.com/classic-moules-frites/',
      'Moules-frites or moules et frites is a main dish of mussels and French fries originating in Belgium. The title of the dish is French, moules meaning mussels and frites fries, with the Dutch name for the dish meaning the same. It is considered the national dish of Belgium.',
      'The CARE International representation office in Brussels works to ensure that CARE’s expertise and advocacy priorities are represented at the European Union (EU) institutions. The office works closely with Members of the European Parliament to influence key decision making processes, as well as with the European External Action Service (EEAS) and the European Commission (EC), in particular the International Cooperation and Development department (DEVCO), which designs and implements the EU’s international cooperation and development policy, and the Humanitarian Aid and Civil Protection department (ECHO), which provides emergency assistance to victims of natural disasters and armed conflicts.  In addition, CARE engages with EU Member States, both at the capital level and in Brussels, via meetings with Permanent Representations and members of relevant Council Working Groups. CARE’s engagement with EU institutions is both bilateral and through informal and formal NGO coalitions and networks, based on common advocacy objectives. CARE International is a member of CONCORD (European NGO confederation for relief and development), VOICE (Network representing European NGOs working in Emergencies), and a partner of Crisis Action.  In addition to its advocacy work, the CI EU office also serves as an information and coordination point within CARE on EC funding opportunities, grant compliance and capacity building to strengthen the effectiveness of CARE’s EC contract management and audit preparedness. Key priorities for CARE International’s advocacy work at EU-level include gender equality and women’s empowerment in EU external action, gender in emergencies, humanitarian crises, climate change and migration. ',
      ' ',
      '25',
      '35'
    ],
    Belize: [
      [ 'IMG_0653.jpeg' ],
      'Boil Up',
      'https://www.theellysian.com/blog/how-to-make-belizean-boil-up/',
      'The bile up (or boil-up) is considered the cultural dish of the Kriols of Belize. It is a combination of boiled eggs, fish and/or pig tail, with cassava, yams, or sweet potatoes, plantains, and tomato sauce.',
      ' ',
      ' ',
      '20',
      '30'
    ],
    Benin: [
      [ 'IMG_2740.jpeg' ],
      'Kuli Kuli',
      'https://www.kuli-kuli.com/benin/kuli-kuli/by/angela-n-dah-sekou',
      'Kuli-kuli refers to a West African snack that is primarily made from peanuts. First made by the Nupe People of West Africa it is a popular snack in Nigeria, Benin, northern Cameroon and Ghana. To make kuli-kuli, peanuts are roasted and then ground into a paste called "Labu". The paste is then mixed with spices, salt, and sometimes ground pepper, and occasionally sugar. The paste is stripped of excess oil with water and made into the desired shape (round balls, cylinders, etc.). Adding potash to the oil increases the boiling point of the oil. This results in oils being extracted from the kuli-kuli so that more liquid oil is created than when the process started. While being heated and fried, the shaped peanut-paste begins to solidify and harden. It is then removed from the oil and allowed to cool down until ready to be eaten.',
      'In Benin, CARE manages long-term projects to help poor families improve their incomes and access education. Women in Benin lack legal and political status, so CARE helps girls access quality basic education and work with elected local authorities to help them deliver on their responsibilities. CARE runs a country-wide program to combat gender-based violence, working with communities and local organizations to promote behavioral change. CARE also runs programs on maternal and reproductive health, access to food, nutrition and adaptation to climate change, to help communities cope with the frequent flooding that affects the country. CARE is further helping poor rural communities in Benin to improve their income by supporting village savings and loan associations. When poor families have access to savings and affordable loans, they are able to plan for the future and borrow money to make small investments, such as buying seeds, livestock or farming equipment, which will increase their future earnings. ',
      '1999',
      '0',
      '30'
    ],
    Bhutan: [
      [ 'C6F1B53B-7F71-45B9-9756-38FCFCA2053E.jpg' ],
      'Ema Datshi',
      'https://www.internationalcuisine.com/ema-datshi/',
      `Ema datshi is among the most famous dishes in Bhutanese cuisine, recognized as a national dish of Bhutan. It is made from hot chili peppers and cheese; "ema" means "chili" and "datshi" means "cheese" in the Dzongkha language of Bhutan. Different varieties of chilies may be used: green chili, red chili, or white chili (green chili washed in hot water and sun-dried), which may be dried or fresh. The chilies are called "sha ema" which is a Capsicum annuum cultivar, a form of pepper much like cayenne, poblano, ancho, or Anaheim. The cheese in ema datshi is homemade from the curd of cow or yak's milk.`,
      ' ',
      ' ',
      '10',
      '15'
    ],
    Bolivia: [
      [ 'IMG_0549.JPEG', 'IMG_0550.JPEG' ],
      'Silpancho',
      'https://boliviancookbook.com/main-dishes/silpancho/',
      'Silpancho is a popular Bolivian food from the city of Cochabamba. When prepared properly, this tends to be a large and fulfilling meal with a diversity of carbohydrates and fats. It consists of a base layer of rice, usually white, followed by a layer of boiled and sliced potatoes. Next, a thin layer of pounded meat is followed by a layer of chopped tomato. In addition, onion, beet and parsley are mixed together and topped with either one or two fried eggs.',
      'CARE’s portfolio in Bolivia includes projects in sexual and reproductive health and rights, alternative and intercultural education, HIV-AIDS, disaster preparedness, emergency relief, conservation and development, food security, rural income generation, primary health care, family planning, community organization, women’s empowerment, local economic development in urban contexts, child labor prevention, and natural resources management. CARE started working in Bolivia in 1976 with the construction of rural water systems. Over the years, in order to respond to the emerging needs of the poor population, we expanded our program areas to include health care, education, infrastructure and agriculture development actions. ',
      '1953',
      '20',
      '40'
    ],
    'Bosnia and Herzegovina': [/////
      [ 'IMG_2067.JPEG', 'IMG_2068.JPEG' ],
      'Bosnian Pot',
      'https://allyskitchen.com/bosnian-pot/',
      'Bosnian Pot (Bosanski Lonac) is a Bosnian stew, a culinary speciality appreciated for its rich taste and flexibility. Recipes for Bosanski lonac vary greatly according to personal and regional preference, but the main ingredients generally include chunked meat and vegetables. Mixed meats may be used in the dish. It has been described as a national dish of Bosnia. Bosanski lonac has been on tables of both the rich and the poor for hundreds of years. The wealthy prepared the dish with more meat and other expensive ingredients, while the poor used what was available. Typical ingredients are: beef, lamb, cabbage, potatoes, tomatoes, carrots, parsley, garlic, peppercorns (whole, not ground). Many different vegetables or meats may be used. Bosanski lonac is prepared by layering meat and vegetables (alternating layers of meat and vegetables until the pot is full) into a deep pot, then adding 1 - 2 dl water. The ingredients are usually cut into large pieces rather than finely chopped or minced.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region. To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission. We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.',
      '1992',
      '20',
      '80'
    ],
    Botswana: [
      [ 'IMG_0319.jpeg' ],
      'Seswaa',
      'https://afrogistmedia.com/seswaa-recipebotswana-pounded-meat/',
      'Seswaa (as the dish is called in the north of Botswana) or loswao (as the dish is called in the south of the country and western South Africa) is a traditional meat dish of Botswana, made of beef or goat meat. It is prepared using left over cuts or tough cuts such as legs, neck and back. The dish is normally prepared for ceremonies such as funerals, weddings and national events such as independence celebrations. The meat is boiled until tender in a pot, with "just enough salt", and pounded. It is often served with pap (maize meal), setampa(Samp/grounded corn) or mabele (sorghum).',
      ' ',
      ' ',
      '5',
      '240'
    ],
    Brazil: [
      [ 'IMG_0444.JPEG', 'IMG_0448.JPEG' ],
      'Feijoada',
      'https://www.oliviascuisine.com/feijoada-recipe/',
      "Feijoada is a stew of beans with beef and pork. The name feijoada comes from feijão, 'bean' in Portuguese. It is widely prepared in the Portuguese-speaking world, with slight variations. The basic ingredients of feijoada are beans and fresh pork or beef. In Brazil, it is usually made with black beans (feijoada à brasileira). The stew is best prepared over low heat in a thick clay pot.  It is usually served with rice and assorted sausages such as chouriço, morcela (blood sausage), farinheira, and others, which may or may not be cooked in the stew.",
      'CARE worked in Brazil from 2001 to 2016 to tackle widespread poverty and high levels of inequality. We worked in partnership with the government and local organizations to make Brazilian society more responsive to the needs of its poor communities. This included addressing the structural causes of poverty through urban and rural projects across eight states. For example, CARE works with children, young people and women in the formal education sector and outside of it, supporting rural schools to offer vocational training, and helping some of Brazil’s poorest communities develop sustainable businesses and access microfinance. Home to a large percentage of the world’s remaining forests, the 20 million Brazilians living in extreme poverty are likely to be among the worst affected by climate change. CARE therefore worked with state governments to develop policies that link climate change mitigation with combating poverty. We also worked with communities to establish sustainable forest management systems and reforest areas on land reform settlements, while helping state governments measure the quality and impact of new initiatives aimed at reducing deforestation.',
      '1953',
      '10',
      '250'
    ],
    Brunei: [
      [ 'IMG_2840.jpeg' ],
      'Ambuyat',
      'https://ingmar.app/blog/recipe-national-dish-of-brunei-ambuyat-tempoyak/',
      'Ambuyat is a dish derived from the interior trunk of the sago palm. It is a starchy bland substance, similar to tapioca starch. Ambuyat is the national dish of Brunei, and a local specialty in the Malaysian states of Sarawak, Sabah, and the federal territory of Labuan, where it is sometimes known as linut. Ambuyat is eaten with a bamboo chopstick called chandas, by rolling the starch around the prongs and then dipping it into a sauce, of which there are many varieties. One of the best sauce that well known by Bruneian societies Tempoyak.',
      ' ',
      ' ',
      '0',
      '30'
    ],
    Bulgaria: [
      [ 'IMG_0280.jpeg', 'IMG_0281.jpeg', 'IMG_0282.jpeg' ],
      'Banitsa',
      'https://tarasmulticulturaltable.com/banitsa-bulgarian-cheese-pie/',
      'Banitsa is a traditional pastry dish made in Bulgaria, North Macedonia and Serbia, prepared by layering a mixture of whisked eggs, natural yogurt and pieces of white brined cheese between filo pastry and then baking it in an oven.',
      ' ',
      ' ',
      '30',
      '45'
    ],
    'Burkina Faso': [
      [ 'IMG_0594.JPEG' ],
      'Riz Gras',
      'https://allafricandishesng.blogspot.com/2016/11/burkina-faso-recipes-riz-gras-fat-rice.html',
      'Riz gras is a meat- and rice-based dish in Burkinabé cuisine, the cuisine of Burkina Faso, Africa. It is also prepared in other African countries, such as Senegal and Guinea. It originated from the dish tiebou djen, a rice dish in Senegalese cuisine that is prepared with significant amounts of fish and meat. Riz gras is often served at parties in urban areas of Burkina Faso. Riz gras is prepared with significant amounts of meat and vegetables, and is usually served atop rice. Additional ingredients used include tomatoes, eggplant, bell peppers, carrots, cabbage, onion, garlic, meat or vegetable stock, oil and salt.',
      'Burkina Faso has been marked by years of protracted political instability resulting from security challenges, a power vacuum, weak governance and the presence of armed groups. Additionally, the country is extremely poor and suffers from high levels of economic inequality and agricultural deficits largely due to insecurity. Burkina Faso remains vulnerable to climatic shocks related to changes in rainfall patterns and faces an acute food and nutrition crisis. This is a direct result of a major drought, which affected the Sahel region in 2017/18.CARE has been working in Burkina Faso through implementing partners since 2017. Recent programs include a project focusing on women’s inclusive participation in conflict prevention and peace-building in Niger and Burkina Faso, funded by the European Union and the Austrian Development Agency.',
      '2017',
      '10',
      '40'
    ],
    Burundi: [
      [ 'IMG_2845.JPEG', 'IMG_2846.JPEG' ],
      'Boko Boko',
      'https://afrogistmedia.com/boko-boko-harees-recipe-burundian-cuisine',
      "Boko boko harees is a traditional dish originating from Burundi. It's made with a combination of chicken breasts, bulgur wheat, onions, chicken giblets, ginger, turmeric, cardamom, sugar, ghee, and black pepper. The meat is cooked with the spices and onions, and the chicken is then shredded and combined with cooked bulgur wheat. The dish is typically served with fried onions and turmeric sauce, and it's often garnished with chopped coriander, if desired. ",
      'With prolonged political insecurity, high levels of poverty and significant human rights concerns, the humanitarian situation in Burundi remains fragile. Natural disasters, population movements, malaria epidemics and the risk of Ebola crossing into the country compound an already precarious situation. Despite increasing returns of Burundian refugees from Tanzania, close to 326,000 people still remain refugees in neighboring countries including Rwanda, Uganda and the Democratic Republic of Congo. With a quarter (24%) of returnees without land following repatriation, more than 106,000 people are displaced inside Burundi; many returnees have been displaced again due to severe weather conditions, including floods and droughts, and the socio-political situation. Women and girls suffer the most. Not only do they bear additional financial and domestic responsibilities to look after their families, but many also endure daily violence and insecurity. Some resort to paid sex to support themselves and their children. CARE International in Burundi has developed a Women’s Empowerment Program focused in rural areas, but with a nationwide advocacy platform focused on women’s rights, and hosts youth programs to improve Sexual and Reproductive Health and to reinforce economic empowerment and gender equality.  In 2019, CARE provided emergency packages that are specially tailored to the needs of women and girls. CARE helps vulnerable women with small savings groups to start up small businesses. At the same time, CARE works with communities to provide information about balanced nutrition and how to prepare food safely in order to prevent malnutrition. CARE established an office in Burundi in March 1994 to help people affected by civil strife following the assassination of Burundi’s first elected President in October 1993. CARE-Burundi’s initial program focused on the distribution of non-food items to internally displaced persons (IDPs) and returning Burundian refugees in five northern provinces. After civil war erupted in Rwanda in April 1994, CARE increased its assistance to help the enormous influx of Rwandans fleeing into northern Burundi. ',
      '1993',
      '25',
      '60'
    ],
    Cambodia: [
      [ 'IMG_2214.JPEG', 'IMG_2216.JPEG' ],
      'Amok Trey',
      'https://grantourismotravels.com/cambodian-fish-amok-recipe/',
      "Fish amok or amok trei is a Khmer steamed fish curry (amok) with a mousse-like consistency, one of Cambodia's national dishes. Usually, goby fish, snakehead fish or catfish is used, however, they are also sometimes substituted with cod, snapper, barramundi, salmon, whiting, or perch. The fish fillets are rubbed with or marinated in a freshly-made yellow or green kroeung mixed with coconut cream or coconut milk and eggs. The curry mixture is placed in a banana leaf container with great morinda leaves at the bottom and steamed for around 20 to 30 minutes until the curry achieves a mousse-like consistency. Great morinda leaves can also be substituted with swiss chard leaves if not available. Fish amok is served hot usually in either banana leaf containers or coconut shells and eaten with steamed rice.",
      'Cambodia’s worst drought in decades, brought on by El Niño, has left many of the most vulnerable without access to water. CARE and People in Need have been prioritizing those hardest hit—the old, the young, pregnant mothers, those with disabilities and those without access to any other support.CARE worked in Cambodia between 1973 and 1975, distributing food, providing medical assistance and improving education. From 1975 onwards CARE worked to support the millions of Cambodian refugees who fled the Khmer Rouge and were living in camps along the Thai-Cambodian border.In 1990, we returned to Cambodia, working with the United Nations to help 370,000 Cambodian refugees return to their homes. Over the years, CARE has shifted its focus in Cambodia from short-term, vital relief operations, to long-term projects in health, education and rural development.',
      '1973',
      '30',
      '30'
    ],
    Cameroon: [
      [ 'IMG_2198.JPEG', 'IMG_2199.JPEG' ],
      'Ndole',
      'https://eatwellabi.com/ndole-cameroonian-bitter-leaf-stew/',
      'Ndolé is one of the two national dishes of Cameroon, traditionally made with boiled bitterleaf, peanuts, and melon seeds. Seasoned with spices and hot oil, ndolé can be cooked with either fish or meat. This flavorful stew is usually served with bobolo – fermented cassava shaped into a loaf.',
      'In Cameroon, CARE works in partnership with the government, development organizations and local communities on programs to improve incomes, protect the environment, improve access to water, provide food security, and strengthen primary healthcare.  HIV is a major cause of extreme poverty in the country: many families are left destitute when family members fall ill or die. CARE works on HIV prevention and help communities care for children affected by HIV and AIDS.  CARE also provides humanitarian and psychosocial support to refugees from the Central African Republic and works with communities around the refugee camps to reduce tensions between both groups. ',
      '1978',
      '10',
      '35'
    ],
    Canada: [
      [ 'IMG_2852.JPEG', 'IMG_2853.JPEG' ],
      'Poutine',
      'https://www.seasonsandsuppers.ca/authentic-canadian-poutine-recipe/',
      'Poutine is a dish of french fries and cheese curds topped with a brown gravy. To maintain the texture of the fries, the cheese curds and gravy are added immediately before serving the dish. The hot gravy is usually poured over room-temperature cheese curds, so they are warmed without melting completely. The thin gravy allows all the fries to be coated. The serving dish typically has some depth to act as a basket for the fries so that they retain their heat.  It is important to control the temperature, timing, and the order in which the ingredients are added to obtain the right food textures—an essential part of the experience of eating poutine.',
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.CARE Canada is responsible for coordinating the overall efforts of the CARE International network in Chad, Cuba, Indonesia, Kenya, Zambia, and Zimbabwe, as well as managing projects in numerous other countries around the world. ',
      ' ',
      '30',
      '30'
    ],
    'Central African Republic': [
      [ 'IMG_2620.JPEG' ],
      'Peanut Soup',
      'http://www.congocookbook.com/soup-and-stew-recipes/peanut-soup/',
      'Peanut soup or groundnut soup is a soup made from peanuts, often with various other ingredients. It is a staple of African cuisine but is also eaten in East Asia (Taiwan), the United States (mainly in Virginia) and other areas around the world. It is also common in some regions, such as Argentina northwest, Bolivia and Peru, where it can sometimes be served with bone meat and hollow short pasta or fries. In Ghana it is often eaten with fufu or omo tuo and is often very spicy. Groundnut soup is also a native soup of the Benin (Edo) people in Nigeria and it is often eaten with pounded yam. Some of the essential ingredients used in making it are Piper guineense (uziza seed) and Vernonia amygdalina (bitter leaf).',
      ' ',
      ' ',
      '15',
      '40'
    ],
    Chad: [
      [ 'IMG_1474.JPEG', 'IMG_1476.JPEG', 'IMG_1477.JPEG' ],
      'Boule & Daraba',
      'https://www.gourmetvegetarians.com/creamy-peanut-vegetable-stew-daraba-chad/',
      'Daraba is a Chadian stew made with chopped okra, mixed vegetables, tomatoes, stock cubes, and smooth peanut butter, giving the dish a unique flavor. It is usually served with rice, boiled cassava, or boiled plantains on the side. Boule is bread made from millet and sorghum that has been ground into flour',
      'In Chad, CARE works on a number of long-term programs to improve quality of life in poor communities, with projects on water and sanitation, earning a living, farming, natural resource management and gender-based violence. CARE also works with the many refugees fleeing from ongoing violence and conflict in neighboring countries. We offer psychosocial and humanitarian support to refugees from the Central African Republic and South Sudan, including food and other essential items, access to clean water and sanitation, training and opportunities to earn an income.CARE began operations in Chad in 1975. Over the last 30 years, we have continuously adjusted our programs in response to the political developments in the country.',
      '1975',
      '15',
      '50'
    ],
    Chile: [
      [ 'IMG_0742.JPEG', 'IMG_0743.JPEG' ],
      'Empanadas',
      'https://www.chileanfoodandgarden.com/chilean-beef-empanadas/',
      'An empanada is a dish of Spanish cuisine, a type of baked or fried turnover consisting of pastry and filling, common in Spanish, other Southern European, Latin American, and the Philippine cultures. The name comes from the Spanish verb "empanar" (coat with bread), and translates as "enbreaded", that is, wrapped or coated in bread. They are made by folding dough over a filling, which may consist of meat, cheese, tomato, corn, or other ingredients, and then cooking the resulting turnover, either by baking or frying.',
      ' ',
      ' ',
      '70',
      '35'
    ],
    Colombia: [
      [
        '2CFD5F63-15B8-4E20-A057-D3BF8014C7E6.jpg',
        '34EBB7CD-E062-45A9-9F7A-9B50740E7FD9.jpg',
        'E85527AC-9949-4B40-942D-444BDFC5B047.jpg'
      ],
      'Ajiaco',
      'https://www.mycolombianrecipes.com/ajiaco-bogotano-colombian-chicken-and/',
      'Ajiaco is a soup common to Colombia, Cuba, and Peru. The dish is especially popular in the Colombian capital, Bogotá, being called Ajiaco santafereño, where it is typically made with chicken, three varieties of potatoes, and the herb Galinsoga parviflora, known locally as guasca or guascas. In Cuba, ajiaco is prepared as a stew, while in Peru the dish is prepared with a number of regionally specific variations.',
      'CARE has been present in the Latin America and Caribbean region since 1954. CARE has been responding to the Venezuela migrant and refugee crisis with a gender sensitive approach. CARE has been implementing emergency response interventions directly and through partners (in particular women’s organization) in Peru and Ecuador, Colombia and inside Venezuela. CARE focuses its response on some of the most vulnerable forcibly displaced and host community members, especially women, adolescents and girls, the LGBTQI+ population and young men. CARE is responding in the areas of Sexual and Reproductive Health, Water, Sanitation and Hygiene, Food and Nutrition Security, Shelter and cross-cutting Cash and Voucher Assistance. In every intervention, CARE aims to include up to 30% of hosting communities in order to bolster social cohesion. Colombia receives the highest number of Venezuelan refugee/migrants in the region. Over 1.7 million Venezuelans are currently being hosted in Colombia and this number is expected to reach 2.4 million in 2020. ',
      '1954',
      '20',
      '75'
    ],
    'Costa Rica': [
      [ 'IMG_0514.JPEG', 'IMG_0518.JPEG' ],
      'Gallo Pinto',
      'https://www.puravidamoms.com/costa-rican-gallo-pinto-recipe/',
      'Gallo pinto or gallopinto is a traditional dish from Central America. Consisting of rice and beans as a base, gallo pinto has a long history and is important to Nicaraguan and Costa Rican identity and cultures, just as rice and beans variations are equally important in many Latin American cultures as well. The beans in gallo pinto are quickly cooked until the juice is almost consumed, then combined with prepared rice and other ingredients such as cooked bell peppers, chopped onions, and garlic.',
      'In Costa Rica, CARE implements a regional program called Nutriendo al Futuro with strategic partner Glasswing. The program is coordinated from Honduras and focuses on providing food for kids in schools located in impoverished areas from 5 provinces in the country (in 5 schools). In a pilot project, the partners are working with a group of mothers and their children in a collective vegetable garden for their own consumption and sales. The project also provides the space to discuss women’s rights.',
      '1957',
      '10',
      '10'
    ],
    Croatia: [
      [ 'IMG_2939.JPEG', 'IMG_2942.JPEG' ],
      'Zagorski Strukl',
      'https://www.chasingthedonkey.com/croatian-cooking-zagorski-strukli-zagorje-cheese/',
      'Zagorski štrukli or štruklji is a popular traditional Croatian dish served in households across Hrvatsko Zagorje and Zagreb regions in the north of the country, composed of dough and various types of filling which can be either boiled or baked. The preparations are the same for both boiled and baked types of štrukli. Pastry is rolled out flat and very thin, to cover the table top. A mixture of cottage cheese with eggs, sour cream and salt is spread thinly over the pastry. Then the pastry is rolled lengthwise from both sides into two joined rolls, and finally cut into 10–20 cm long pieces.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region.  To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission.  We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.  ',
      '1992',
      '25',
      '25'
    ],
    Cuba: [
      [ 'IMG_0313.jpeg' ],
      'Ropa Vieja',
      'https://www.cocoandash.com/ropa-vieja-cuban-shredded-beef-2/',
      'Ropa vieja is known today as one of the national dishes of Cuba, but originated in Spain and is popular in other parts of Latin America as well as the Philippines. The dish normally includes some form of stewed beef and tomatoes with a sofrito base. Other components of the dish vary by region.',
      'In 2019, CARE worked in Cuba to help farmers facing the effects of climate change to  restore lands and crops, oversaw quality of life and safe water programs in vulnerable communities, and worked on sustainable agriculture on selected cities and towns.',
      '1959',
      '20',
      '500'
    ],
    Cyprus: [
      [
        '4D0B7ACD-88F0-40D0-A7F1-EF38F584E39D.jpg',
        '9A533B78-3BE4-4156-BF22-6D8333452DC5.jpg',
        'D8581A11-52FD-4B33-B020-279D464AF5D6.jpg'
      ],
      'Souvla',
      'https://costaskitchen.co.uk/lamb-souvla-cypriot-lamb-cooked-on-the-bbq/',
      'Souvla is a popular dish from Cyprus. It consists of large pieces of meat cooked on a long skewer over a charcoal barbecue. It differs from the popular Greek dish souvlaki, in that meat cuts are much larger and slow cooked for a much longer period at a greater distance from the hot charcoal. Traditional souvla is made from the neck and shoulder of lamb, pork and chicken. The meat is cut on the bone into chunks about the size of a medium onion.',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    'Czech Republic': [
      [ 'IMG_1420.JPEG', 'IMG_1421.JPEG', 'IMG_1422.JPEG' ],
      'Vepro Knedlo Zelo',
      'https://www.cooklikeczechs.com/vepro-knedlo-zelo/',
      'Vepro Knedlo Zelo is a common name for the Czech national dish, pork roast with (bread) dumplings and (stewed) cabbage, which consists of three parts, served on a plate together: roast pork , usually lean, sliced bread (or less often, potato) dumpling , also sliced, stewed white (or less often red) sauerkraut.',
      ' ',
      ' ',
      '15',
      '150'
    ],
    'Democratic Republic of the Congo': [
      [ 'IMG_1329.JPEG', 'IMG_1330.JPEG' ],
      'Poulet à la Moambé',
      'https://www.epersianfood.com/moambe/',
      'Moambe chicken is a savory chicken dish popular in Central Africa and considered the national dish of Angola. The dish itself is made by combining chicken, spices and palm butter to create a stew-like consistency. A number of local or regional variations exist across the Congo and Central Africa; the dish is also known outside the continent.',
      'CARE in the Democratic Republic of the Congo has strengthened its structure and strategy to assist the most vulnerable members of Congolese society eradicate poverty and reduce their vulnerability to social injustice. Our target groups include poor and vulnerable women, adolescent girls and boys as well as displaced and returning populations. CARE’s programmatic work in the DRC focuses on Humanitarian Response, Women’s Economic Empowerment, the right to Sexual and Reproductive Health and Rights, Food and Nutrition Security and Climate Resilience and the Right to a Life Free from Violence.  Prior to 1998, CARE worked in the DRC to support Rwandan refugees who had fled there from their own country. In 2002, CARE returned to the DRC to help people affected by the country’s own long-standing conflict.',
      '1979',
      '10',
      '50'
    ],
    Denmark: [
      [ 'IMG_1285.JPEG', 'IMG_1286.JPEG' ],
      'Stegt Flaesk',
      'https://www.copenhagenet.dk/CPH-Map/CPH-Recipes-Stegt-Flaesk.asp',
      `Stegt flæsk is a dish from Denmark consisting of fried pork belly and generally served with potatoes and parsley sauce (persillesovs). The dish is sometimes translated as 'pork strips' or 'crisp fried pork slices'. The pork belly or "breast" cut of a pig is used for stegt flæsk and the strips are cut about 1/4 inch thick.`,
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.Since its establishment in 1987, CARE Denmark has been focused on strengthening the capacities of poor people living in rural areas with the purpose of improving their livelihoods, as well as the recognition of and respect for their rights. CARE Denmark focuses on countries in Africa and Southeast Asia in which the organization cooperates closely with local society. CARE’s work in developing countries is carried out by local employees, who account for 97 percent of all employees in CARE. This secures sustainability and effective and locally rooted operations. CARE Denmark has a special focus on gender equality that is cross-cutting to everything the organization does – and a firm stance that environmental sustainability should not be compromised in the name of development. ',
      '1987',
      '5',
      '50'
    ],
    Djibouti: [
      [ 'IMG_0865.JPEG', 'IMG_0866.JPEG' ],
      'Skoudehkaris',
      'https://www.marga.org/food/int/djibouti/lamb.html',
      'Skoudehkaris is a flavourful rice dish seasoned with cardamom and cooked with lamb, although lamb can sometimes be substituted by chicken, beef, or fish. This thick, spicy stew is additionally enriched with cumin, cloves, cayenne pepper, cinnamon, and tomatoes, evolving into a warm and hearty comfort food dish. The spices and herbs are cooked with onions until soft, lamb is browned, then tomatoes and water are added to the pot.',
      ' ',
      ' ',
      '10',
      '75'
    ],
    Dominica: [
      [ 'IMG_2332.JPEG', 'IMG_2333.JPEG', 'IMG_2334.JPEG' ],
      'Mountain Chicken',
      'http://www.tastethecaribbean.eu/recipemountainchicken.html',
      "Dominica's national dish was the mountain chicken, which are snares of the legs of a frog called the Crapaud, which is endemic to Dominica and Montserrat. Found at higher elevations, it's a protected species and can only be caught between autumn and February",
      ' ',
      ' ',
      '20',
      '40'
    ],
    'Dominican Republic': [
      [ 'IMG_1169.JPEG', 'IMG_1171.JPEG' ],
      'La Bandera',
      'https://www.dominicancooking.com/17570-la-bandera-dominicana-our-traditional-lunch-meal.html',
      'Dominican cuisine is made up of Spanish, indigenous Taíno, Middle-Eastern and African influences. Many Middle-Eastern dishes have been adopted into Dominican cuisine, such as the "Quipe" that comes from the Lebanese kibbeh. As in Spain, the largest, most important meal of the day is lunch. Its most typical form, nicknamed La Bandera ("The Flag"), consists of white rice, red beans and meat (beef, chicken, pork, or fish), sometimes accompanied by a side of salad.',
      ' ',
      ' ',
      '30',
      '90'
    ],
    Ecuador: [
      [ 'IMG_0328.jpeg', 'IMG_0335.jpeg' ],
      'Encebollado',
      'https://www.laylita.com/recipes/encebollado-de-pescado-or-tuna-soup/',
      "Encebollado is a fish stew from Ecuador, where it is regarded as a national dish. Although known throughout Ecuador, the dish is most popular in the country's coastal region. It is served with boiled cassava and pickled red onion rings. A dressing of onion is prepared with fresh tomato and spices such as pepper or coriander leaves. It is commonly prepared with albacore, but tuna, billfish, or bonito may also be used. It may be served with ripe avocado.",
      'CARE started working in Ecuador in 1962 with the aim of improving the standard of living of Ecuador’s indigenous ethnic groups. CARE has been responding to the Venezuela migrant and refugee crisis with a gender sensitive approach. CARE has been implementing emergency response interventions directly and through partners (in particular women’s organization) in Peru and Ecuador, Colombia and inside Venezuela. CARE focuses its response on some of the most vulnerable forcibly displaced and host community members, especially women, adolescents and girls, the LGBTQI+ population and young men. CARE is responding in the areas of Sexual and Reproductive Health, Water, Sanitation and Hygiene, Food and Nutrition Security, Shelter and cross-cutting Cash and Voucher Assistance. In every intervention, CARE aims to include up to 30% of hosting communities in order to bolster social cohesion. As of the end of 2019 Ecuador was hosting some 500,000 Venezuelan refugee/migrants. Since 2018, CARE has been providing humanitarian assistance to Venezuelan populations in Huaquillas, Ibarra, Quito, Tulcán and Lago Agrio. CARE is providing mutli-purpose cash transfers to some of the most vulnerable new arrivals, legal advisory medical attention with a focus on sexual and reproductive health as well as vouchers to access basic healthcare services CARE also provides sessions on preventing gender-based violence, trafficking and sexual and reproductive health and psychosocial support. CARE Ecuador and its partners are also working to upgrade shelters and provide hygiene promotion to new arrivals. ',
      '1951',
      '30',
      '60'
    ],
    Egypt: [
      [
        '501B3156-129C-470A-B4BE-BF6DC7325E51.jpg',
        '72689A98-2500-416B-AB4C-53017B2FA752.jpg',
        'FAE9DA4D-D554-4F89-8FF9-119CD3308E49.jpg'
      ],
      'Koshari',
      'https://amiraspantry.com/egyptian-koshari/',
      "Koshary, kushari or koshari is Egypt's national dish and a widely popular street food. A traditional Egyptian staple, mixing pasta, rice and brown lentils, and topped with a zesty tomato sauce, garlic vinegar and garnished with chickpeas and crispy fried onions. It is often served with sprinklings of garlic juice; garlic vinegar and hot sauce are optional.",
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.CARE Egypt works to promote and support quality education and girls’ leadership, more effective and equitable natural resource management to enhance rural livelihoods, effective governance and civic engagement, and equitable social protection for vulnerable groups – especially women. CARE is actively involved in development programming particularly in Upper Egypt, where more than 50 percent of the nation’s poor live.CARE works with program participants, civil society organizations, government, aid agencies, networks, community-based associations and the increasingly socially aware Egyptian private sector.CARE’s work in Egypt began in 1954 with the introduction of a nationwide school meals program.CARE Egypt became a CARE International member in 2021.',
      '1954',
      '30',
      '60'
    ],
    'El Salvador': [
      [ 'IMG_0517.JPEG', 'IMG_0520.JPEG' ],
      'Pupusa',
      'https://tasty.co/recipe/salvadoran-pupusas-as-made-by-curly-and-his-abuelita',
      'A pupusa is a thick griddle cake or flatbread from El Salvador and Honduras, made with cornmeal or rice flour, similar to the Venezuelan and Colombian arepa. In El Salvador, it has been declared the national dish and has a specific day to celebrate it. It is usually stuffed with one or more ingredients, which may include cheese (such as quesillo or cheese with loroco buds), chicharrón, squash, or refried beans. It is typically accompanied by curtido (a spicy fermented cabbage slaw) and tomato salsa, and is traditionally eaten by hand.',
      'In 2019, CARE worked in El Salvador in the areas of Food & Nutrition Security and Resilience to Climate Change. CARE has also embarked on a strategic partnership with Amway based on the shared goals of helping people live better lives and finding sustainable solutions to hunger and malnutrition.',
      '1955',
      '30',
      '60'
    ],
    'Equitorial Guinea': [
      [ 'IMG_1015.JPEG', 'IMG_1016.JPEG' ],
      'Succotash',
      'https://naptimeprepcook.wordpress.com/2018/10/02/equatorial-guinea-%F0%9F%87%AC%F0%9F%87%B6-succotash/',
      'Succotash (from Narragansett sohquttahhash, "broken corn kernels") is a vegetable dish consisting primarily of sweet corn with lima beans or other shell beans. Other ingredients may be added such as onions, potatoes, turnips, tomatoes, bell peppers, corned beef, salt pork, or okra.',
      ' ',
      ' ',
      '5',
      '20'
    ],
    Eritrea: [
      [ 'IMG_1223.JPEG', 'IMG_1224.JPEG' ],
      'Zigni and Injera',
      'http://www.eastafro.com/2013/12/30/zigni-and-injera/',
      'Zigni or kai wat is a popular Eritrean and Ethiopian stew (tsebhi or wat) made from meat, tomatoes, red onions and Berbere spices. The meat can be beef, lamb, goat, or chicken and usually placed on a plate of injera, a type of unleavened bread made from teff flour. It can be eaten for lunch or dinner. The dish requires a relatively long amount of time but not a lot of active effort to make. The traditional recipe can take as long as five to six hours to prepare. As such, it is sometimes reserved for special occasions. The Berbere spices can make the zigni spicy and give it a red color.',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    Ethiopia: [
      [ 'IMG_2800.jpeg' ],
      'Kitfo',
      'https://burmaspice.com/recipes/kitfo-ethiopian-steak-tartare/',
      'Kitfo, is an Ethiopian traditional dish which originated among the Gurage people. It consists of minced raw beef, marinated in mitmita and niter kibbeh (a clarified butter infused with herbs and spices). The word comes from the Ethio-Semitic root k-t-f, meaning "to chop finely; mince." Kitfo cooked lightly rare is known as kitfo leb leb. Kitfo is often served alongside—sometimes mixed with—a mild cheese called ayibe or cooked greens known as gomen. In many parts of Ethiopia, kitfo is served with injera, a flatbread made from teff, although in traditional Gurage cuisine, one would use kocho, a thick flatbread made from the ensete plant. An ensete leaf may be used as a garnish. Though not considered a delicacy, kitfo is generally held in high regard.',
      'CARE started working in Ethiopia in 1984 in response to severe drought and famine that devastated the population and claimed the lives of nearly one million people.  Although we still carry out emergency food relief, the main focus of our work has shifted towards addressing the root causes of poverty and vulnerability through longer-term rehabilitation and development.  This includes governance, water and sanitation, education and being prepared for future emergencies. Our programs particularly support women and girls in rural and urban areas. We work to combat child marriage and support children and women affected by HIV and AIDS. Through vocational training and access to savings and loans, we help people earn a decent living.',
      '1984',
      '15',
      '25'
    ],
    Fiji: [
      [ 'IMG_0501.JPEG', 'IMG_0502.JPEG', 'IMG_0508.JPEG' ],
      'Kokoda',
      'https://www.thisislandlife.com/travel/how-to-make-kokoda-recipe/',
      'Raw fish marinated in freshly squeezed lemon or lime juice with coconut milk added after it is "cooked" together with finely diced tomatoes, chillies and salt.',
      'CARE works with local partner Live & Learn to respond to humanitarian needs caused by natural disasters, such as tropical cyclone Winston in February 2016. CARE is supporting in the emergency response to ensure clean water supplies are quickly reestablished and communities know how to keep themselves safe and healthy in the aftermath of the extremely powerful cyclone.  Live & Learn has been working in Fiji since 1999 and CARE has deployed emergency response experts to support them in the scaling up of the emergency response. ',
      '1999',
      '15',
      '150'
    ],
    Finland: [
      [ 'IMG_0458.JPEG' ],
      'Karjalanpaisti',
      'https://www.europeancuisines.com/Finland-Finnish-Karelian-Ragout-Karjalan-Paisti-Beef-Lamb-Pork-Slow-Cook-Stew-Recipe',
      'The Karelian hot pot or Karelian stew (Finnish: karjalanpaisti; Russian: рагу по-карельски ragu po-karelski; Swedish: karelsk stek) is a traditional meat stew originating from the region of Karelia. It is commonly prepared using a combination of pork and beef, but elk or lamb can also be used. Along with the Karelian pasties (karjalanpiirakat), it is the most widely recognised Karelian food in Finland. In 2007, it was selected as the national dish of Finland by the readers of the Finnish tabloid Iltalehti. In similar poll organized by the ELO Foundation for the Promotion of Finnish Food Culture in cooperation with the Central Union of Agricultural Producers and Forest Owners MTK and the Finnish Ministry of Agriculture and Forestry in autumn 2016, Karelian hot pot took second place, losing to rye bread.',
      ' ',
      ' ',
      '10',
      '300'
    ],
    France: [
      [ 'IMG_1512.JPEG', 'IMG_1514.JPEG', 'IMG_1516.JPEG' ],
      'Pot-Au-Feu',
      'https://www.jamesbeard.org/recipes/pot-au-feu',
      'Pot-au-feu ("pot on the fire") is a French beef stew. According to the chef Raymond Blanc, pot-au-feu is "the quintessence of French family cuisine; it is the most celebrated dish in France and considered a national dish. It honours the tables of the rich and poor alike." It is a typical dish served in winter.',
      "For more than 30 years, CARE France has fought against poverty by promoting respect for the basic rights of vulnerable populations and carrying out projects related to health, food security, education, access to water, economic development and disaster risk and preparedness.WHERE WE WORKWhere We Work MapFranceFranceWebsite: https://www.carefrance.org/CARE's ImpactTYPE OF WORKFundraisingCARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.CARE was founded in 1945, when 22 American organizations came together to rush lifesaving CARE Packages® to survivors of World War II. Thousands of Americans, including President Harry S. Truman, contributed to the effort. On May 11, 1946, the first 20,000 packages reached the battered port of Le Havre, France. By the time CARE phased out the program two decades later, more than 100 million CARE Packages reached people in need, first in Europe and later in Asia and other parts of the developing world. On November 4, 1983, CARE France was created. In 2003, CARE France began to help abandoned children in Romania through our merger with BE (Solidarity Romanians Abandoned Children) association. For more than 30 years, CARE France has fought against poverty by promoting respect for the basic rights of vulnerable populations and carrying out projects related to health, food security, education, access to water, economic development and disaster risk and preparedness. ",
      '1946',
      '15',
      '340'
    ],
    Gabon: [
      [ 'IMG_2176.JPEG', 'IMG_2177.JPEG' ],
      'Poulet Nyembwe',
      'http://www.congocookbook.com/category-chicken-recipes/poulet-moambe-poulet-nyembwe/',
      'Poulet Nyembwe is considered the national dish of Gabon, consisting of bite-sized pieces of chicken in nyembwe sauce. The sauce is traditionally made from the ripe red fruit surrounding the seeds of African oil palms. Chicken pieces are flavored with onions, tomatoes, okra, garlic, hot peppers, salt, and either black, cayenne, or red pepper. The meat is then simmered over low heat in nyembwe sauce until all of the ingredients are tender. It is recommended to serve the dish with fufu or rice on the side.',
      ' ',
      ' ',
      '20',
      '50'
    ],
    Georgia: [
      [ 'IMG_0569.JPEG', 'IMG_0570.JPEG' ],
      'Khachapuri',
      'https://www.kingarthurbaking.com/recipes/khachapuri-georgian-feast-bread-recipe',
      'Khachapuri is a traditional Georgian dish of cheese-filled bread. The bread is leavened and allowed to rise, molded into various shapes, and then filled in the center with a mixture of cheese (fresh or aged, most commonly, specialized Khachapuri cheese), eggs, and other ingredients. The bread crust is traditionally torn off and dipped into the cheese.',
      'Responding to common needs and challenges, CARE works at a cross-border and regional level to support the development of civil society and reduce poverty. In partnership with local organizations, CARE strives to increase women’s roles in peace-building and supports dialogue across existing dividing lines in the South Caucasus. CARE was among the first aid agencies to respond to the humanitarian crisis in Georgia in August 2008. Our efforts focused on helping those who fled their homes, those who returned to damaged and looted houses, and those struggling to make ends meet. We have offered both humanitarian aid to those affected by the conflict, and development assistance to the poorest in the rural areas of the South Caucasus. Our work in the South Caucasus focuses on: support for internally displaced people strengthening women’s capacity for peace-building humanitarian assistance good governance and civil society developmentpro-poor economic development agriculture development CARE has been working in the Caucasus, a region located on the borders of Europe and Asia, since 1993.  ',
      '1992',
      '60',
      '30'
    ],
    Germany: [
      [ 'IMG_2625.JPEG', 'IMG_2629.JPEG', 'IMG_2630.JPEG' ],
      'Sauerbraten',
      'https://www.quick-german-recipes.com/sauerbraten-recipe.html',
      'Sauerbraten is a traditional German roast of heavily marinated meat. It is regarded as a national dish of Germany, and is frequently served in German-style restaurants internationally. It can be prepared from a variety of meats, most often from beef, but also from venison, lamb and mutton, pork and horse. Before cooking, the raw meat is marinated for three to ten days in a mixture of vinegar or wine, water, herbs, spices, and seasonings. Usually, tougher cuts of meat, such as rump roast or bottom round of beef, are used, and the long marinating tenderizes the meat. A Sauerbraten dinner is almost always accompanied by a hearty gravy resulting from its roasting and is most often served with potato pancakes (Kartoffelpuffer), potato dumplings (Kartoffelklöße), or Spätzle.',
      ' ',
      ' ',
      '15',
      '210'
    ],
    Ghana: [
      [ 'IMG_3025.JPG', 'IMG_3026.JPG' ],
      'Waakye',
      'https://thecanadianafrican.com/waakyeghanaian-rice-and-beans/',
      'Waakye s a Ghanaian dish of cooked rice and beans, commonly eaten for breakfast or lunch. However, others eat it for supper. The rice and beans, usually black eyed peas or cow beans, are cooked together, along with red dried sorghum leaf sheaths or stalks and limestone. The sorghum leaves and limestone give the dish its characteristic flavor and a red appearance and the sorghum is taken out before consumption. The word waakye is from the Hausa language and means beans. It is the contracted form of the full name shinkafa da wake which means rice and beans.',
      'CARE began operations in Ghana in 1994. Since then the Accra office expanded to support programs in Togo and Benin under the umbrella of the CARE Gulf of Guinea country mission.In July 2010, CARE replaced the three-country mission with country offices in Ghana and Benin, the latter of which is also responsible for a small number of activities in Togo.CARE Ghana’s projects are primarily implemented through partnerships with local and civil society organizations. This enables CARE to further engage with government and the private sector, work effectively in coalitions, and to have the greatest possible impact. CARE Ghana prioritizes the rural and vulnerable poor – women in particular – and organizes its work around health, governance, sustainable livelihoods and education.',
      '1994',
      '0',
      '50'
    ],
    Greece: [
      [ 'IMG_2745.JPEG', 'IMG_2747.JPEG', 'IMG_2751.JPEG' ],
      'Gyro',
      'https://www.mygreekdish.com/recipe/homemade-greek-chicken-gyro-recipe/',
      'Gyros is a food item of Greek origin made from meat cooked on a vertical rotisserie and served wrapped or stuffed in pita bread, along with ingredients such as tomato, onion, fried potatoes, and tzatziki. In Greece, it is normally made with pork or sometimes with chicken, whilst beef and lamb are also used in other countries. For hand-made gyros, meat is cut into approximately round, thin, flat slices, which are then stacked on a spit and seasoned. Fat trimmings are usually interspersed. Spices may include cumin, oregano, thyme, rosemary, and others. The pieces of meat, in the shape of an inverted cone, are placed on a tall vertical rotisserie, which turns slowly in front of a source of heat or broiler. As the cone cooks, lower parts are basted with the juices running off the upper parts. The outside of the meat is sliced vertically in thin, crisp shavings when done.',
      'With the influx of refugees to Europe, CARE started assisting refugees stranded in Greece. From 2016 to March 2018, CARE and partner organizations supported those stranded in Greece by providing debit cash cards, legal and psychosocial assistance, specialized accommodation for vulnerable women and young men and very much needed support with translations and bureaucratic processes. As CARE was phasing out from Greece, we made all efforts to ensure the continuation of the services we have been offering by handing over these projects to local organizations, most of them receiving funding from UNHCR. CARE has established its mission in Greece as a temporary emergency response and it is welcoming the increasing role played by local organizations and the municipalities, while it is still looking forward to a more strategic leadership to be taken up by the government. Since 2016, CARE has assisted more than 18,600 persons in Greece. CARE remains committed to continue monitoring the situation of refugees in Greece and will remain in close cooperation with local partners and the key actors from the local network in order to be able to respond as soon as possible if needed again in the future. ',
      '1946',
      '15',
      '90'
    ],
    Grenada: [
      [ 'IMG_2949.JPEG', 'IMG_2950.JPEG' ],
      'Oil Down',
      'https://caribbeanpot.com/an-unconventional-grenadian-oil-down/',
      'Oil down is a salted meat and vegetable stew that is the national dish of Grenada, a stew of breadfruit, salted meat, chicken, dumplings, callaloo, and other vegetables stewed in coconut milk, herbs, and spices. The name refers to the fact that the oil from the coconut milk used in cooking is either absorbed by the ingredients or settles to the bottom of the cooking pot. All of the liquid is cooked down (dried out), hence the name oil down.',
      ' ',
      ' ',
      '15',
      '40'
    ],
    Guinea: [
      [ 'IMG_0245.jpeg', 'IMG_0246.jpeg' ],
      'Chicken Yassa',
      'https://www.africanbites.com/yassa-chickenpoulet-au-yassa/',
      'Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish. Originally from Senegal, yassa has become popular throughout West Africa. Chicken yassa (known as yassa au poulet), prepared with onions, lemon or mustard, is a specialty from the Casamance region in the south of Senegal. Other meats used for yassa are lamb and fish.',
      'In 2014, CARE recommended a sub-regional approach for Guinea, Liberia, Sierra Leone and Côte d’Ivoire: an operational presence and country office in Côte d’Ivoire and Sierra Leone, and a limited presence in Guinea and Liberia with interventions through local partner organizations. CARE’s primary activities are working with migrants, and vocational education in food trade, fish trade, transport, catering, spare parts trade, and poultry production/trade.CARE’s intervention in Guinea dates back to the 1990s and the refugee crisis caused by two wars in neighboring Liberia and Sierra Leone. CARE worked in refugee camps under the auspices of UNHCR until 2001 and then left Guinea. ',
      '1990s',
      '15',
      '50'
    ],
    'Guinea-Bissau': [
      [ 'IMG_0244.jpeg' ],
      'Jollof Rice',
      'https://cooking.nytimes.com/recipes/1018069-jollof-rice',
      'Jollof, or jollof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions.',
      ' ',
      ' ',
      '30',
      '30'
    ],
    Guyana: [
      [ 'IMG_2148.JPEG', 'IMG_3068.jpeg' ],
      'Pepperpot',
      'https://www.alicaspepperpot.com/pepperpot-on-christmas-morning/',
      "Pepperpot is an Amerindian-derived dish popular in Guyana. It is traditionally served at Christmas and other special events. Along with chicken curry, and cook-up rice, pepperpot is one of Guyana's national dishes. Pepperpot is a stewed meat dish, strongly flavoured with cinnamon, cassareep (a special sauce made from the cassava root) and other basic ingredients, including Caribbean hot peppers. Beef, pork, and mutton are the most popular meats used, though some have been known to use chicken. Pepperpot is popularly served with a dense Guyanese-style homemade or home-style bread, rice, or roti. It can also be served with boiled vegetables such as cassava, eddoes, sweet potatoes, and green or ripe plantains.",
      ' ',
      ' ',
      '0',
      '195'
    ],
    Haiti: [
      [ 'B066507A-D023-4DCA-9A61-6A14BEC5E38E.jpg' ],
      'Rice and Beans',
      'https://loveforhaitianfood.com/recipe/diri-kole-ak-pwa-wouj-red-beans-and-rice/',
      'Red beans and rice is an emblematic dish of Louisiana Creole cuisine (not originally of Cajun cuisine) traditionally made on Mondays with red beans, vegetables (bell pepper, onion, and celery), spices (thyme, cayenne pepper, and bay leaf) and pork bones as left over from Sunday dinner, cooked together slowly in a pot and served over rice. Meats such as ham, sausage (most commonly andouille), and tasso ham are also frequently used in the dish. The dish is customary – ham was traditionally a Sunday meal and Monday was washday. A pot of beans could sit on the stove and simmer while the women were busy scrubbing clothes. The dish is now fairly common throughout the Southeast.',
      'CARE Haiti is one of the main non-governmental organizations engaged in the implementation of development programs while upholding its humanitarian mandate. More than 60 years of experience in the area have taught us that to eradicate poverty, we must tackle its root causes and adopt a rights-based approach. CARE understands that community members are themselves a key element in solving the problems they face, particularly women and children. In Haiti, CARE works to promote local capacity building; works with others to maximize the impact of its programs; reports and promotes a sense of responsibility; seeks to eliminate discrimination; and looks for lasting results. Following the devastating earthquake of January 12, 2010, CARE extended its support to people in the affected areas of Léogâne and Port-au-Prince, providing access to safe water and sanitation, decent housing and improving skills in building sturdier structures. Since the cholera outbreak in October 2010, CARE has been particularly active in rural areas of the country to spread prevention messages, improve safe water supplies and support medical facilities with essential materials. In 1954, CARE opened an office in Haiti to provide emergency assistance to the population affected by the passage of Hurricane Hazel.',
      '1954',
      ' ',
      ' '
    ],
    Honduras: [
      [ 'IMG_0290.jpeg', 'IMG_0291.jpeg', 'IMG_0293.jpeg' ],
      'Baleadas',
      'https://www.onehappyhousewife.com/honduran-baleadas/',
      'A baleada is a traditional Central American dish, believed to have originated on the northern coast of Honduras. It is composed of a flour tortilla, filled with a smear of mashed "refried" red beans (a variety of bean native to Central and South America), crema (mantequilla blanca), and crumbled queso duro (salty hard cheese). ',
      'CARE began operations in Honduras in 1954, providing emergency assistance to hurricane victims and running small-scale food programs.In Honduras, CARE’s work focuses on tackling the causes of poverty in Honduras’ poorest communities. Our current programs include health and nutrition, small business development, agroforestry, irrigation, micro-watershed protection and environmental education. We work with farmers to help them grow different crops and access markets, to improve their livelihoods and access to food. CARE began operations in Honduras in 1954, providing emergency assistance to hurricane victims and running small-scale food programs. CARE officially established its country office in Honduras in 1959, beginning with food distribution programs and eventually moving toward a sustainable development program.',
      '1954',
      '27',
      '32'
    ],
    Hungary: [
      [ 'IMG_0249.JPEG', 'IMG_0250.JPEG', 'IMG_0251.JPEG' ],
      'Goulash',
      'https://www.spendwithpennies.com/hungarian-goulash/',
      'Goulash is a soup or stew of meat and vegetables seasoned with paprika and other spices. Originating in Hungary, goulash is a common meal predominantly eaten in Central Europe but also in other parts of Europe. It is one of the national dishes of Hungary and a symbol of the country.',
      ' ',
      ' ',
      '30',
      '90'
    ],
    India: [
      [ 'IMG_1090.JPEG', 'IMG_1092.JPEG' ],
      'Lamb Roganjosh',
      'https://www.recipetineats.com/rogan-josh/',
      'Rogan josh, also spelled roghan josh or roghan ghosht, is an aromatic curried meat dish of Kashmiri origin. It is made with red meat—traditionally lamb, mutton, or goat—and coloured and flavoured primarily by alkanet flower (or root) and Kashmiri chilies. It is one of the signature recipes of Kashmiri cuisine. Rogan josh consists of pieces of lamb or mutton braised with a gravy flavoured with garlic, ginger and aromatic spices (clove, bay leaves, cardamom, and cinnamon), and in some versions incorporating onions or yogurt. After initial braising, the dish may be finished using the dampokhtak slow cooking technique.',
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.CARE has been working in India for 70 years, focusing on ending poverty and social injustice. We do this through well-planned and comprehensive programs in health, education, livelihoods and disaster preparedness and response. Our overall goal is the empowerment of women and girls from poor and marginalized communities leading to improvement in their lives and livelihoods. By collaborating with community groups, government departments, and professional bodies, CARE India ensures that the most vulnerable can affect and sustain equitable change. CARE works with the poorest of the poor in more than 100 districts, in a total of 11 states across India. In 2008, CARE became nationally registered in India, which allows CARE an even greater opportunity to work with national partners and ensure that the poor benefit from India’s new wealth.  ',
      '1950',
      '20',
      '150'
    ],
    Indonesia: [
      [ 'IMG_0435.JPEG' ],
      'Soto',
      'https://glebekitchen.com/soto-ayam-indonesian-chicken-noodle-soup/',
      "Soto (also known as sroto, tauto, saoto, or coto) is a traditional Indonesian soup mainly composed of broth, meat, and vegetables. Many traditional soups are called soto, whereas foreign and Western influenced soups are called sop. Soto is sometimes considered Indonesia's national dish, as it is served from Sumatra to Papua, in a wide range of variations. Soto is omnipresent in Indonesia, available in many warungs and open-air eateries on many street corners, to fine dining restaurants and luxurious hotels. Soto, especially soto ayam (chicken soto), is an Indonesian equivalent of chicken soup. Because it is always served warm with a tender texture, it is considered an Indonesian comfort food.",
      'CARE has worked in Indonesia since 1967, initially in food distribution, small infrastructure projects, health, environment, water and sanitation.  In the wake of a series of shocks in the late 1990s, we redirected our focus towards emergency programming.  When the 2004 tsunami hit, we were one of the first international aid agencies to respond, providing people with desperately needed food, water and shelter.  Today our work in Indonesia focuses on disaster risk reduction and emergency response, natural resource management and responding to climate change, health and livelihoods. We also work on child rights and support at-risk youth. ',
      '1967',
      '20',
      '60'
    ],
    Iran: [
      [ 'IMG_0700.JPEG', 'IMG_0701.JPEG', 'IMG_0702.JPEG' ],
      'Abgoosht',
      'https://www.welcometoiran.com/abgousht-qonabid-qonabid-broth/',
      'Abgoosht is an Iranian stew. It is also called dizi, which refers to the traditional stoneware crocks it is served in. Some describe it as a "hearty mutton Persian soup thickened with chickpeas". Ābgoosht is usually made with lamb, chickpeas, white beans, onion, potatoes, tomatoes, turmeric, and dried lime. Other variations exist in the beans used, such as kidney beans and black-eyed peas. The ingredients are combined and cooked until done, at which point the dish is strained. The solids are mashed as gusht kubideh and served with the broth, but in a separate dish, along with flatbread. It is a form of Piti, which encompasses many similar dishes in the region.',
      ' ',
      ' ',
      '15',
      '270'
    ],
    Iraq: [
      [ 'IMG_1100.JPEG' ],
      'Masgouf',
      'https://cardamomandtea.com/341/masgouf/',
      'Masgouf is a Mesopotamian dish consisting of seasoned, grilled carp; it is often considered the national dish of Iraq .It is a fish roasted for hours after being marinated with olive oil, salt, curcuma and tamarind while keeping the skin on. Traditional garnishes for the masgouf include lemon, chopped onions and tomatoes, as well as the clay-oven flatbreads common to Iraq and much of the Middle East.',
      'CARE focuses its humanitarian programs in Northern Iraq. In and around the city of Mosul, CARE delivers water, sanitation, shelter and household items. In Mosul city and other areas of Northern Nineveh, CARE is also rehabilitating and equipping public health centers with medical equipment and supplies and providing nutritional and educational services to pregnant women and new mothers. CARE is also training midwives and traditional birth attendants to deliver maternal health services.  In camps for displaced people and surrounding host communities in Northern Iraq, CARE works with partners to provide clean drinking water and hygiene items, regularly repairs and maintains the water and sanitation facilities in the camps and provides garbage collection and septic tank emptying services. This ensures that the camp’s water and sanitation facilities are operating, and people can stay healthy. ',
      '1963',
      '30',
      '30'
    ],
    Ireland: [/////
      [ ],
      'Irish Stew',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    Israel: [
      [ 'IMG_3003.JPEG', 'IMG_3004.JPEG' ],
      'Meorav Yerushalmi',
      'https://jamiegeller.com/recipes/jerusalem-mixed-grill/',
      "Jerusalem mixed grill (me'orav Yerushalmi) is a grilled meat dish considered a specialty of Jerusalem. It consists of chicken hearts, spleens and liver mixed with bits of lamb cooked on a flat grill, seasoned with onion, garlic, black pepper, cumin, turmeric, olive oil and coriander. The dish is said to have been invented at the Mahane Yehuda Market, with various restaurants claiming to be the originators.",
      ' ',
      ' ',
      '115',
      '20'
    ],
    Italy: [
      [ 'IMG_0277.jpg', 'IMG_0904.JPEG', 'IMG_1342.JPEG' ],
      'Pasta',
      'https://memoriediangelina.com/2009/09/11/how-to-make-fresh-egg-pasta/',
      'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine.',
      'CARE worked in Italy between 1946 and 1965, delivering CARE Packages of food, tools, woolens and to provide trainings.  CARE returned to Italy in 2019 to work with partners to help migrants in Ventimiglia, conducting individual and group interviews for legal guidance and addressing services for a total of 100 persons per month; distributing relief kits; and holding workshops in primary and secondary schools on citizenship. An important piece of this work was about integration into host communities, and advocacy to influence local authorities with best practices in migrants in transit. ',
      '1946',
      '45',
      '15'
    ],
    'Ivory Coast': [
      [ 'IMG_2411.JPEG', 'IMG_2412.JPEG' ],
      'Kedjenou',
      'https://www.africanbites.com/kedjenou-chicken/',
      "Kedjenou (also known as Kedjenou poulet and Kedjenou de Poulet) is a spicy stew that is slow-cooked in a sealed canari (terra-cotta pot) over fire or coals and prepared with chicken or guinea hen and vegetables. It is a traditional and popular dish of the cuisine of Côte d'Ivoire. Preparation methods for the stew vary. Sometimes little or no added liquid is used in its preparation, allowing the meat to cook in its own juices, which tenderizes the meat and concentrates the flavors of the ingredients. Sometimes the dish is cooked in a wrapped and sealed banana leaf that is placed under hot coals.[4] In Côte d'Ivoire the dish is traditionally served with Attiéké, a side dish made with grated cassava.",
      'Political instability and violence in Cote d’Ivoire has forced many people to flee their homes in recent years. Today our projects include urban sanitation, social cohesion, peacebuilding and conflict resolution, malaria, HIV and AIDS, repairing infrastructure, strengthening institutions, microfinance and helping people earn a living. We are also working with cocoa farmers through the Cocoa Life partnership.  CARE began working in the country in 2000, helping those displaced by civil unrest and other poor communities gain access to food and clean water. We also addressed serious health issues in regions where formal health systems had crumbled.  ',
      '2000',
      '10',
      '60'
    ],
    Jamaica: [
      [ 'IMG_1962.JPEG', 'IMG_1965.JPEG', 'IMG_1969.JPEG' ],
      'Ackee & Saltfish',
      'https://jamaicanfoodsandrecipes.com/jamaican-ackee-and-salt-fish-recipe/',
      'Ackee and saltfish is the Jamaican national dish prepared with ackee and salted codfish. To prepare the dish, salt cod is sautéed with boiled ackee, onions, Scotch bonnet peppers, tomatoes, then seasoned with spices like pepper and paprika. It can be garnished with bacon and tomatoes, and is usually served as breakfast alongside breadfruit, hard dough bread, dumplings, or boiled green bananas. Ackee and saltfish can also be eaten with rice and peas or plain white rice. When seasonings (onion, escallion, thyme, garlic) and saltfish are combined with plain rice it is often called "seasoned rice", which can be a one-pot meal including ackee.',
      ' ',
      ' ',
      '10',
      '20'
    ],
    Jordan: [
      [ 'IMG_2661.JPEG', 'IMG_2662.JPEG', 'IMG_2663.JPEG' ],
      'Mansaf',
      'https://theodehlicious.com/jordanian-mansaf-recipe/',
      'Mansaf is a traditional Arab dish made of lamb cooked in a sauce of fermented dried yogurt and served with rice or bulgur. It is a popular dish eaten throughout the Levant. It is considered the national dish of Jordan, and can also be found in Israel, Kuwait, Saudi Arabia and Syria. The name of the dish comes from the term "large tray" or "large dish".',
      'CARE began work in Jordan in 1948 to meet the needs of Palestinian refugees displaced with the creation of Israel. Jordan continues to offer a safe haven to those fleeing conflict, and hundreds of thousands of refugees have arrived from Iraq and Syria over the last decade. Jordan has very limited resources and is one of the most water-scarce countries in the world. Unemployment is high, particularly among women, and conflicts in neighboring countries threaten stability. CARE works with refugees and host communities, with a particular focus on women, girls and vulnerable families, to help them deal with the effects of conflict, economic disparity, discrimination and a fragile resource base. As the population doubles over the next two decades, water scarcity will become an even greater problem and will challenge farmers to improve food security through environmentally sustainable agricultural practices. Jordan has hosted up to 800,000 refugees fleeing violence and insecurity in Iraq between 2003 and 2009, thousands of whom still live in Jordan. Since 2011 until today, the country has been home to more than 660,000 refugees to date who have fled the conflict in Syria, including 35,000 at the Azraq refugee camp where CARE works to meet their needs. Additionally, CARE supports refugees from other nationalities, such as Palestinians, Sudanese, and Somalians, as well as vulnerable Jordanians.',
      '1960',
      '20',
      '135'
    ],
    Kazakhstan: [
      [ 'IMG_0984.JPEG', 'IMG_0988.JPEG', 'IMG_0989.JPEG' ],
      'Beshbarmak',
      'https://foodperestroika.com/2015/11/09/beshbarmak-kazakhstans-national-dish/',
      'Beshbarmak is a dish from Central Asian cuisine. It is also known as naryn in Xinjiang, Uzbekistan, Kyrgyzstan and Kazakhstan, as turama or dograma in Karakalpakstan, North Caucasus and Turkmenistan, as kullama in Bashkortostan and Tatarstan. It is a national dish of Kyrgyzstan and Kazakhstan. The term beshbarmak means "five fingers" because nomads traditionally eat this dish with their hands. Beshbarmak is usually made from finely chopped boiled meat, mixed with dough (typically egg noodles) and chyk, an onion sauce. It is typically served on large communal platters, shared between several people, after shorpo, which is a first course of mutton broth served in bowls called kese. It is also followed by a broth called ak-serke (shorpo mixed with kymyz or ayran), which is thought to help with settling the stomach. Festive beshbarmak can be cooked together with kazy and chuchuk.',
      ' ',
      ' ',
      '50',
      '205'
    ],
    Kenya: [
      [ 'IMG_2472.JPEG' ],
      'Sukuma Wiki',
      'https://www.africanbites.com/sukuma-wiki/',
      'Sukuma wiki is an East African dish made with collard greens, known as sukuma, cooked with onions and spices. It is often served and eaten with ugali (made from maize flour).  Sukuma wiki is a very rustic African dish, enjoyed in many parts of East African countries like Kenya, Tanzania.',
      'Despite being one of Africa’s most developed nations, the gap between rich and poor in Kenya is growing. CARE has been here in since 1968, supporting the work of Harambee, the village-level self-help movement. CARE initially provided schools and worked on community development and long-term agro-forestry projects.  Today CARE works with communities on health, livelihoods, water and sanitation, climate change adaptation and disaster risk reduction. We support refugees with water and hygiene, food and formal education in camps along the Somali border. We also work with civil society and local organizations to help them build their skills and knowledge. You May Also LikeHaiti Hit by 7.2 Magnitude EarthquakeDadaab Refuge Camp Kenya ArchivesVoice of America: Pen Pal Program Connects US...CARE LogoCARE works around the globe to save lives, defeat poverty and achieve social justice. We seek a world of hope, inclusion and social justice, where poverty has been overcome and all people live with dignity and security.90% of all our expenses go to program services.Learn moreOur WorkGet InvolvedNews & StoriesAbout UsDonateContact UsCareersCorporate PartnershipsAccountability & TransparencyAnnual ReportsFinancial ResponsibilityEquity & InclusionCARE is a 501(c)(3) not-for-profit organization. Our EIN number is 13-1685039. © 2020 CARE. All rights reserved.Privacy PolicyTerms of UseSitemapText CARE to 227387 to stay connected.',
      '1968',
      '10',
      '20'
    ],
    Kiribati: [
      [ 'IMG_3061.JPEG', 'IMG_3062.JPEG', 'IMG_3063.JPEG' ],
      'Coconut Curry Lobster',
      'http://globaltableadventure.com/recipe/roasted-lobster-tails-with-coconut-curry-dipping-sauce/',
      'The name of this Kiribati specialty is self-explanatory: lobster tails are roasted in the oven and accompanied by a coconut curry dipping sauce on the side. Lobster tails are usually just drizzled with oil and baked, while the creamy sauce is a combination of coconut milk, curry powder, turmeric, ginger, and salt. The dish is typically consumed as an appetizer and is often served with rice.',
      ' ',
      ' ',
      '15',
      '10'
    ],
    Kosovo: [
      [ 'IMG_2762.JPEG', 'IMG_2764.JPEG', 'IMG_2765.JPEG' ],
      'Flija',
      'https://bakingaround.wordpress.com/2017/03/03/kosovo-flija/',
      'Flia, also known as fli or flija, is a dish in Kosovan cuisine and Albanian cuisine. It consists of multiple crêpe-like layers brushed with cream and served with sour cream and butter. The name translates to "sacrifice". March 17 is recognized as "Flia Day" in which families invite their relatives for preparing and eating flia. Flija requires very simple ingredients: flour, water, butter, yogurt, eggs, oil, nuts and salt. The main ingredients (flour, water and salt) are mixed together until they become like pancake batter. Layers of batter are baked using a saq which is a spherical metal lid used for baking.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region.  To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission.  We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.  ',
      '1993',
      '10',
      '50'
    ],
    Kuwait: [
      [ 'IMG_2107.JPEG' ],
      'Murabyan',
      'https://delintia.com/en/murabyan/',
      'Murabyan is loaded with shrimp in the rice and has more in the topping. Shrimp is popular in Kuwait as they are found in the Gulf. The dish is flavored with sauteed onions, turmeric, coriander and dried loomi (a dried black lime). ',
      ' ',
      ' ',
      '15',
      '50'
    ],
    Kyrgyzstan: [
      [ 'IMG_2241.JPEG', 'IMG_2242.JPEG' ],
      'Laghman',
      'https://www.diariesofmagazine.com/recipe-laghman-kyrgyzstan/',
      'Laghman is a dish of meat, vegetables and pulled noodles from Chinese cuisine and Central Asian cuisine. It is especially popular in Kazakhstan and Kyrgyzstan, where it is considered a national dish of the local Uyghur and Dungan (Hui) ethnic minorities. It is also popular in Russia, Uzbekistan, Tajikistan, Turkmenistan and Northeastern Afghanistan, where chickpeas are added to it and parts of Northern Pakistan.',
      ' ',
      ' ',
      '60',
      '40'
    ],
    Latvia: [
      [ 'IMG_2345.JPEG', 'IMG_2369.JPEG' ],
      'Layered Rye Bread',
      'https://www.missfoodwise.com/2017/12/latvian-rye-trifle-visit-riga.html/',
      'Layered rye bread is a traditional Latvian dessert made from rye breadcrumbs, blackcurrant or lingonberry jam, and whipped cream. It is topped off with grated dark chocolate and/or cinnamon and often served with fresh berries and cottage cheese ice cream. Layered rye bread similar in appearance and construction to the trifle of the British Isles, and is sometimes called rye bread trifle or Latvian ambrosia. Layered rye bread is an iconic Latvian food, and is considered one of the national dishes. It was the sweet chosen to represent Latvia in the Café Europe initiative of the Austrian presidency of the European Union, on Europe Day 2006.',
      ' ',
      ' ',
      '0',
      '20'
    ],
    Lebanon: [
      [ 'IMG_2677.JPEG', 'IMG_2679.JPEG', 'IMG_2682.JPEG' ],
      'Tabboueleh',
      'https://zaatarandzaytoun.com/tabbouleh/',
      'Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur (soaked, not cooked), and seasoned with olive oil, lemon juice, salt and sweet pepper. Some variations add lettuce, or use semolina instead of bulgur. Tabbouleh is traditionally served as part of a mezze in the Eastern Mediterranean and the Arab world.',
      'Refugees, most of them fleeing the conflict in Syria, account for almost a quarter of the population in Lebanon. Most refugee families live in unfurnished houses, work sites or tents. CARE works with local authorities to improve water supply and sanitation infrastructure for refugees and host communities, and we meet their most basic and pressing needs, including sustainable livelihood opportunities and economic self-reliance, understanding how emergencies may create or reinforce opportunities for sexual exploitation and abuse of women and girls, and protecting girls’ pathways to education. CARE began working in Lebanon in 2006, to help meet the needs of people affected by conflict. We initially worked through Lebanese partner organizations, and then through our own country office to address the needs of refugees and their host communities.  ',
      '2006',
      '30',
      '0'
    ],
    Liechtenstein: [
      [ 'IMG_0367.jpeg' ],
      'Kasknopfle',
      'https://ethnicfoodsrus.com/around-the-world-recipes/smallest-countries-worldwide-cuisines/liechtensteiner-cuisine/tri-cheese-pasta-with-onion-kasknopfle/',
      'Käsespätzle (German for "spätzle with cheese", also called Käsknöpfle in Vorarlberg and Liechtenstein or Kasnocken in Tyrol) is a traditional dish of the German regions of Swabia, Baden and Allgäu, and also in the Austrian regions Vorarlberg and Tyrol, as well as Liechtenstein and Switzerland. Hot spätzle and grated cheese, such as Emmentaler or granular cheese, are layered alternately and are finally decorated with fried onions. After adding each layer, the käsespätzle is put into the oven until warmed and the cheese is melted.',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    Lesotho: [
      [ 'IMG_0466.JPEG', 'IMG_0470.JPEG' ],
      'Chakalaka',
      'https://www.africanbites.com/chakalaka/',
      'Chakalaka is a South African vegetable relish, usually spicy, that is traditionally served with bread, pap, samp, stews, or curries. Chakalaka may have originated in the townships of Johannesburg or on the gold mines surrounding Johannesburg, when Mozambican mineworkers coming off shift cooked tinned produce (tomatoes, beans) with chili to produce a spicy relish with a Portuguese style to accompany pap. Many variations of chakalaka exist, depending on region and family tradition. Some versions include beans, cabbage and butternut. For example, canned baked beans, canned tomatoes, onion, garlic, and curry paste can be used to make the dish.',
      ' ',
      ' ',
      '20',
      '20'
    ],
    Liberia: [
      [ 'IMG_2525.JPEG', 'IMG_2526.JPEG' ],
      'Liberian Chicken Gravy',
      'https://www.africanbites.com/liberian-chicken-gravy/',
      'Liberian chicken gravy is a flavorful, scrumptious stew that is traditionally prepared only for special occasions because meat is quite expensive for the average Liberian household. The stew typically consists of chicken pieces, shrimp, green beans, bell peppers, tomatoes, onions, and chicken stock. While the dish is simmering, it is often flavored with garlic, ginger, hot peppers, and parsley. When the chicken gravy is ready to be served, it is usually paired with white rice on the side.',
      'CARE restarted programs in Liberia in 2008, having last worked there 25 years previously. Our ultimate goal is to help consolidate peace in the country by building a productive, fair and cohesive society whose members have enough food and a good quality of life. Our programs – which particularly target women and young people – focus on food security, water and sanitation, earning a decent living and environmentally sustainable farming. We train community members who can then train others, offer technical support where needed, run awareness-raising campaigns (including responding to the 2014 Ebola outbreak), and work alongside the government to build skills and knowledge. ',
      '1961',
      '20',
      '40'
    ],
    Libya: [
      [ 'IMG_1241.JPEG', 'IMG_1242.JPEG' ],
      'Bazeen',
      'http://libyanfood.blogspot.com/2010/08/bazeen.html',
      'Bazin, is an unleavened bread in the cuisine of Libya prepared with barley, water and salt. Bazin is prepared by boiling barley flour in water and then beating it to create a dough using a magraf, which is a unique stick designed for this purpose. The dough may then be placed in a pan and allowed time to harden, after which it is baked or steamed. The salt contributes to the hardness of the bazin. Bazin may have a paste-like and hardened texture. It may also be prepared using whole wheat flour, olive oil and pepper as ingredients. Bazin is typically served with a tomato sauce, eggs, potatoes and mutton. This preparation method involves shaping the dough into the shape of a pyramid or dome, after which it may be served with a tomato-based soup or meat-and-potato stew poured atop or around it and garnished with hard-boiled eggs. A raw egg may also be placed in the hot soup. Aseeda is a dish prepared using bazin, honey, date syrup and butter or oil.[3] Bazin may also be accompanied with a cooked pumpkin and tomato sauce mixture',
      ' ',
      ' ',
      '10',
      '120'
    ],
    Lithuania: [
      [ 'IMG_0418.JPEG' ],
      'Cepelinai',
      'http://lithuanianhomecooking.com/home/time-for-cepelinai',
      'Cepelinai or didžkukuliai are potato dumplings made from grated and riced potatoes and stuffed with ground meat, dry curd cheese or mushrooms. It has been described as a national dish of Lithuania, and is typically served as a main dish.',
      ' ',
      ' ',
      '75',
      '60'
    ],
    Luxembourg: [
      [ 'IMG_3031.JPEG', 'IMG_3033.JPEG' ],
      'Judd Mat Gaardebounen',
      'https://www.luxtimes.lu/en/dining-and-nightlife/local-food-pork-and-bacon-dishes-602d6f6dde135b9236ba2ff6',
      'Judd mat Gaardebounen is a savory dish of smoked pork collar and broad beans which is one of the most widely recognized national dishes of Luxembourg. It is associated with the village of Gostingen in the south-east of the country where the inhabitants have earned the nickname of Bounepatscherten as a result of their well-known broad beans.',
      ' ',
      ' ',
      '10',
      '160'
    ],
    Madagascar: [
      [ 'IMG_0762.JPEG', 'IMG_0763.JPEG', 'IMG_0770.jpeg' ],
      'Romazava',
      'http://aroundtheblockwithjenni.com/blog/2020/5/15/traditional-malagasy-dish-romazava',
      'Romazava is the national dish of Madagascar, consisting of greens, zebu meat, tomatoes, and onions, typically accompanied by a portion of rice. An integral component of the stew is brèdes mafana, called anamalaho in Malagasy: The plant holds an acid amide called Spilanthol in its buds that elicits a tingly, pungent, citrusy and mouth-numbing effect, inducing excessive saliva production.',
      'ARE began working in Madagascar in 1992 to address the root causes of poverty in its poorest communities. These include social exclusion, a lack of access to basic resources and services, poor governance and gender inequality. Today our work focuses on women’s economic empowerment, particularly through CARE’s Village Savings and Loan Associations (VSLA) and partnering with credit associations to gain access to banking services through mobile banking. CARE also works to improve community resilience to in the face of environmental risks and risk reduction, increases equitable and sustainable access to water, sanitation, and hygiene (WASH) services to maximize their impact on human health and nutrition and provides emergency assistance to vulnerable populations affected by drought in southern Madagascar.',
      '1992',
      '25',
      '85'
    ],
    Malawi: [
      [ 'IMG_2610.JPEG' ],
      'Chambo',
      'https://www.thefooddictator.com/malawi-fried-and-curried-tilapia-chambo/',
      'Chambo is a species of the tilapia famil,y and is found in the lakeshore areas such as Mangochi, Salima, Nkhotakota, Nkhatabay, Rumphi and Likoma Island. Chambo is sometimes dried in the sun, or it can be roasted, cooked or fried and served with a side of soup. Chambo is served with fruit chutney.',
      'One of Africa’s most densely populated countries, Malawi is also one of the poorest and has a very young population. Inequality is rife and HIV infection rates are high. CARE works to ensure people can earn a decent living and access food, medicines and information about health risks such as HIV. We run programs on agriculture, health, education, and social and economic empowerment, especially for women. We ensure that women and girls have access to life-saving sexual and reproductive health services. We play an active role in supporting Malawi’s emerging civil society – its charities and community organizations. We work to empower women smallholder farmers through more productive and equitable engagement in sustainable agriculture, support girls’ education and promote water, sanitation and hygiene projects.In 2002, CARE Malawi pioneered an innovative way to involve poor and marginalized community groups in monitoring the quality and availability of services such as health care. The Community Score Cards approach, developed as part of a health services project, was an innovative way to engage local people in ‘scoring’ the services they receive, assessing the obstacles to accessing those services, and developing a shared strategy for improvement.When Cyclone Idai slammed into Malawi in March 2019, CARE swung into action to provide emergency services to those effected. This recovery work continues today.',
      '1998',
      '25',
      '130'
    ],
    Malaysia: [
      [ 'IMG_0236.jpeg', 'IMG_0237.jpeg', 'IMG_0238.jpeg' ],
      'Nasi Lemak',
      'https://www.allrecipes.com/recipe/78938/malaysian-nasi-lemak/',
      'Nasi lemak is a Malay cuisine dish originating from Malaysia that consists of fragrant rice cooked in coconut milk and pandan leaf. It is commonly found in Malaysia, where it is considered the national dish. It is also the native dish in neighbouring areas with significant Malay populations such as Singapore, Brunei, and Southern Thailand.',
      ' ',
      ' ',
      '30',
      '30'
    ],
    Maldives: [
      [ 'IMG_2270.JPEG', 'IMG_2271.JPEG' ],
      'Garudhiya',
      'https://nadiyas-tastesofmaldives.blogspot.com/2011/10/garudiya-fish-soup.html',
      "Garudiya or Garudhiyais a clear fish broth. It is one of the basic and traditional food items of Maldivian cuisine. The broth is based on tuna species found in the nation's ocean waters such as skipjack, yellowfin tuna, little tunny, or frigate tuna. In order to cook garudiya, tuna fish are cut up following a traditional pattern. After having had the gills and some of the innards thrown away, the fish pieces, the heads and the bones are carefully washed. The fish is then boiled in water with salt, until it is well cooked. Garudiya is usually eaten with steamed rice, but it can also be eaten with roshi, the Maldivian chapati. When eaten with steamed taro, or with steamed breadfruit, grated coconut is added.",
      ' ',
      ' ',
      '5',
      '25'
    ],
    Mali: [
      [ 'IMG_0882.JPEG', 'IMG_0883.JPEG' ],
      'Tiguadege Na',
      'https://diningforwomen.org/recipes/tiguadege-na-meat-in-peanut-sauce/',
      "Peanut stew or groundnut stew, also called as maafe, sauce d'arachide (French), tigadèguèna or domoda, is a stew that is a staple food in Western Africa. It originates from the Mandinka and Bambara people of Mali. Variants of the dish appear in the cuisine of nations throughout West Africa and Central Africa. It is very similar to groundnut soup. It may have a thicker consistency. Made from lamb, beef, chicken, or without meat, maafe is cooked with a sauce based on groundnuts, especially peanut butter/paste, and tomatoes. Peanut paste is sometimes used as an ingredient. In Ghana, groundnut stew is often accompanied with fufu.",
      'CARE began working in Mali in 1975 to help the government respond to an emergency. Our focus widened to programs where local communities take the initiative in their own development. In all our work, we defend the rights of the most vulnerable and marginalized people to obtain basic services, particularly women. We help women and children improve their lives through access to credit, opportunities to earn a living and access to quality education. We work with farmers and fishers to enable them to better use natural resources. We work to eliminate female genital mutilation, child labor and trafficking. We continue to respond to emergency situations when these arise and helped the government and other agencies halt the spread of Ebola in the country. CARE has been helping drought, disaster and conflict-affected communities in Mali with food security and nutrition since the Sahel food crisis began in June 2012. Today, millions of people are still in need of humanitarian assistance. We work to improve sustainable food, nutrition and income security, and to ensure that fishers, breeders and farmers are more resilient to climate crises and environmental degradation, allowing for inclusive and sustainable economic growth and preservation of ecosystems. ',
      '1975',
      ' ',
      ' '
    ],
    Malta: [
      [ '0C336981-F392-44FB-AF6C-20E244A2D3D9.jpg' ],
      'Pastizzi',
      'http://tessavalletta.com/2016/04/maltese-pastizzi-recipe/',
      'A pastizz is a traditional savoury pastry from Malta. Pastizzi usually have a filling either of ricotta or curried peas. Pastizzi are a popular and well-known traditional Maltese food. Pastizzi are usually diamond-shaped or round-shaped and made with a pastry very much like the Greek filo pastry (although there is also a puff pastry version). The pastry is folded in different ways according to the filling, as a means of identification. Traditionally, cheese cakes (stuffed with ricotta) are folded down the middle, whereas pea cakes are folded down the side. They are typically baked on metal trays in electric or gas ovens in a pastizzerija, usually a small or family concern. They are also sold in bars, cafes and by street vendors. They are a popular breakfast in outer villages.',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    'Marshall Islands': [
      [ '36FAC487-2882-481E-A8FF-1F712387450D.jpg', 'IMG_1116.JPEG' ],
      'Macadamia Nut Pie',
      'https://goodfoodonbadplates.wordpress.com/2016/03/19/too-good-at-least-marshallese-macadamia-nut-pie/',
      'Macadamia nut pie is a traditional recipe from the Marshall Islands and a delicious twist on pecan pie, typically served with coconut whipped cream.',
      ' ',
      ' ',
      '25',
      '50'
    ],
    Mauritius: [
      [ 'IMG_2250.JPEG', 'IMG_2251.JPEG' ],
      'Octopus Curry',
      'https://www.thefoodiesvine.com/blog/mauritian-octopus-curry-cari-ourite',
      'In Mauritius and Rodrigues, octopus, known by its Mauritian Creole name "Ourite" is commonly eaten especially in coastal regions as it is found abundantly in Mauritian waters. Popular octopus dishes include the masala octopus curry or boiled octopus in spicy tomato sauce, known as the "Daube".',
      ' ',
      ' ',
      '30',
      '75'
    ],
    Mexico: [
      [ 'IMG_1840.JPEG', 'IMG_1844.JPEG', 'IMG_1846.JPEG' ],
      'Tacos',
      'https://www.mexicoinmykitchen.com/tacos-al-pastor/',
      'Al pastor (from Spanish, "shepherd style"), also known as tacos al pastor, is a taco made with spit-grilled pork. Cooking method is based on the lamb shawarma brought by Lebanese immigrants to Mexico, al pastor features a flavor palate that uses traditional Mexican marinade adobada. It is a popular street food that has spread to the United States. In some places of northern Mexico and coastal Mexico, such as in Baja California, Mexico, it is known as taco de trompo or taco de adobada. A similar dish from Puebla that uses a combination of middle eastern spices and indigenous central Mexican ingredients is called tacos árabes.',
      'CARE works through partners in Mexico to further the rights of domestic workers and is working on an app to further this goal of improving the economic, social and labor conditions of paid domestic workers in Latin America.',
      '1952',
      '10',
      '30'
    ],
    Micronesia: [
      [ 'IMG_2644.JPEG', 'IMG_2645.JPEG' ],
      'Micronesian Chicken Coconut Curry',
      'https://www.tfrecipes.com/micronesian-coconut-chicken-curry/',
      'This flavor-packed dish features fried chicken and vegetables in a creamy coconut curry. It is typically made with fried pieces of chicken, potatoes, carrots, bell peppers, onions, ginger, and garlic, which are cooked in coconut milk flavored with curry powder. Onions, ginger, and garlic are usually sautéed before being mixed with the other ingredients to enhance the flavor of the dish. For additional heat, this curry can be spiced up with chili powder. The dish is usually accompanied by steamed white rice.',
      ' ',
      ' ',
      '10',
      '45'
    ],
    Moldova: [
      [ 'IMG_2466.JPEG', 'IMG_2470.JPEG', 'IMG_2471.JPEG' ],
      'Sarmale',
      'https://cristinanesteriuc.home.blog/2019/04/27/moldavian-sarmale-my-family-recipe/',
      'Sarma, commonly marketed as stuffed grape leaves or stuffed cabbage leaves, is a stuffed dish in Southeastern European and Middle Eastern cuisine that comprises fermented leaves—such as cabbage, patencia dock, collard, grapevine, kale or chard leaves—rolled around a filling of grains (such as rice), minced meat, or both. Sarma is part of the broader category of stuffed dishes known as dolma.',
      ' ',
      ' ',
      '40',
      '220'
    ],
    Monaco: [
      [ 'IMG_2356.JPEG', 'IMG_2357.JPEG' ],
      'Barbaguain',
      'https://europeankitchen.org/2020/08/14/barbagiuan/',
      'Barbajuan (also spelled barbagiuan) is an appetizer mainly found in the eastern part of French Riviera, Northern Italy and Monaco. A kind of fritter stuffed with Swiss chard and ricotta, among other ingredients, it originates from Monaco, where it is especially eaten on the national day, 19 November.',
      ' ',
      ' ',
      '60',
      '20'
    ],
    Montenegro: [
      [ 'IMG_0650.JPEG', 'IMG_0654.JPEG' ],
      'Kachamak',
      'https://www.soofoodies.com/recipe/kachamak-polenta/',
      'Kačamak is a kind of maize porridge made in parts of Western Asia and Southeastern Europe. Its name is derived from the Turkish word kaçamak, meaning escapade. It is also known as bakrdan in North Macedonia.  The dish is made of cornmeal. Potatoes, milk, white cheese or kaymak are sometimes added.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region.  To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission.  We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.  ',
      '1953',
      '5',
      '55'
    ],
    Morocco: [
      [ 'IMG_2435.JPEG', 'IMG_2436.JPEG' ],
      'Tagine',
      'https://www.onceuponachef.com/recipes/moroccan-chicken-tagine.html',
      'A tajine or tagine is a North African dish, named after the earthenware pot in which it is cooked. Algerian and Moroccan tajine dishes are slow-cooked savory stews, typically made with sliced meat, poultry or fish together with vegetables or fruit. Spices, nuts, and dried fruits are also used. Common spices include ginger, cumin, turmeric, cinnamon, and saffron. Paprika and chili are used in vegetable tajines. The sweet and sour combination is common in tajine dishes like lamb with prunes and spices. Tajines are generally served with bread. Because the domed or cone-shaped lid of the tajine pot traps steam and returns the condensed liquid to the pot, a minimal amount of water is needed to cook meats and vegetables. ',
      'CARE Morocco’s programs focus on youth and disadvantaged groups in rural and peri-urban areas. With people increasingly migrating to cities, rural Morocco is extremely poor and often lacks basic public services. We work with local partners and try to involve everyone – government, civil society, the private sector and communities – in our work. CARE builds the capacity of local partners and contribute to the political development of the country through this initiative, which is implemented through partnerships between the state and local and international organizations. CARE began working in Morocco in 2007, as part of the government’s initiative for human development. This initiative aimed to help national and local governments work with NGOs, local organizations and communities to improve access to basic services, increase people’s opportunities to earn a living and support vulnerable groups. ',
      '1953',
      '15',
      '45'
    ],
    Mozambique: [
      [ 'IMG_1288.JPEG', 'IMG_1290.JPEG', 'IMG_1291.JPEG' ],
      'Frango',
      'https://www.africanbites.com/mozambique-peri-peri-grill-chicken/',
      'Frango (piri-piri), native to Angola and Mozambique, also a former Portuguese colony; a grilled chicken in a very hot marinade of piri piri hot pepper and sometime also minced chili peppers, salt, and lemon or lime juice.',
      'CARE began operations in Mozambique in 1986 with emergency assistance and food distribution for people who were affected by the protracted war between government and rebel forces.From 1990 to 1994, CARE expanded its project portfolio to include disaster recovery and development activities. Following the end of the war in 1992, we shifted our focus to implementing long-term development projects in the following sectors: local water management, sanitation and hygiene, natural resource management and food security, health and HIV/AIDS, microfinance, and governance.In our six-year country strategy (2014-2020) for Mozambique, CARE seeks to fight poverty and improve food and nutrition security by empowering women and girls to exercise their rights. This new strategy draws from CARE’s previous innovations and builds on them – emphasizing in particular CARE’s expanded role as a facilitator and development partner with Mozambican colleagues from civil society who are likewise dedicated to transformative, rights-based development in collaboration with the private sector and government.In March and April 2019, Southern Africa was hit by two subsequent cyclones that left a trail of destruction in their path, and close to 2.2 million people in need of urgent assistance in Mozambique alone. CARE immediately mounted a response that continues today, reaching hundreds of thousands of Mozambicans with household and shelter kits, hygiene kits, water and sanitation programming, food assistance, and programming to prevent gender-based violence and protection.',
      '1984',
      '135',
      '25'
    ],
    Myanmar: [
      [ 'IMG_2215.JPEG' ],
      'Mohinga',
      'https://hsaba.com/recipes/mohinga-recipe',
      'Mohinga is a rice noodle and fish soup from Myanmar and an essential part of Burmese cuisine, considered by many to be the national dish of Myanmar. Mohinga is readily available in most parts of the country, sold by street hawkers and roadside stalls in larger cities. Mohinga is traditionally eaten for breakfast, but today is eaten at any time of day.',
      'In Myanmar, CARE works to improve living standards in rural communities by improving access to healthcare, food, livelihoods, water, sanitation and hygiene. All our programs address gender inequality. We have a particular focus on health education, HIV prevention and nutritional support for children and pregnant women. We also tackle values and beliefs that prevent women from seeking health advice. We support farmers to grow crops and rear livestock, and help people access basic financial services. We provide emergency relief when this is needed, and are committed to providing continued post-emergency support. ',
      '1950',
      '25',
      '90'
    ],
    Namibia: [
      [
        'FA3BCFDE-AFA8-49BE-8CB1-634A2E812E19.jpg',
        'IMG_1263.JPEG',
        'IMG_1264.JPEG'
      ],
      'Braai',
      'https://braai.com/namibian-chimichurri-steak/',
      'In South Africa, a braai is a barbecue or grill and is a social custom in much of Southern Africa. The term originated with the Afrikaners, but has since been adopted by South Africans of many ethnic backgrounds. Braai is regarded by some as another word for barbecue, and the traditions around a braai can be considerably different from a barbecue, even if the method of food preparation is very similar. Due to the traditional activities that occur around a braai, many South Africans would argue that having a braai is much better than having a barbecue. While wood was formerly the most widely used braai fuel, in modern times the use of charcoal, briquettes and gas (gas braai) has increased due to their convenience, as with barbecues elsewhere in the world.',
      ' ',
      ' ',
      '5',
      '10'
    ],
    Nauru: [
      [ 'IMG_0304.jpeg', 'IMG_0306.jpeg', 'IMG_0307.jpeg' ],
      'Coconut Fried Fish',
      'https://www.internationalcuisine.com/nauru-coconut-crusted-fish/',
      'Coconut fish is the national dish of Nauru, the third smallest country in the world. Coconut crusted fish is a widely popular dish, typically consisting of white fish fillets marinated in lime juice, salt, and pepper. In order to prepare it, the fillets are rolled in flour, eggs, and grated coconut before being fried until the coconut becomes crusted.',
      ' ',
      ' ',
      '20',
      '10'
    ],
    Nepal: [
      [ 'IMG_0637.JPEG' ],
      'Dhal Bhat',
      'https://www.archanaskitchen.com/nepalese-style-dhal-bhat-recipe',
      'Dal bhat is a traditional meal from the Indian subcontinent, popular in many areas of India, Pakistan, Bangladesh and Nepal. It consists of steamed rice and a cooked lentil or other pulses stew called dal. It is a staple food in these countries. Bhat or Chawal means "boiled rice" in a number of Indo-Aryan languages. At higher elevations in Nepal, above 6,500 feet (2,000 m), where rice does not grow well, other grain such as maize, buckwheat, barley or millet may be substituted in a cooked preparation called dhindo or atho in Nepal. Bhat may be supplemented with roti in Nepal (rounds of unleavened bread). Dal may be cooked with onion, garlic, ginger, chili, tomatoes, or tamarind, in addition to lentils or beans. It always contains herbs and spices such as coriander, garam masala, cumin, and turmeric. Recipes vary by season, locality, ethnic group and family.',
      'CARE Nepal works in partnerships with state agencies, donors, NGOs, civil society organizations, research institutes, private sectors, and also closely collaborate with community members.  We work across the spectrum of humanitarian action and long-term development programs to address gender-based violence, women and girls’ leadership and voice, inclusive governance, sexual reproductive health, livelihoods, food and nutrition security, disaster risk reduction, and climate change. CARE draws on its global experience to address the underlying causes of poverty and social injustice, with a distinct focus on the most marginalized and vulnerable women and adolescent girls. Beginning in 1978 CARE was one of the first international aid agencies to work in Nepal. ',
      '1978',
      '10',
      '30'
    ],
    Netherlands: [
      [ 'IMG_0262.JPEG', 'IMG_0263.JPEG', 'IMG_0264.JPEG' ],
      'Stamppot',
      'https://www.all-thats-jas.com/dutch-stamppot-vegetable-mash/',
      'Stamppot is a traditional Dutch dish made from a combination of potatoes mashed with one or several vegetables.',
      'CARE Netherlands was established in 2001, when the former DRA (Disaster Relief Agency) joined CARE International. The main reasons were the need for international cooperation and expansion. Under its new name the organization continued to focus on disaster prevention and reconstruction, but could now make use of the existing worldwide network of the federation. ',
      '2001',
      '20',
      '20'
    ],
    'New Zealand': [
      [
        '09A2259C-D1B8-424B-99D9-E606CF6FA3A6.jpg',
        '2F6C9975-835A-4C06-A4CD-C811A10E6328.jpg'
      ],
      'Bacon and Egg Pie',
      'https://eggs.org.nz/recipes/classic-bacon-egg-pie/',
      'The bacon and egg pie is a savoury pie consisting of a crust containing bacon, egg and sometimes onion, mushrooms, bell peppers, peas, tomato, fresh herbs and cheese. Bacon and egg pie may be served with ketchup, which can be combined with Worcestershire sauce and drizzled over the filling before the pie is baked and some versions have a rising agent such as baking powder mixed into the egg to make a fluffier filling.',
      ' ',
      ' ',
      '10',
      '40'
    ],
    Nicaragua: [/////
      [],
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    Niger: [
      [ 'IMG_0496.JPEG', 'IMG_0504.JPEG' ],
      'Djerma Stew',
      'https://whonomstheworld.com/blog/traditional-niger-style-djerma/',
      'Djerma is a traditional stew originating from Niger. It is made with a combination of chicken, onions, garlic, tomatoes, thyme, curry powder, peanut butter, and bouillon cubes. In order to prepare it, chicken, onions, and garlic should first be sautéed in oil, then combined with tomatoes, thyme, curry powder, and bouillon cubes, with a small amount of water. Once done, the dish is traditionally served for lunch, accompanied by rice.',
      'CARE established its presence in Niger in response to famine, and has worked on several food security projects since then. The program currently focuses on health and nutrition, natural resources management, education, local governance, conflict resolution, women’s empowerment, microfinance, disaster risk reduction, and emergency preparedness and response.Further food security crises over the years prompted us to develop a food crisis early warning system. This brings together information gathered by the community, government and private monitoring agencies to help prevent future emergencies. We also work with communities on disaster risk reduction and creating sustainable livelihoods. We help reduce child malnutrition and food insecurity through integrated farming initiatives that include improving water management, distributing seeds and livestock and reforestation.Niger is the birthplace of CARE’s successful and often-replicated Village Savings and Loan Associations program, which economically empowers women and raises their social and political status. The project is known as Mata Masu Dubara (MMD), or “ingenious women” or “women on the move.”CARE has worked in Niger since 1974.',
      '1973',
      ' ',
      ' '
    ],
    Nigeria: [
      [ 'IMG_1354.JPEG', 'IMG_1355.JPEG', 'IMG_1356.JPEG' ],
      'Egusi & Fufu',
      'https://www.allnigerianrecipes.com/soups/egusi-soup/',
      'Egusi soup is a kind of soup thickened with the ground seeds and popular in West Africa, with considerable local variation. Besides the seeds, water, and oil, egusi soup typically contains leaf vegetables, palm oil, other vegetables, seasonings, and meat. Leaf vegetables typically used for egusi soup include bitterleaf, pumpkin leaf, celosia and spinach. Typical other vegetables include tomatoes and okra. Typical seasonings include chili peppers, onions, and locust beans. Also commonly used are beef, goat, fish, shrimp, or crayfish. In Nigeria, egusi is common among the people of the southwestern Yoruba people, Efik, Ibibio and Annang people of south-south Nigeria, and the southeastern part of Nigeria by the Igbo people of southern Nigeria.',
      'CARE began work in Nigeria in 2017 in response to the humanitarian crisis arising from the northeast conflict between Boko Haram, other non-state armed groups and the military. This conflict is characterized by armed violence, suicide attacks, abductions and sexual violence. Tens of thousands of people have been killed, over 4000 women and girls have been abducted, and over 2.5 million people have been forced to leave their homes.Now in its tenth year, the situation in the northeast remains extremely critical with the number of people in need of urgent assistance rising from 7.9 million at the beginning of 2020 to 10.6 million since the onset of COVID-19.CARE is currently active in the 2 worst hit states in the northeast (Borno and Yobe) and in some of the most hard to reach areas. CARE also works in Bauchi and Jigawa States in the northwest with a strong focus on women’s economic empowerment through its flagship Village Savings and Loan Model.CARE’s key programs are in Food Nutrition, Security & Livelihoods, Sexual and Reproductive Health Rights, Gender-based Violence Prevention and Response and Women’s Economic Empowerment.',
      '2017',
      '10',
      '90'
    ],
    'North Korea': [
      [ 'IMG_2874.JPEG', 'IMG_2875.JPEG' ],
      'Naengmyeon',
      'https://www.koreanbapsang.com/naengmyeon-cold-noodles/',
      'Naengmyeon or raengmyŏn is a noodle dish of North Korean origin which consists of long and thin handmade noodles made from the flour and starch of various ingredients, including buckwheat, potatoes, sweet potatoes, arrowroot starch (darker color and chewier than buckwheat noodles), and kudzu. Buckwheat predominates (despite the name, it is not a wheat but rather is more closely related to sorrel). Other varieties of naengmyeon are made from ingredients such as seaweed and green tea.',
      ' ',
      ' ',
      '25',
      '65'
    ],
    'North Macedonia': [
      [ 'IMG_0918.JPEG' ],
      'Tavce Gravce',
      'https://balkanlunchbox.com/pan-baked-beans-balkan-macedonian-baked-beans-tavce-gravce/',
      'Tavče gravče is a traditional Macedonian dish. It is prepared with fresh beans and can be found in many restaurants in North Macedonia. It is also commonly eaten by the Macedonian diaspora. This meal is baked and served in a traditional unglazed earthenware pot. The name of the dish may be translated as "Beans on a tava". Tavče gravče is considered the national dish of North Macedonia.',
      ' ',
      ' ',
      '5',
      '95'
    ],
    Norway: [
      [ 'IMG_1205.JPEG', 'IMG_1210.JPEG' ],
      'Farikal',
      'https://northwildkitchen.com/farikal-norwegian-lamb-cabbage-stew/',
      "Fårikål is a traditional Norwegian dish, considered by many to be the country's national dish. Consisting of pieces of mutton with bone, cabbage, whole black pepper and occasionally a little wheat flour, cooked for several hours in a casserole, traditionally served with potatoes boiled in their skins. The dish is typically prepared in early autumn. Fårikål Feast Day is celebrated on the last Thursday in September each year.",
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.Founded in America in 1945 after World War II, CARE first sent food aid and basic supplies in the form of CARE Packages to war-torn Europe – where millions were in danger of starvation and these goods were either heavily rationed or impossible to find. Some 100 million CARE packages reached people in need during the next two decades, first in Europe and later in Asia and other parts of the developing world.In 1946, the then-Prime Minister of Norway, Einar Gerhardsen, signed an agreement to receive CARE Packages. By 1950 when the last one arrived, more than 300,000 CARE Packages of food, clothing, books and toys were distributed to Norwegian families in need.In the 1950s, CARE expanded its work providing food aid [link to: food aid page] to starving people. In the 1960s, CARE pioneered our own health program. And by the 1970s, the role of the relief and development actor was seriously established.',
      '1980',
      '10',
      '120'
    ],
    Oman: [
      [ 'IMG_1481.JPEG', 'IMG_1482.JPEG', 'IMG_1483.JPEG' ],
      'Shuwa',
      'https://www.thasneen.com/cooking/shuwa-slow-cooked-lamb-served-over-aromatic-basmati-rice-omani-delicacy/',
      "Quzi also spelled as qoozi or ghoozi, is a rice-based dish popular and is considered as one of Iraq's national dishes. It is served with very slowly cooked lamb, roasted nuts, and raisins served over rice. The dish was introduced into Turkey by Syrian immigrants. The dish can also be found in some Arab states of the Persian Gulf. In Oman and UAE it is called shuwaa and is traditionally eaten on festive occasions, prepared by wrapping the marinated meat in date palm leaves and placing the wrapped meat in a submerged oven.",
      ' ',
      ' ',
      '10',
      '180'
    ],
    Pakistan: [
      [ 'IMG_1124.JPEG', 'IMG_1125.JPEG' ],
      'Seekh Kebab',
      'http://rookiewithacookie.com/pakistani-seekh-kebab-yogurt-raita/',
      'The seekh kebab is a type of kebab, popular in South Asia, originating in India and Pakistan. It is made with spiced, minced or ground meat, usually lamb, beef, or chicken, formed into cylinders on skewers and grilled. It is typically cooked on a mangal or barbecue, or in a tandoor.',
      'CARE began working in Pakistan in 2005 following a 25-year absence. We work in some of the country’s most remote and logistically challenging areas to address the underlying causes of poverty. We work to overcome discrimination against girls and women in healthcare and education. We lobby for policy change around sexual and reproductive health and work to remove barriers to education and employment. We help communities access water and sanitation and improve their livelihood options. We also help communities prepare for disasters and provide emergency relief when it is needed.Over the last several years, Pakistan has experienced an increase in the frequency and severity effects of El Nino and a decrease in rainfall during the monsoon season. This has resulted in acute shortages of water, food and fodder. CARE and its partners have worked in the areas of health for vulnerable populations, sanitation, hygiene and clean water to mitigate this crisis.',
      '1949',
      '10',
      '20'
    ],
    Palau: [
      [ 'IMG_2301.JPEG', 'IMG_2302.JPEG' ],
      'Chicken Tinola',
      'https://www.pinoycookingrecipes.com/tinolang-manok-chicken-tinola.html',
      'Chicken Tinola is a Filipino chicken soup dish cooked in a ginger broth. It is a popular cold weather dish, enjoyed with fish sauce as dipping sauce, and a cup of warm white rice. Tinola is traditionally cooked with wedges of unripe papaya and malunggay leaves',
      ' ',
      ' ',
      '10',
      '40'
    ],
    Palestine: [
      [ 'IMG_2225.JPEG', 'IMG_2226.JPEG', 'IMG_2227.JPEG' ],
      'Maqluba',
      'https://tasteofpalestine.org/recipes/maqluba-chicken-rice-pot',
      'Maqluba or Maqlooba is a traditional Iraqi, Lebanese, Palestinian, Jordanian, and Syrian dish served throughout the Levant. It consists of meat, rice, and fried vegetables placed in a pot which is flipped upside down when served, hence the name maqluba. Maqluba can include a variety of vegetables, such as fried tomatoes, potatoes, cauliflower, and eggplant, accompanied by either chicken or lamb. The most common are cauliflower and eggplant. All the ingredients are carefully placed in the pot in layers, so that when the pot is inverted for serving, the dish looks like a layer cake. Maqluba is typically garnished with pine nuts and chopped fresh parsley. It sometimes served with salad and fresh yogurt, and is often prepared for feasts and large gatherings.',
      'We work closely with local government and community-based organizations to strengthen democracy and civil society. We particularly focus on meeting the needs of poor, vulnerable, marginalized and isolated people. We work with local organizations to increase the participation of women and marginalized groups in decision-making at all levels. CARE works to improve the economic well-being and resilience of low-income and marginalized communities by providing loan capital and training through partner microfinance institutions, and to increase income, agency, and market opportunity for Palestinian farmers through growth in pro-poor agribusiness and market development.',
      '1994',
      '20',
      '100'
    ],
    Panama: [
      [ 'IMG_0615.JPEG', 'IMG_0617.JPEG' ],
      'Sancocho',
      'https://www.centralamerica.com/experiencing/eating/panamanian-sancocho-recipe/',
      'Sancocho (from the Spanish verb sancochar, "to parboil") is a traditional broth (often considered a soup) in several Latin American cuisines. Variations represent popular national dishes in Puerto Rico, Honduras, Ecuador, Colombia, Cuba, Panama, Dominican Republic, Trinidad and Tobago, and Venezuela. It usually consists of large pieces of meat, tubers and vegetables served in a broth. The basic ingredients are chicken, ñame (adding flavor and acting as a thickener, giving it its characteristic texture and brightness), and culantro (giving it most of its characteristic flavor and greenish tone); often yuca, mazorca (corn on the cob) and otoe are added. Other optional ingredients include ñampí (as the Eddoe variety of Taro is known), chopped onions, garlic and oregano. It is frequently served with white rice on the side, meant to be either mixed in or eaten with each spoonful. Hot sauce is frequently added, depending on regional and individual preferences.',
      'In 2019, CARE worked in El Salvador in the areas of Food & Nutrition Security and Resilience to Climate Change. CARE has also embarked on a strategic partnership with Amway based on the shared goals of helping people live better lives and finding sustainable solutions to hunger and malnutrition. ',
      '1953',
      '10',
      '45'
    ],
    'Papua New Guinea': [
      [ 'IMG_1528.JPEG', 'IMG_1530.JPEG' ],
      'Mumu',
      'https://www.coffeeandvanilla.com/papuan-new-guinean-mumu/',
      'Mumu is regarded as the national dish of Papua New Guinea. It is composed of pork, sweet potato, rice, and vegetables. Mumu is an example of a balanced dish composed of the two bases, crops (including starch) and meat. The dish is named after the earth oven used traditionally. Mumu is a traditional method of cooking large quantities of food throughout Papua New Guinea, as well as other islands in the Pacific. It consists of an earth oven that is filled with hot coal or stones, that may be placed in different orientations, and subsequently cooked for a lengthy period of time.',
      'Papua New Guinea is richly endowed with natural resources, but is hampered by its rugged terrain and the high cost of developing infrastructure. More than 80% of the population live in rural areas, with limited access to health centers, education and agricultural services.Women living in rural Papua New Guinea suffer from poverty even more. They work long hours but are rarely involved in decision-making and have little control over the money they earn or the land they farm. Almost two-thirds of these women are also victims of violence.CARE works with communities to manage natural resources and increase crop diversity. We help communities access non-formal education and small grants, and find innovative ways to earn a living. We provide training and support in governance, gender awareness, health and nutrition, and HIV prevention and care. All our programs address gender-based violence and aim to increase women’s opportunities to participate and thrive.',
      '1989',
      '20',
      '180'
    ],
    Paraguay: [
      [ 'IMG_0836.JPEG', 'IMG_0837.JPEG', 'IMG_0839.JPEG' ],
      'Sopa Paraguaya',
      'https://www.all-thats-jas.com/paraguayan-cornbread/',
      'Sopa paraguaya or Paraguayan soup is a traditional food of Paraguay, North-East of Argentina and the area of Brazil near to the Paraguayan border. (As the zones near to the border of Paraná, Santa Catarina, some parts of Rio Grande do Sul and Mato Grosso do Sul). Literally meaning "Paraguayan soup" (sopa paraguaya), it is similar to corn bread. Corn flour, cheese and milk or whey are common ingredients. It is a spongy cake rich in caloric and protein content.',
      ' ',
      ' ',
      '10',
      '35'
    ],
    Peru: [
      [ 'IMG_0584.JPEG', 'IMG_0586.JPEG' ],
      'Ceviche',
      'https://www.laylita.com/recipes/peruvian-fish-cebiche-or-ceviche/',
      'Ceviche, also cebiche, seviche, or sebiche is a South American seafood dish originally from the modern day country of Peru, typically made from fresh raw fish cured in fresh citrus juices, most commonly lemon or lime. It is also spiced with ají, chili peppers or other seasonings and chopped onions, salt, and coriander are also added. The name originates from the Quechuan word siwichi, which means fresh or tender fish.',
      'CARE first worked in Peru between 1952 and 1958, in the field of education. We resumed our activities following a devastating earthquake in 1970, and have remained there since. As well as delivering ongoing programs, CARE Peru is now a full member of CARE International confederation.Peru is a middle-income country with high levels of inequality. Many people live in extreme poverty with scarce access to health services and education. Our  programs empower vulnerable groups, including women, indigenous groups and rural populations, to exercise their rights.CARE has been responding to the Venezuela migrant and refugee crisis with a gender sensitive approach. Peru has been a final destination for many of those fleeing Venezuela. There are approximately 860,000 registered Venezuelans in Peru, but this number rises to more than 1 million including irregulars (those without documentation or permission to remain including those not able to apply for asylum because of bureaucratic obstacles, long waiting periods, or high application fees) and other informal arrivals.CARE is assisting Venezuelans in Peru with unconditioned cash transfers to address the key humanitarian needs of food, accommodation and transport. Providing water, sanitation and hygiene kits and temporary shelter materials as well as refurbishing existent shelters and health clinics. CARE is also providing hot meals and strengthening legal clinics with social support services as well as providing psychosocial support with a focus of gender-based violence survivors and victims of trafficking. CARE also provides livelihoods support through finance and technical assistance for small ventures, especially those led by women.',
      '1952',
      '20',
      '10'
    ],
    Philippines: [
      [ 'IMG_0823.JPEG', 'IMG_0824.JPEG' ],
      'Adobo',
      'https://panlasangpinoy.com/filipino-chicken-adobo-recipe/',
      'In Filipino cuisine, adobo refers to a common cooking process indigenous to the Philippines. When the Spanish first explored the Philippines in the late 16th century, they encountered a cooking process that involved stewing with vinegar. The Spanish referred to it as adobo due to its superficial similarity to the Spanish adobo. The Filipino adobo is an entirely separate method of preparing food and is distinct from the Spanish marinade. Unlike the Spanish and Latin American adobo, the main ingredients of Philippine adobo are ingredients native to Southeast Asia, namely vinegar, soy sauce or patis (fish sauce), black peppercorns, and bay leaves. It does not traditionally use chilis, paprika, oregano, or tomatoes. There are other noted versions of Philippine adobo, namely Adobong Puti (White Adobo, prepared with salt instead of soy sauce) and Adobong Tuyo (Dry Adobo). The dish is normally cooked with pork or chicken and sometimes with only vegetables like kangkong (water spinach) or sitaw (green beans).',
      'The Philippines is one of the most hazard-prone countries in Asia and the Pacific. Annually, some 20 tropical cyclones cross the country. According to the World Bank, more than 1,000 lives are lost every year on average, with typhoons accounting for 74% of the fatalities, 62% of the total damages and 70% of agricultural damages. The country is also highly exposed to climate change and geologic hazards including earthquakes and volcanic eruptions. The combined impacts of natural disasters in the Philippines hinder development and engender high rates of poverty.In the Philippines, CARE has focused largely on disaster response, emergency preparedness, livelihoods recovery and integrated risk management programs. CARE’s recent responses in the Philippines include typhoon Pablo (Bopha) in 2012, Yolanda (Haiyan) in 2013, Ruby (Hagupit) in 2014, Lando (Koppu) and Koppu (Melor) in 2015, Karen (Sarika), Lawin (Haima), Nina (Nock-ten) in 2016, the earthquake in Surigao City, Marawi armed conflict and Tembin (Vinta) in 2017, and Mangkhut (Ompong) in 2018.Programmatic work in the Philippines focuses on sexual and reproductive health & gender-based violence response, increased community resilience, innovations in disaster preparedness, and livelihoods recovery.',
      '1949',
      '5',
      '35'
    ],
    Poland: [
      [ 'IMG_2716.JPEG', 'IMG_2717.JPEG' ],
      'Bigos',
      'xxx',
      "Bigos, often translated into English as hunter's stew, is a Polish dish of chopped meat of various kinds stewed with sauerkraut and shredded fresh cabbage. It is served hot and can be enriched with vegetables, spices or wine. The principal ingredients of bigos are assorted kinds of meat chopped into bite-sized chunks and a mixture of sauerkraut (pickled cabbage) and shredded fresh white cabbage. The meats may include pork (ham, shoulder, bacon, ribs, loin, etc.), beef and veal, poultry (chicken, duck, goose, turkey) and game, as well as charcuterie, especially various kinds of kiełbasa, or Polish smoked sausage. The variety of meats is considered essential for good bigos; its preparation may be a good occasion to clean out one's freezer and use up leftovers from other meat dishes. Some of the meats may be roasted before being diced together with other cuts of meat and braised in lard or vegetable oil. Other ingredients often added to bigos include onions, diced and browned in lard together with the meat, and dried forest mushrooms that are precooked separately in boiling water. The stew is usually seasoned with salt, black peppercorns, allspice, juniper berries and bay leaves. Some recipes also call for caraway, cloves, garlic, marjoram, mustard seeds, nutmeg, paprika and thyme.",
      'CARE returned to Poland in March 2022 in response to the needs of millions fleeing conflict in neighboring Ukraine.Just one month into the crisis, more than 1.2 million people have arrived in Poland, seeking refuge or further travel into other parts of Europe and beyond.CARE is working with partners Polish Centre for International Aid (PCPM), Polish Humanitarian Aid (PAH), and is coordinating with local authorities with immediate cash assistance as well as longer term plans for cash for work support, as well as psychosocial support to those arriving and staying in temporary shelters. CARE partners are also looking at assisting Ukrainians who do not have refugee status and therefore do not qualify for government aid in the country.You May Also LikeHaiti Hit by 7.2 Magnitude Earthquake',
      '1947',
      '20',
      '450'
    ],
    Qatar: [
      [ 'IMG_2095.JPEG', 'IMG_2096.JPEG' ],
      'Madrouba',
      'https://alkaabiam.medium.com/recipe-of-a-traditional-food-madrouba-ec0a9fa11d7e',
      'Madrouba is a spicy and comforting Qatari porridge made with chicken, overcooked rice, and a plethora of flavorings such as turmeric, cumin, cardamom, ginger, cloves, cinnamon, garlic, and black pepper. It is recommended to serve madrouba while it is still piping hot, preferably garnished with fresh lime zest.',
      ' ',
      ' ',
      '30',
      '140'
    ],
    'Republic of the Congo': [
      [ 'IMG_0387.jpeg', 'IMG_0388.jpeg' ],
      'Chicken Moambe',
      'https://explorers.kitchen/recipes/mains/moambe-chicken/',
      'Poulet moambe is prepared by cooking chicken in moambe (palm butter) and spinach, then seasoned with spices like peri-peri or red pepper. It is typically served with sweet potatoes, brown onions, hard boiled eggs and a sauce made from crushed palm nuts. Moambe chicken can also be accompanied by rice or manioc (cassava) paste. The chicken can be substituted with duck or fish.',
      ' ',
      ' ',
      '15',
      '60'
    ],
    Romania: [
      [ 'IMG_1502.JPEG', 'IMG_1503.JPEG' ],
      'Mamaliga',
      'https://www.jocooks.com/recipes/traditional-romanian-polenta-mamaliga-cu-branza-in-paturi/',
      'Mămăligă is a porridge made out of yellow maize flour, traditional in Romania, Moldova and West Ukraine. Preparing the traditional dish is also continued by Poles from Lviv area. Traditionally, mămăligă is cooked by boiling water, salt and cornmeal in a special-shaped cast iron pot called ceaun or tuci. When cooked peasant-style and used as a bread substitute, mămăligă is supposed to be much thicker than the regular Italian polenta to the point that it can be cut in slices, like bread. When cooked for other purposes, mămăligă can be much softer, sometimes almost to the consistency of porridge. Because mămăligă sticks to metal surfaces, a piece of sewing thread is used to cut it into slices instead of a knife; it can then be eaten by holding it with the hand, just like bread.',
      'In recent years, CARE has worked with longstanding partner organizations in Romania responding to the needs of the most vulnerable populations, particularly children in need.In response to the conflict that has broken out in Ukraine, of those partners, SERA, is at the enter of CARE’s response to those fleeing the country. With SERA and the Federation of Child Protection NGOs (FONPC), an umbrella organization with over 80 members, CARE is helping to deliver relief items to the Isaccea border crossing including diapers, baby bottles, baby slings, warm clothes, and blankets.CARE has trained over 500 psychologists and volunteers on psychosocial support and emergency first aid. In the coming weeks and months, CARE and SERA will also begin sending trucks of relief items into southwestern Ukraine, including urgently needed toiletry and food items.',
      '1947',
      '15',
      '40'
    ],
    Russia: [
      [ 'IMG_0771.JPEG', 'IMG_0772.JPEG' ],
      'Borscht',
      'https://www.willcookforsmiles.com/russian-borscht-recipe/',
      `Borscht is a sour soup common in Eastern Europe and Northern Asia. In English, the word "borscht" is most often associated with the soup's variant of Ukrainian origin, made with red beetroots as one of the main ingredients, which give the dish its distinctive red color. The same name, however, is also used for a wide selection of sour-tasting soups without beetroots, such as sorrel-based green borscht, rye-based white borscht, and cabbage borscht.`,
      ' ',
      ' ',
      '15',
      '300'
    ],
    Rwanda: [
      [
        '7A1CFC19-F6C8-4E77-BE4A-895C5B7CE3D9.jpg',
        'A35AD0D0-C313-4591-9DD5-87E4DE182139.jpg'
      ],
      'Brochettes',
      'https://www.subsaharapost.com/post/brochette-rwandan-street-skewer',
      'In Rwanda, brochettes are the most popular food when eating out in the evening, usually made from goat but sometimes tripe, beef, or fish. In rural areas, many bars have a brochette seller responsible for tending and slaughtering the goats, skewering and barbecuing the meat, and serving it with grilled bananas.',
      'From 1984 to 1994, CARE Rwanda implemented a range of development projects, including maternal health care, forestry and water and sanitation activities.CARE closed our Kigali office from April to July 1994 during the country’s civil war, conducting cross-border relief from Uganda to 150,000 displaced people in eastern Rwanda, and from Burundi and Zaire (now DRC) to 120,000 displaced in southwest Rwanda.After the genocide, CARE’s attention turned to emergency relief, providing over a million people with shelter, food, water, seeds and tools. CARE built a significant reconstruction, rehabilitation and development program, including health and education, HIV prevention, water systems, agriculture and sustainable land use, and improving the incomes and status of vulnerable and marginalized groups, particularly women and children. In all our work, we encourage good governance and aim to strengthen civil society.In 2017, CARE launched a new Rwanda program strategy, identifying women and girls aged 10-59 years (in categories 1 and 2 of Rwanda’s Ubudehe poverty ranking) as the target group where CARE can have the most impact. Development programming is complemented by emergency programming addressing the needs of disaster-affected populations, particularly refugees.Such an approach builds on our strengths in Rwanda as:One of the few international NGOs leading in gender justice;Developer of transformational intervention models;Convener of a committed and capable civil society;Collaborator with alliances, social movements, government, private sector and civil society.CARE International currently works in 24 of Rwanda’s 30 districts.',
      '1984',
      '45',
      '20'
    ],
    'Saint Kitts and Nevis': [
      [ 'IMG_1982.JPEG', 'IMG_1984.JPEG' ],
      'Saltfish',
      'http://caribento.com/read/recipe/saint-kitts-and-nevis-national-dish/',
      'Dried and salted cod, sometimes referred to as salt cod or saltfish or salt dolly, is cod which has been preserved by drying after salting. Cod which has been dried without the addition of salt is stockfish. Salt cod was long a major export of the North Atlantic region, and has become an ingredient of many cuisines around the Atlantic and in the Mediterranean.',
      ' ',
      ' ',
      '30',
      '60'
    ],
    'Saint Lucia': [
      [ 'IMG_2323.JPEG', 'IMG_2331.JPEG' ],
      'Gren Fig and Saltfish',
      'https://www.islanderkeys.com/green-fig-and-saltfish-national-dish-of-st-lucia/',
      'St Lucia is known for its national dish consisting of green bananas and salt fish locally known as green figs and saltfish; breadfruit and salt fish is also an alternative favourite among the locals.',
      ' ',
      ' ',
      '25',
      '85'
    ],
    Samoa: [
      [ 'IMG_2548.JPEG' ],
      'Panipopo',
      'http://www.samoafood.com/2010/06/panipopo-sweet-coconut-buns.html',
      'Panipopo is the national dish of Samoa, a unique dessert consisting of buns baked in a sweet and sticky coconut cream sauce. The buns are typically served in shallow bowls spooned over with more sauce, accompanied by a hot beverage on the side, preferably Samoan cocoa.',
      ' ',
      ' ',
      '30',
      '30'
    ],
    'San Marino': [
      [ 'IMG_1586.JPEG', 'IMG_1587.JPEG' ],
      'Torta Tre Monti',
      'https://www.rosacooking.com/en/waffle-cakes-from-san-marino/',
      'Torta Tre Monti is a traditional Sammarinese cake made of layers of thin waffled wafers cemented together by chocolate or hazelnut crème. The final product is covered in chocolate fondant. It is similar to other layered desserts common to San Marino, this one being representative of the Three Towers of San Marino.',
      ' ',
      ' ',
      '0',
      '15'
    ],
    'Saudi Arabia': [
      [ 'IMG_0725.jpeg' ],
      'Kabsa',
      'https://amiraspantry.com/chicken-saudi-kabsa/',
      'Kabsa is an Arab mixed rice dish, served on a communal platter, that originates from Yemen but is commonly regarded as a national dish in all the countries of the Arabian Peninsula (Saudi Arabia, Kuwait, Bahrain, Qatar, the United Arab Emirates, Oman, and Yemen). It can also be found served in countries such as South of Iran, the Negev desert in Israel, and the Malabar Coast of India.',
      ' ',
      ' ',
      '15',
      '45'
    ],
    Serbia: [
      [ 'IMG_1144.JPEG', 'IMG_1145.JPEG', 'IMG_1146.JPEG' ],
      'Cevapcici',
      'https://belgradeatnight.com/how-to-make-cevapicevapcici-recipe/',
      'Ćevapi is a grilled dish of minced meat found traditionally in the countries of southeast Europe (the Balkans). It is considered a national dish of Bosnia and Herzegovina and Serbia, and is also common in Croatia, Montenegro, Kosovo, North Macedonia and Slovenia. Ćevapi has its origins in the Balkans from before the Ottoman period, and represents a regional speciality similar to the köfte kebab. They are usually served in groups of five to ten pieces on a plate or in a flatbread (lepina or somun), often with chopped onions, sour cream, kajmak (milk cream), ajvar (relish), and salt.',
      'CARE works in Bosnia and Herzegovina, Croatia, Serbia, Kosovo, Montenegro, Macedonia and Albania. Our ambition is to ensure that the social, economic, and political rights of vulnerable and marginalized groups are recognized and fulfilled, contributing to sustainable peace in the region.To that end, CARE offers conflict prevention and peace-building programs, supports people’s livelihoods and access to rights, and works toward gender equality and the prevention of gender-based violence. Marginalized communities, such as Roma and women and girls, are at the heart of our mission.We also provide emergency assistance: for refugees and migrants stranded in the Balkans, for communities suffering from natural disasters and whenever aid is needed.',
      '1993',
      '15',
      '30'
    ],
    Seychelles: [
      [ 'IMG_2722.JPEG', 'IMG_2723.JPEG' ],
      'Ladob',
      'https://www.msingiafrikamagazine.com/2020/09/ladob-recipe/',
      'Ladob is a dish eaten in the Seychelles which is eaten either as a savory dish or as a dessert. It was originally a dish eaten in large amounts by the early arrivals to the island due to the ingredients being in plentiful supply. It is now a staple part of the diet, many eating the dish several times a week. The dessert version usually consists of ripe plantain and sweet potatoes (but may also include cassava, breadfruit or even corossol) boiled with coconut milk, sugar, nutmeg and vanilla in the form of a pod until the fruit is soft and the sauce is creamy. The savory version usually includes salted fish, cooked in a similar fashion to the dessert version, with plantain, cassava and breadfruit, but with salt used in place of sugar (and omitting vanilla).',
      ' ',
      ' ',
      '20',
      '40'
    ],
    'Sierra Leone': [
      [ 'IMG_2657.JPEG' ],
      'Cassava Leaves',
      'https://afrifoodnetwork.com/recipes/soup-recipes/cassava-leaf-soup/',
      'Cassava leaves stew is widely consumed in West and central Africa. In Liberia, Sierra Leone and Guinea this stew is part of meals almost every day. In preparation, the tenderest cassava leaves are washed, then either pounded very finely or bruised with a pestle and mortar, and then finely shredded before cooking. The leaves are added to palaver sauce, which is made using red palm oil mixed with other ingredients, such as onions, pepper, fish, meat, and vegetables to create a stew.',
      'CARE began work in Sierra Leone in 1961, initially focusing on school food programs to improve children’s nutrition. Currently, CARE supports a youth-led network to end female genital mutilation, and is a partner with several organizations that combat gender-based violence.A big chunk of CARE’s work in the West African nation is focused on improving sexual and reproductive health for women by supporting the national health system through providing medical supplies and modern contraceptive methods, as well as providing training to health service providers, in order to promote quality services.CARE also works with communities to change harmful social norms that prevent women and girls from accessing their sexual and reproductive health rights. CARE places a special emphasis on strengthening women’s access to and awareness of their sexual and reproductive health rights and HIV and AIDS prevention within communities, increasing the availability of quality information and sexual and reproductive health services, taking into account the different gender needs and sensitivities, while in parallel working with stakeholders and communities to strengthen mechanisms that will improve sexual and reproductive health services and facilities to adolescent girls and vulnerable women. CARE’s sexual and reproductive health program is present in about 30 percent of the communities in Sierra Leone, prioritizing implementation in districts with a high HIV burden and high rates of teenage pregnancy.CARE also works to build upon the investments made under the Post-Ebola Recovery of Health Services (PERHS) program in order to sustain the facility, its systems, equipment and community in specific districts and works to enhance women’s economic empowerment through skills development.',
      '1961',
      '10',
      '30'
    ],
    Slovenia: [
      [ 'IMG_2989.jpeg' ],
      'Ajdovi Zganci',
      'https://jernejkitchen.com/recipes/slovenian-buckwheat-porridge',
      'Ajdovi žganci is the national dish of Slovenia, consisting of buckwheat flour and water. The word žganci is derived from žgati, meaning to burn. Originally, the dish was a basic meal for most people, a breakfast used to provide the daily nutrients and energy to farmers for their hard work during the day. Žganci was consumed as a substitute for bread, while the leftovers used to be toasted with lard the following day, so that no food went to waste. Today, the dish can be found throughout the country, but it is prepared differently in each region of Slovenia. It is commonly served with sauerkraut and grilled sausages on the side. Ajdovi žganci are considered the ultimate comfort food on cold winter days.',
      ' ',
      ' ',
      '5',
      '30'
    ],
    'Solomon Islands': [
      [ 'IMG_0813.JPEG', 'IMG_0814.JPEG' ],
      'Poi',
      'https://nationalfoods.org/recipe/national-dish-of-solomon-islands-poi/',
      'Poi or Popoi is a traditional staple food in the Polynesian diet, made from starchy vegetables, usually breadfruit, taro or plantain. Traditional poi is produced by mashing cooked starch on a wooden pounding board, with a carved pestle made from basalt, calcite, coral or wood. Modern methods use an industrial food processor to produce large quantities for retail distribution. Water is added to the starch during mashing, and again just before eating, to achieve the desired consistency, which can range from highly viscous to liquid. In Hawaii, this is classified as either "one-finger", "two-finger", or "three-finger", alluding to how many fingers are required to scoop it up (the thicker the poi, the fewer fingers required to scoop a sufficient mouthful).',
      'CARE’s work in the Solomon Islands is to localize humanitarian response through Live & Learn, a partnership with municipal councils for disaster preparedness and response, with particular focus on vulnerable groups.',
      ' ',
      '5',
      '60'
    ],
    Somalia: [
      [ 'IMG_2940.JPEG', 'IMG_2941.JPEG' ],
      'Goat Stew',
      'https://www.mysomalifood.com/goat-stew/',
      'Goat meat is a staple in somali cooking and most widely preferred.  Goat stew makes an excellent dish to be served alongside other dishes including rice, sabaayad, lahooh or any type of bread, especially french bread.',
      'CARE has been providing emergency relief and lifesaving assistance to the Somali people since 1981. Our main program activities since then have included projects in water and sanitation, sustainable pastoralist activities, civil society and media development, small-scale enterprise development, primary school education, teacher training, adult literacy and vocational training. We work in partnership with Somali and international aid agencies, civil society leaders and local authorities.Most recently, CARE has broadened its work to include economic empowerment, food and nutrition security, humanitarian response and sexual and reproductive health.CARE Somalia is currently operational in the northern regions of Puntland and Somaliland.',
      '1981',
      '10',
      '30'
    ],
    'South Africa': [
      [ 'IMG_1405.JPEG', 'IMG_1406.JPEG' ],
      'Bobotie',
      'https://drizzleanddip.com/2018/09/26/traditional-south-african-bobotie-with-fragrant-yellow-rice/',
      'Bobotie  is a well-known South African dish consisting of spiced minced meat baked with an egg-based topping.  Bobotie is commonly made with beef or lamb, although pork can also be used. Early recipes incorporated ginger, marjoram and lemon rind; the introduction of curry powder has simplified the recipe but the basic concept remains the same. Some recipes also call for chopped onions and almonds to be added to the mixture. Traditionally, bobotie incorporates dried fruit like raisins or sultanas. It is often garnished with bay leaves, walnuts, chutney and bananas.',
      'In 2019, CARE worked through partners in South Africa on Food and Nutrition Security and climate change resilience programming.',
      '1993',
      '15',
      '40'
    ],
    Spain: [
      [ 'IMG_1391.JPEG', 'IMG_1392.JPEG' ],
      'Tortilla Espanola',
      'https://spanishsabores.com/best-spanish-omelet-recipe/',
      'Spanish omelette or Spanish tortilla is a traditional dish from Spain. Celebrated as a national dish by Spaniards, it is an essential part of the Spanish cuisine. It is an omelette made with eggs and potatoes, optionally including onion. It is often served at room temperature as a tapa. It is commonly known in Spanish-speaking countries as tortilla de patatas, tortilla de papas, tortilla española.',
      ' ',
      ' ',
      '60',
      '15'
    ],
    'Sri Lanka': [
      [ 'IMG_1182.JPEG', 'IMG_1183.JPEG' ],
      'Rice and Curry',
      'https://www.theflavorbender.com/sri-lankan-chicken-curry/',
      'The central feature of Sri Lankan cuisine is boiled or steamed rice, served with a curry of fish or meat, along with other curries made with vegetables, lentils, or fruits. Dishes are accompanied by pickled fruits or vegetables, chutneys, and sambols. Coconut sambol is especially common, a paste of ground coconut mixed with chili peppers, dried Maldive fish, and lime juice.',
      'CARE’s work in Sri Lanka began with a focus on food security and maternal and child health. Today, we work to address the root causes of poverty and the marginalization of vulnerable groups by building communities’ skills and promoting good governance within government and community organizations. We work with poor rural communities, conflict-affected populations and plantation workers. Our programs focus on peacebuilding, sustainable livelihoods, gender equality, emergency preparedness and disaster risk reduction. We also work to address gender-based violence through training, awareness-raising and supporting women’s action groups.Following the 2004 Indian Ocean tsunami, CARE expanded its work to support tsunami survivors in seven of the worst-affected districts.',
      '1950',
      '15',
      '40'
    ],
    Sudan: [
      [ 'IMG_1158.JPEG', 'IMG_1159.JPEG', 'IMG_1160.JPEG' ],
      'Ful Medames',
      'https://tasteofsouthsudan.com/ful-medames-sudanese-fava-beans/',
      'Ful medames, or simply fūl, is a stew of cooked fava beans served with olive oil, cumin, and optionally with chopped parsley, garlic, onion, lemon juice, chili pepper, and other vegetable, herb, and spice ingredients. Ful medames is traditionally made in and served out of a large metal jug. It is notably a staple food in Egypt and is considered a national dish, especially in the northern cities of Cairo and Gizah. Ful medames is also a common part of the cuisines of many Arab, Middle Eastern, and North African cuisines.',
      'CARE began working in Sudan in 1979, focusing on improving water supplies, forestry and energy conservation, and assisting refugees fleeing war in Eritrea. We currently focus on South Darfur and South Kordofan, where we assist conflict-affected communities to increase agricultural productivity, improve access to scarce water and financial resources, and promote hygiene education, better health care and lives free from violence.In South Darfur, over a quarter of a million people have benefited from our food security project for internally displaced people, which ensures that women are the recipients of family rations, and from our emergency health and nutrition work and our water and sanitation projects.',
      '1979',
      '10',
      '120'
    ],
    Suriname: [
      [ 'IMG_3066.jpeg' ],
      'Pom',
      'https://jiriecaribbean.com/pom-national-dish-of-suriname/',
      'Within the Surinamese community, in both Suriname and The Netherlands, pom is the most popular and best known festive dish. The basic preparation method is sautéed chicken pieces between two layers of raw, grated pomtajer, mixed with citrus juice and a sauce made from oil or margarine, onions, tomatoes, salt, pepper and nutmeg, baked in an oven until the pom becomes golden brown.',
      '',
      ' ',
      '20',
      '75'
    ],
    Sweden: [
      [ 'IMG_0835.JPEG', 'IMG_0838.JPEG' ],
      'Kottbullar',
      'https://www.all-thats-jas.com/swedish-meatballs-recipe/',
      'In Sweden, meatballs are called köttbullar (literally "meat buns"). They come in a few different types, all typically small, and the international influence is great, perhaps the greatest from Sweden and Spain. They are usually eaten with potatoes. Some common additions are vegetables, ketchup, spices, etc. They are made with ground beef or a mix of ground beef, pork and sometimes veal or venison, finely chopped (fried) onions, some broth, often with cream and sometimes with breadcrumbs soaked in milk. They are seasoned with white pepper and salt and sometimes allspice and herbs. Swedish meatballs are traditionally served with gravy, boiled or mashed potatoes, lingonberry jam, and sometimes pickled cucumber. Traditionally, they are small, around 2–4 centimetres (0.79–1.57 in) in diameter, though larger meatballs are often served at restaurants.',
      ' ',
      ' ',
      '20',
      '30'
    ],
    Switzerland: [
      [ 'IMG_2562.JPEG', 'IMG_2564.JPEG' ],
      'Fondue',
      'xxx',
      'Fondue is a Swiss melted cheese dish served in a communal pot (caquelon or fondue pot) over a portable stove heated with a candle or spirit lamp, and eaten by dipping bread into the cheese using long-stemmed forks. It was promoted as a Swiss national dish by the Swiss Cheese Union (Schweizerische Käseunion) in the 1930s, and was popularized in North America in the 1960s',
      ' ',
      ' ',
      '20',
      '20'
    ],
    Syria: [
      [ 'IMG_1371.JPEG' ],
      'Kibbeh',
      'https://www.middleeasteye.net/discover/food-recipe-how-make-kibbeh-croquette-fried-aleppo-syria',
      'Kibbeh is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine. In Levantine cuisine, kibbeh is usually made by pounding bulgur wheat together with meat into a fine paste and forming it into balls with toasted pine nuts and spices. It may also be layered and cooked on a tray, deep-fried, grilled, or served raw. In Mesopotamian cuisine, versions with rice or farina are found. Some recipes add semolina. Kibbeh is considered to be a national dish of Syria, Lebanon and especially in Aleppo, and is a popular dish in the Middle East for example in Lebanon, Palestine, Jordan, etc.',
      'CARE began operating in Syria in 2013 to provide life-saving emergency assistance to people affected by the ongoing conflict. CARE responds to the crisis inside Syria through a network of local partners. CARE’s response in Syria includes support for food security and the re-establishment of livelihoods options. We are helping provide reproductive, primary care and maternal health, as well as shelter, clean water, and proper sanitation, mainly by distributing relief supplies and multi-purpose cash vouchers for food as well as hygiene and baby kits, dignity kits for the elderly, and sanitary products which at times of emergency are among the most important items people need to carry on daily activities such as cooking, carrying water, or washing their hands.Where possible, CARE helps rebuild livelihoods, developing resilience programs and providing families with early recovery support, including agricultural production, livestock programs, cash for work, microfinance, and concerted protection programming, including for gender-based violence, case management, and psychosocial programming.The Syrian crisis has been ongoing for more than a decade, and CARE remains gravely concerned about the impact of the conflict on civilians, who continue to pay a heavy price. On average, over 150 Syrians are killed on a daily basis. Civilians are targeted, displaced and are living in dire conditions in besieged areas with grave humanitarian needs. The Syrian conflict has triggered the largest displacement crisis in the world with 6.2 million internally displaced and 5.6 million Syrians in neighboring countries such as Jordan, Lebanon, Egypt, Turkey, or Iraq.',
      '1953',
      '55',
      '65'
    ],
    Taiwan: [
      [ 'IMG_2868.JPEG', 'IMG_2869.JPEG', 'IMG_2870.JPEG' ],
      'Beef Noodle Soup',
      'https://thewoksoflife.com/taiwanese-beef-noodle-soup-instant-pot/',
      'Taiwanese beef noodle soup is a noodle soup dish originating from Taiwan. The beef is often stewed with the broth and simmered, sometimes for hours. Chefs also let the stock simmer for long periods with bone marrow; some vendors can cook the beef stock for over 24 hours. In Taiwan, beef noodle vendors may also have optional, often cold side dishes, such as braised dried tofu, seaweed or pork intestine. Beef noodles are often served with suan cai (Chinese sauerkraut) on top, green onion and sometimes other vegetables in the soup as well.',
      ' ',
      ' ',
      '30',
      '120'
    ],
    Tajikistan: [
      [ 'IMG_0962.JPEG', 'IMG_0963.JPEG' ],
      "O'sh",
      'https://www.international-alert.org/news/recipes-peace-plov-tajikistan',
      'Central Asian osh differs from other preparations in that rice is not steamed, but instead simmered in a rich stew of meat and vegetables called zirvak, until all the liquid is absorbed into the rice. A limited degree of steaming is commonly achieved by covering the pot. It is usually cooked in a kazon (or deghi) over an open fire. The cooking tradition includes many regional and occasional variations. Commonly, it is prepared with lamb, browned in lamb fat or oil, and then stewed with fried onions, garlic and carrots. Chicken palov is rare but found in traditional recipes originating in Bukhara. Palov is usually spiced with whole black cumin, coriander, barberries, red pepper, marigold, and pepper. Heads of garlic and chickpeas are buried into the rice during cooking. Sweet variations with dried apricots, cranberries and raisins are prepared on special occasions.',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    Tanzania: [
      [ 'IMG_0864.JPEG' ],
      'Ugali & Maharage',
      'https://ingmar.app/blog/recipe-the-national-dish-of-tanzania-ugali-na-maharage-ya-nazi/',
      'Ugali, or sima, is a type of stiff maize flour porridge made in Africa. It is also known as vuswa, bogobe, fufu, gauli, gima, isitshwala, kimnyet, kuon, mieliepap, ngima, nshima, obokima, ovuchima, (o)busuma, oshifima, oruhere, pap, phutu, posho, sadza, ubugali, and umutsima, among other names. Sima is sometimes made from other flours, such as millet or sorghum flour, and is sometimes mixed with cassava flour. It is cooked in boiling water or milk until it reaches a stiff or firm dough-like consistency. Maharage ya nazi/ kidney beans in coconut milk is a popular Swahili dish which is made from kidney beans,  simple spices, tomatoes and coconut milk.  In the Kiswahili language maharage/maharagwe is kidney beans and nazi is coconut.',
      'CARE’s work in Tanzania includes women’s empowerment, smallholder agriculture, natural resource management, and climate change adaptation. In rural areas, most people rely on natural resources for their living. We help communities use the land effectively and produce nutritious food while also conserving the environment.We also focus on empowering rural women and girls. We help girls access quality basic education and our village savings and loan programs empower women, improve access to economic resources and boost livelihoods.CARE began working in Tanzania in 1994, in response to the influx of refugees fleeing the Rwandan genocide.',
      '1950',
      '20',
      '25'
    ],
    Thailand: [
      [ 'IMG_2861.JPEG', 'IMG_2865.JPEG' ],
      'Pad Thai',
      'https://hot-thai-kitchen.com/pad-thai/',
      "Pad thai, phat thai, or phad thai, is a stir-fried rice noodle dish commonly served as a street food in Thailand as part of the country's cuisine. It is typically made with rice noodles, shrimp, peanuts, a scrambled egg, and bean sprouts, among other vegetables. The ingredients are fried in a wok.",
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.CARE’s work in Thailand began in 1979, initially responding to the Cambodian refugee influx along Thailand’s borders. The Raks Thai Foundation (the local name of CARE in Thailand) became a member of CARE International on January 2003, becoming the first CARE member from a developing country.Today, CARE works to promote food and nutrition security and resilience in the face of climate change, access to economic resources, especially for women, the pursuit of lives free form violence, emergency preparedness and disaster recovery.',
      '1950',
      '15',
      '30'
    ],
    'The Gambia': [
      [ 'IMG_1077.JPEG' ],
      'Benachin',
      'http://www.mygambiankitchen.com/benachin-jen/',
      'Benachin is a Wolof dish traditionally cooked in one pot (the practice giving it its name). Various ingredients including fish or meat are added, seasoned with herbs, lemon juice, basil, aubergine, parsley, onion, chili, tomato, pumpkin, carrot, cabbage, vegetable oil, and water, with tomato paste sometimes added for color.',
      ' ',
      ' ',
      '20',
      '50'
    ],
    'Timor Leste': [
      [ 'IMG_2838.JPEG', 'IMG_2842.JPEG' ],
      'Ikan Pepes',
      'https://asianfoodnetwork.com/ph/recipes/cuisine/indonesian/ikan-pepes.html',
      'This is an Indonesian dish that uses banana leaf as the food wrapping for the cooking method. The package is then secured with lidi seumat (a nail made of central rib of coconut leaf and sew upon the banana leaf). The cooking technique is either by steaming it in boiling water or grilled on charcoal. The preparation of this dish is to mix gutted fish or any other type of food with other spices and herbs such as shallots, garlic, turmeric, ginger, salt, lemongrass, tamarind, and tomato before wrapping all of it in banana leaf. The variations of pepes are pepes tahu (made from tofu) or pepes jamur (made of mushroom) and many others. Best accompanies by white steam rice.',
      'CARE in Timor-Leste focuses on long-term sustainable development projects in agriculture and disaster risk reduction, education, community health and nutrition, sanitation, capacity building, urban community outreach and peace-building, rural infrastructure and employment, and women’s participation and gender equality.CARE has been operating in Timor-Leste since 1994, originally as part of CARE Indonesia and as an autonomous country office since 2000. In that time, CARE has engaged in two major emergency responses following the violent outbreaks that occurred in 1999 and 2006.',
      '1994',
      '15',
      '45'
    ],
    Togo: [
      [ 'IMG_1548.JPEG', 'IMG_1549.JPEG' ],
      'Ablo & Togolese Chicken',
      'https://ethnicfoodsrus.com/around-the-world-recipes/african-cuisine/togolese-cuisine/ablo/',
      'Chicken recipes are plentiful in Togo; Grilled Togo Chicken is marinated with ginger, garlic, and onion. The dish often includes a dash of cayenne and red palm oil. Ablo are steamed West African rice cake made with rice flour, cornmeal, or both. They are traditionally served with grilled or fried chicken with tomato and onion sauce.',
      'CARE’s programs in Togo particularly target women and girls. We support women’s agriculture through training, knowledge-sharing and access to savings and loans. We work to improve the quality of essential health services for women of reproductive age and children under five and improve their access to health services.We help girls facing exploitative and hazardous child labor to gain access to education. We raise awareness around HIV and family planning and work on urban development and rehabilitation. Our programs help communities access water infrastructure, agro-forestry and other ways to earn a living. We also work in partnership with local organizations to help prevent the trafficking of children for sexual exploitation and child labor.',
      '1986',
      '5',
      '30'
    ],
    Tonga: [
      [ 'IMG_3050.JPEG', 'IMG_3053.JPEG', 'IMG_3054.JPEG' ],
      'Lu Pulu',
      'https://cookinghawaiianstyle.com/lu-pulu/',
      'Lu pulu is a traditional Tongan dish utilizing taro leaves, coconut milk, onions, tomatoes, and canned corned beef, which is usually imported from New Zealand. The ingredients are wrapped in taro leaves, and the whole concoction is then wrapped in aluminum foil or banana leaves and baked in an oven for about 2 hours. The dish should be served hot and paired with anything from rice to yams.',
      'CARE works to support the immediate needs of the people most severely affected by Cyclone Gita (2018) through provision of materials for improved shelter, access to household water collection and recovery of livelihoods. The project emphasizes the participation of women, girls and other marginalized groups in emergencies with a focus on the barriers to their meaningful participation in humanitarian decision-making.',
      ' ',
      '15',
      '300'
    ],
    'Trinidad and Tobago': [
      [ 'IMG_2634.JPEG', 'IMG_2635.JPEG' ],
      'Callaloo',
      'https://cookingwithria.com/2011/10/trinidad-callaloo.html',
      'Callaloo (sometimes kallaloo, calaloo, calalloo, or callalloo) is a popular Caribbean vegetable dish. There are many variants across the Caribbean, depending on the availability of local vegetables. The main ingredient is an indigenous leaf vegetable, traditionally either amaranth (known by many local names including callaloo), taro leaves (known by many local names, including dasheen bush, callaloo bush, callaloo, or bush) or Xanthosoma leaves (known by many names, including cocoyam & tannia). Trinbagonians, Grenadians and Dominicans primarily use taro/dasheen bush for callaloo, although Dominicans also use water spinach.',
      ' ',
      ' ',
      '15',
      '60'
    ],
    Tunisia: [
      [ 'IMG_2265.JPEG', 'IMG_2267.JPEG' ],
      'Brik',
      'https://www.ourtunisiantable.com/home/2017/6/17/tunisian-brik-with-egg',
      'Brik is the north African version of borek, a stuffed filo pastry which is commonly deep fried. The best-known version is the egg brik, a whole egg in a triangular pastry pocket with chopped onion, tuna, harissa and parsley. With a slightly different shape, but with identical ingredients and method of preparation, the brik is known in Algeria and Libya as bourek (بوراك). Brik is also very popular in Israel, due to the large Tunisian Jewish population there. It is often filled with a raw egg and herbs or tuna, harissa and olives and is sometimes served in a pita. This is also known as a boreeka.',
      ' ',
      ' ',
      '20',
      '20'
    ],
    Turkey: [
      [ 'IMG_1431.JPEG', 'IMG_1432.JPEG', 'IMG_1433.JPEG' ],
      'Doner',
      'https://agoodcarrot.com/chicken-doner-kebab-recipe/',
      'Doner kebab is a type of kebab, made of meat cooked on a vertical rotisserie. Seasoned meat stacked in the shape of an inverted cone is turned slowly on the rotisserie, next to a vertical cooking element. The operator uses a knife to slice thin shavings from the outer layer of the meat as it cooks.  The sliced meat of a doner kebab may be served on a plate with various accompaniments, stuffed into a pita or other type of bread as a sandwich, or wrapped in a thin flatbread such as lavash or yufka, known as a dürüm (literally meaning roll or wrap in Turkish). Kadir Nurman in the early 1970s introduced the sandwich or wrap form, which has become popular around the world as a fast food dish sold by kebab shops, and is often called simply a "kebab". The sandwich generally contains salad or vegetables, which may include tomato, lettuce, cabbage, onion with sumac, fresh or pickled cucumber, or chili, and various types of sauces.',
      'Turkey hosts the highest number of refugees globally, reporting over 3.6 million registered Syrian refugees. Turkey has been able to cope with hosting refugees better than Syria’s other neighboring countries, but refugee issues are increasingly politicized, creating significant protection risks. Social services are overstretched, and anti-migrant sentiments are on the rise, often erupting in clashes. Syrians struggle to meet basic needs and often turn to harmful coping mechanisms when all other options run out.CARE prioritizes assistance for people with specific needs: women, youth, and people with disabilities. As the economic burden and length of displacement increase, many refugees turn to early marriage, child labor, and informal and unsafe employment. These practices, coupled with the lack of livelihoods and coping mechanisms perpetuate risk, particularly for women and girls. Language barriers and a lack of reliable information on and access to rights and assistance means that Syrian refugees face ever-present protection, abuse, and exploitation risks.Since 2014, CARE has focused on protection, basic needs, and economic empowerment for refugees, especially women and girls. CARE has developed working relationships with government authorities for operating permits and cooperates with municipalities at the local level. As of December 2020, more than 600,000 refugees and members of the host community have received lifesaving assistance in the following ways:239,557 refugees received greater access to critical information on legal and other forms of protection and rights, and services through outreach and community support structures.211,508 refugees received monthly, one-off and/or time-bound assistance to meet urgent needs.120,785 refugees worked with CARE’s shelter team to secure and upgrade dwellings.19,210 refugees became more self-reliant through improved access to essential basic services and reduced reliance on negative coping mechanisms through the provision of individualized protection support.6,522 refugees, especially women, have became more economically self-reliant through multiple CARE services that foster growing micro-enterprises including loans, developing personal agency, and life skills.',
      '1959',
      '10',
      '30'
    ],
    Turkmenistan: [
      [ 'IMG_1379.JPEG', 'IMG_1380.JPEG' ],
      'Palaw',
      'https://turkmenkitchen.com/en/2011/12/16/turkmen-pilaf/',
      'Pilaf is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in stock or broth, adding spices, and other ingredients such as vegetables or meat, and employing some technique for achieving cooked grains that do not adhere',
      ' ',
      ' ',
      '10',
      '55'
    ],
    Uganda: [
      [ 'IMG_0203.jpeg' ],
      'Matoke',
      'https://www.food.com/recipe/ugandan-matoke-235945',
      'Matoke is a starchy triploid banana cultivar originating from the African Great Lakes. The fruit is harvested green, carefully peeled, and then cooked and often mashed or pounded into a meal. In Uganda and Rwanda, the fruit is steam-cooked, and the mashed meal is considered a national dish in both countries.',
      'Almost one in five Ugandans remain trapped in chronic poverty and a third of all children under five are too short for their age, a symptom of chronic food insecurity and malnutrition.CARE works to strengthen access to protection and life-saving assistance for newly-arrived refugees from DRC and South Sudan as well as their host communities, and diversify the livelihood options of refugee women and girls, men and boys and their host communities through a menu of options for dignified work and ensure that women have equitable influence over household financial decisions.CARE continues to work to reduce incidence and mortality due to Ebola virus through community awareness on Ebola prevention and to reduce the vulnerability of refugees as well as the host communities by improving critical WASH, shelter, and protection infrastructures and capacities, with a focus on women, girls and people with special needs.CARE has been providing development and humanitarian assistance in Uganda since 1969.',
      '1969',
      '40',
      '40'
    ],
    Ukraine: [
      [ 'IMG_1881.JPEG' ],
      'Varenyky',
      'http://www.allthingsukrainian.com/Recipe/Varenyky/VarenykyRecipe.html',
      'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water. They are often pan-fried before serving. Pierogi are associated with the cuisines of Central, Eastern and Southeastern Europe, though they most likely originated in China and came to Europe in the Middle Ages. Pierogi are also popular in modern-day American and Canadian cuisine, where they are sometimes known under different local names. Typical fillings include potato, cheese, quark, sauerkraut, ground meat, edible mushrooms, and/or fruits. Savoury pierogi are often served with a topping of sour cream, fried onions, or both. Among Ukrainians and the Ukrainian diaspora, they are known as varenyky.',
      'In the weeks after the onset of conflict in Ukraine in February 2022, the country’s humanitarian situation has surpassed even the worst-case predicted scenarios. Neighboring countries are seeing huge refugee influxes, largely women and children, with lines at the borders stretching for miles. More than 4.2 million people have left Ukraine in search of safety, and that number is expected to climb. The U.N. is estimating 18 million people will be affected by the conflict, including 7.1 million who are likely to be internally displaced.Even prior to the invasion, years of conflict in the Donetsk and Luhansk regions of eastern Ukraine had left 2.9 million people in need of humanitarian assistance and displaced 1.5 million people from their homes. For Ukrainian refugees and internally displaced people, the most immediate needs include food, clean water, shelter and protection from violence, including gender-based violence. In addition to the ongoing conflict, other major challenges for displaced families include the freezing weather, COVID-19 concerns, and access to healthcare, especially for women and the elderly.Women and girls are particularly at-risk during times of conflict and displacement, most notably due to the increased risk of violence, exploitation, discrimination, and poor access to vital health services.',
      '2022',
      '35',
      '85'
    ],
    'United Arab Emirates': [
      [ 'IMG_2019.JPEG', 'IMG_2021.JPEG' ],
      'Harees',
      'http://worldlocalfood.blogspot.com/2017/12/saudi-hareesa-recipe-saudi-local-food.html',
      'Harees, Jareesh, boko boko, or harisa is a dish of boiled, cracked, or coarsely-ground wheat, mixed with meat and seasoned. It is often served during Ramadan, festivals such as Eid ul-Fitr, and at weddings.[6] In Lebanon, it is often cooked on religious occasions in a communal pot, such as in Ashura. Harise is also a common dish in Syrian cuisine and Iraqi cuisine.',
      ' ',
      ' ',
      '5',
      '190'
    ],
    'United Kingdom': [
      [ 'IMG_1782.JPEG', 'IMG_1786.JPEG' ],
      'Fish & Chips',
      'https://www.daringgourmet.com/fish-and-chips/',
      "Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England, where these two components had been introduced from separate immigrant cultures; it is not known who created the culinary fusion that became the emblematic British meal. Often considered Britain's national dish, fish and chips is a common take-away food in the United Kingdom and numerous other countries, particularly in English-speaking and Commonwealth nations.",
      'CARE International is a global confederation of 16 member organizations – Austria, Australia, Canada, Denmark, Egypt, France, Germany, India, Japan, Luxembourg, Netherlands, Norway, Peru, Thailand, United Kingdom, and United States – working together to end poverty.Founded in America in 1945 after World War II, CARE was first known as the “Cooperative for American Remittances to Europe.” CARE first sent food aid and basic supplies in the form of CARE Packages to war-torn Europe – where millions were in danger of starvation and these goods were either heavily rationed or impossible to find. Some 100 million CARE packages reached people in need during the next two decades, first in Europe and later in Asia and other parts of the developing world.Britain received its last CARE packages in 1955. By then, CARE was working in 18 countries across the globe. Throughout the 1950s and 1960s, the economies of the former wartime nations developed and improved and the focus of CARE’s work shifted from Europe to the problems of the developing world.Initially CARE continued to focus on food aid, but in the 1960s we expanded our remit – pioneering primary health care programs. In the 1970s, we responded to massive famines in Africa with both emergency relief and long-term agro-forestry projects, integrating environmentally-sound tree- and land-management practices with farming programs.',
      '1945',
      '30',
      '15'
    ],
    'United States of America': [
      [ 'IMG_2363.JPEG', 'IMG_2365.JPEG', 'IMG_2366.JPEG' ],
      'Thanksgiving Turkey',
      'https://tastesbetterfromscratch.com/easy-no-fuss-thanksgiving-turkey/',
      'The centerpiece of contemporary Thanksgiving in the United States and in Canada is Thanksgiving dinner (informally called turkey dinner), a large meal generally centered on a large roasted turkey. Thanksgiving may be the largest eating event in the United States as measured by retail sales of food and beverages and by estimates of individual food intake. People often consume as much as three or four thousand calories during the course of the dinner.',
      'In 2019, CARE introduced poverty-fighting initiatives in the United States for the first time. According to the 2018 U.S. census, 38 million people lived in poverty in the United States. Our approach to working in the U.S. is focused on partnering with local organizations to adapt proven programs from other parts of the world to fight domestic poverty and innovating new approaches based on CARE’s best practices, principles and values.In September 2019, CARE created the Global Innovation Hub, which convenes people and organizations dedicated to defeating poverty by achieving social justice and equity everywhere. Online and at our 40K sq./ft co-working space at CARE’s US headquarters in downtown Atlanta, we are building a community of activists, leaders, and movement builders that share our commitment to solving critical social impact issues. We are doing that in two ways:We are building a network of U.S. nonprofits, academic centers, think tanks, government actors, and private sector partners to rigorously test techniques, technologies, and programs to determine if and how they could be successful in addressing poverty in the U.S.Both virtually and in-person, Global Innovation Hub partner organizations are sharing and applying lessons learned through a rich blend of programs and convenings – including shared experiences to better understand the racial/ethnic and gender justice issues that underlay poverty in the U.S. and around the world. We are also sharing resources such as CARE’s program library, evaluations, and data to help tackle specific, pressing problems.',
      '1945',
      '20',
      '210'
    ],
    Uruguay: [
      [ 'IMG_1658.JPEG', 'IMG_1659.JPEG' ],
      'Chivito',
      'https://blog.amigofoods.com/index.php/other-latin-foods/chivito/',
      'Chivito is the national dish of Uruguay. It is a thin slice of tender cooked beef steak (churrasco), with mozzarella, tomatoes, mayonnaise, black or green olives, and commonly also bacon, fried or hard-boiled eggs and ham, served as a sandwich in a bun, often accompanied by French fried potatoes. Other ingredients, such as red beets, peas, grilled or pan-fried red peppers, and slices of cucumber, may be added.',
      ' ',
      ' ',
      '5',
      '20'
    ],
    Uzbekistan: [
      [ 'IMG_0417.JPEG', 'IMG_0421.JPEG' ],
      'Tuy Palovi',
      'https://ingmar.app/blog/recipe-the-national-dish-of-uzbekistan-tuy-palovi-wedding-plov/',
      `Uzbekistan's signature dish is palov (plov or osh or palov, "pilaf"), a main course typically made with rice, pieces of meat, grated carrots and onions. It is usually cooked in a kazan (or deghi) over an open fire; chickpeas, raisins, barberries, or fruit may be added for variation. Although often prepared at home for family and guests by the head of household or the housewife, palov is made on special occasions by the oshpaz, or the osh master chef, who cooks the national dish over an open flame, sometimes serving up to 1,000 people from a single cauldron on holidays or occasions such as weddings. Nahor oshi, or "morning plov", is served in the early morning (between 6 and 9 am) to large gatherings of guests, typically as part of an ongoing wedding celebration.`,
      ' ',
      ' ',
      '45',
      '45'
    ],
    Vanuatu: [
      [ 'IMG_1494.JPEG', 'IMG_1495.JPEG', 'IMG_1496.JPEG' ],
      'Lap Lap',
      'https://www.rpcvmadison.org/cpages/vanuatu-2015-recipes-lap-lap',
      'Laplap is the national dish of Vanuatu. Laplap is prepared by grating breadfruit, bananas, taro or yam roots into a vegetable paste. The paste is then wrapped in banana leaves and cooked in an underground stone oven, with fresh coconut cream. Meats like pork, beef, chicken or flying fox can be added.',
      'Consisting of 83 islands, Vanuatu is highly vulnerable to natural disasters including earthquakes and tropical storms. CARE started working here in 2008, with a focus on helping communities prepare for emergencies – such as Cyclone Pam in 2015.Communities in Vanuatu have limited capacity to rebuild when disasters strike. CARE helps them develop sustainable emergency preparedness plans, and gain the skills and knowledge they need to prevent, prepare for and respond to disasters – and to rebuild afterwards. We also work with local organizations, other NGOs and government bodies to ensure they can give communities the support they need.CARE also works to strengthen the leadership, capacity and coordination of civil society and government actors in Vanuatu to more effectively work towards the promotion of gender equality and the elimination of violence against women and girls. Communities in Vanuatu are also experiencing better health outcomes through piloting a community-centered accountability model for the health sector through engagement of communities and use of digital media.',
      '2008',
      '30',
      '60'
    ],
    'Vatican City': [
      [ 'IMG_0907.JPEG', 'IMG_0908.JPEG' ],
      'Fettuccini alla Papalina',
      'https://memoriediangelina.com/2009/07/06/fettuccine-alla-papalina/',
      'Fettuccine alla papalina, or “Fettuccine for the Pope”, is an upscale reinterpretation of the earthy spaghetti alla carbonara. The story goes that the dish was prepared for a certain Cardinal Pacelli, soon to become Pope Pius XII, who had asked the owner of a restaurant in the Borgo (the area of Rome that lies between the Vatican and the Tiber River) to make him a more delicate version of the classic Roman dish. So the restauranteur came up with this more refined dish, substituting fettuccine for the usual spaghetti, prosciutto for the guanciale, Parmesan for the pecorino, and adding a splash of cream.',
      ' ',
      ' ',
      '45',
      '30'
    ],
    Venezuela: [
      [ 'IMG_0377.jpeg', 'IMG_0378.jpeg' ],
      'Pabellon Criollo',
      'https://venezuelancooking.wordpress.com/2011/12/14/recipe-pabellon-criollo/',
      'Pabellón criollo is a traditional Venezuelan dish, the local version of the rice and beans combination found throughout the Caribbean. It is a plate of rice, shredded beef in stew and stewed black beans.',
      'CARE has been present in the Latin America and Caribbean region since 1954. CARE has been responding to the Venezuela migrant and refugee crisis with a gender sensitive approach. CARE has been implementing emergency response interventions directly and through partners (in particular women’s organization) in Peru and Ecuador, Colombia and inside Venezuela. CARE focuses its response on some of the most vulnerable forcibly displaced and host community members, especially women, adolescents and girls, the LGBTQI+ population and young men.CARE is responding in the areas of Sexual and Reproductive Health, Water, Sanitation and Hygiene, Food and Nutrition Security, Shelter and cross-cutting Cash and Voucher Assistance. In every intervention, CARE aims to include up to 30% of hosting communities in order to bolster social cohesion.Inside Venezuela, CARE is working both in Caracas and Miranda state. CARE is focusing its interventions through partners on vulnerable families, mainly female-headed households, families with children under age 5 and the elderly.',
      '2018',
      '30',
      '250'
    ],
    Vietnam: [
      [ 'IMG_2041.JPEG', 'IMG_2042.JPEG' ],
      'Pho',
      'https://leitesculinaria.com/36506/recipes-pho-noodle-soup.html',
      "Phở or pho is a Vietnamese soup dish consisting of broth, rice noodles (bánh phở), herbs, and meat (usually beef (phở bò), sometimes chicken (phở gà)). Pho is a popular food in Vietnam where it is served in households, street stalls and restaurants countrywide. Pho is considered Vietnam's national dish.",
      'CARE has worked in Vietnam since 1989. As Vietnam becomes a middle-income country, we are concentrating our work on supporting rights and sustainable development among the most vulnerable groups in Vietnam, for example ethnic minorities, poor women and girls, and people vulnerable to climate change. We train women in small business management and help them participate in community development planning. We support people to sustainably manage forests and share the costs and benefits equitably. We provide water and sanitation facilities to schools, and supply information on health and safe water, sanitation and hygiene practices in communities and schools.Vietnam suffers seasonally from natural disasters. We work with communities to prepare for drought, storms and floods. Simple, inexpensive preparatory measures, particularly those run by communities themselves, are extremely effective in limiting damage and saving lives when disaster strikes. CARE is also testing digital solutions to storm tracking and preparedness.CARE lobbies national government to ensure that climate change policies respond to the needs of poor, vulnerable and minority communities. At the same time, we are integrating climate change adaptation into selected projects, to help poor communities adapt to climate change. For example, planting dense mangroves along the coast provides a barrier from the sea and offers livelihood opportunities for small fisheries.With CARE’s focus on women and girls, CARE in Vietnam actively seeks to prevent gender-based violence and works with the garment industry to reduce sexual harassment and abuse in the workplace.',
      '1954',
      '60',
      '190'
    ],
    Yemen: [
      [ 'IMG_2206.JPEG', 'IMG_2207.JPEG' ],
      'Saltah',
      'http://www.shebayemenifood.com/content/fahsa-saltah',
      'Saltah is a traditional Yemeni dish. In the Ottoman Empire saltah was used as a charitable food, and was made with left over food that was donated by the wealthy or the mosques. It is widely eaten in northern parts of the country. It is mainly served for lunch. The base is a brown meat stew called maraq, a dollop of fenugreek froth, and sahawiq (a mixture of chillies, tomatoes, garlic, and herbs ground into a salsa). Rice, potatoes, scrambled eggs, and vegetables are common additions to saltah. It is eaten traditionally with khubz mulawah, which is a Yemeni flat bread, and it is used as a utensil to scoop up the dish. Saltah is an old Yemeni dish that some say is thousands of years old.',
      'CARE has been continuously active in Yemen since 1993, addressing poverty and promoting social justice through emergency relief efforts and sustainable development projects.CARE is operational across 13 in governorates in Yemen, delivering emergency response and recovery assistance through direct implementation and in partnership with local and international organizations.CARE reaches 1.2 million people with water, sanitation and hygiene (WASH) services including water trucking and hygiene kits. CARE works with communities on hygiene promotion to prevent the spread of deadly diseases like cholera and COVID-19.We support women’s economic empowerment through improving their access to financial means, equipment, technical advice, and training so they can set up small businesses.We distribute food, cash, and vouchers to 1.4 million people, enabling them to buy essential supplies for their families.We work in reproductive health to train and equip midwives, rehabilitate maternity wards, and provide home delivery kits.CARE empowers young people with education and vocational training to provide them with job opportunities.',
      '1993',
      '10',
      '50'
    ],
    Zambia: [
      [ 'IMG_2523.JPEG', 'IMG_2524.JPEG' ],
      'Ndiwo & Nshima',
      'https://wp.bridgewater.edu/mtembo/zambian-foods/nshima-and-ndiwo/',
      'Nshima is the staple food eaten by not only Zambians but Malawians and many other African neighbors. It is a food cooked from plain maize or corn meal or maize flour known as mealie-meal among Zambians. One of the most significant aspects of the Zambian staple meal by which the nshima is ultimately identified with what in English might be called the “relish”. The relish is an English and somewhat poor equivalent or translation, which obviously, does not precisely reflect or capture what Zambians often realize is the very fundamental and transcending essence of the dish. The relish is a second dish that is always and without exception served with the nshima.  The ndiwo second dish which is always served with nshima is often cooked from domestic and wild meats that include beef, goat, mutton, deer, buffalo, elephant, warthog, wild pig, mice, rabbits or hare, antelope, turtle, alligator or crocodile, monkey, chicken eggs. Green vegetables include domestic or garden grown like collard greens, cabbage, pumpkin and squash leaves, pea leaves, cassava leaves, bean leaves, kabata, nyazongwe, or bilozongwe leaves. T',
      'CARE began working in Zambia in 1992 in response to severe regional drought and extreme poverty in the region. Today’s focus is on long-term community-based development programs, working in both rural and marginal peri-urban areas.CARE Zambia has two niche areas with the overall goal of empowering women and girls, who bear the brunt of poverty and crisis: maternal and child nutrition and social protection.CARE Zambia is committed to gender equality, greater and more meaningful participation of people living with HIV and AIDS, and a pro-poor, anti-poverty stance in its interaction with communities and policymakers alike.You May Also LikeHaiti Hit by 7.2 Magnitude EarthquakeSouthern African Nutrition Initiative (SANI) -...Roadblocks at the last mile: What’s slowing down...CARE LogoCARE works around the globe to save lives, defeat poverty and achieve social justice. We seek a world of hope, inclusion and social justice, where poverty has been overcome and all people live with dignity and security.90% of all our expenses go to program services.Learn moreOur WorkGet InvolvedNews & StoriesAbout UsDonateContact UsCareersCorporate PartnershipsAccountability & TransparencyAnnual ReportsFinancial ResponsibilityEquity & InclusionCARE is a 501(c)(3) not-for-profit organization. Our EIN number is 13-1685039. © 2020 CARE. All rights reserved.Privacy PolicyTerms of UseSitemapText CARE to 227387 to stay connected.',
      '1992',
      '5',
      '50'
    ],
    Zimbabwe: [
      [ 'IMG_1703.JPEG', 'IMG_1704.JPEG', 'IMG_1705.JPEG' ],
      'Sadza & Dovi',
      'https://www.zimbokitchen.com/how-to-make-plain-sadza/',
      'Dovi is a traditional peanut stew from Zimbabwe made with crushed peanuts, garlic, onions, okra, vegetables such as carrots or potatoes, and stock or other liquids. The dish can be made with or without meat, typically chicken, goat, or lamb. It is recommended to pair it with sadza (cornmeal and water), rice, or mashed potatoes on the side. Ugali, or sima, is a type of stiff maize flour porridge made in Africa. It is also known as vuswa, bogobe, fufu, gauli, gima, isitshwala, kimnyet, kuon, mieliepap, ngima, nshima, obokima, ovuchima, (o)busuma, oshifima, oruhere, pap, phutu, posho, sadza, ubugali, and umutsima, among other names. Sima is sometimes made from other flours, such as millet or sorghum flour, and is sometimes mixed with cassava flour. It is cooked in boiling water or milk until it reaches a stiff or firm dough-like consistency.',
      'CARE began working in Zimbabwe in 1992 in response to severe regional drought and has since expanded programming to address longer-term development issues. Currently, an estimated 5.8 million people are facing severe food insecurity in Zimbabwe as a result of the human-made climate crisis.Investing in water infrastructure is critical for tackling the drought that is gripping large swaths of the country and the wider region. CARE is focused on providing easy access to water for drinking and irrigation to stop the spread of disease and to prevent people – most of whom are women and girls – from walking miles to and from water sources every single day.Through strategic local partnerships, CARE is implementing both short-term and long-term programming to empower Zimbabwe’s vulnerable households to meet their basic needs through sustainable livelihoods. To that end, CARE’s programming in Zimbabwe is focused on the following areas: food and nutrition security, climate resilient livelihoods, economic development, education, and water, sanitation, and hygiene.',
      '1992',
      '15',
      '65'
    ]
  };

  const countryListArray = [
    'Ireland',
    'Bulgaria',
    'Hungary',
    'Netherlands',
    'Honduras',
    'Nicaragua',
    'Uganda',
    'Guinea',
    'Guinea-Bissau',
    'Malaysia',
    'Nauru',
    'Bhutan',
    'Bahrain',
    'Cuba',
    'Botswana',
    'Ecuador',
    'Azerbaijan',
    'Leichtenstein',
    'Venezuela',
    'Republic of the Congo',
    'Italy',
    'Uzbekistan',
    'Lithuania',
    'Indonesia',
    'Brazil',
    'Kuwait',
    'Lesotho',
    'Finland',
    'Niger',
    'Fiji',
    'Algeria',
    'El Salvador',
    'Costa Rica',
    'Afghanistan',
    'Bolivia',
    'Georgia',
    'Peru',
    'Burkina Faso',
    'Albania',
    'Panama',
    'Austria',
    'Nepal',
    'Belize',
    'Montenegro',
    'Iran',
    'Egypt',
    'Saudi Arabia',
    'Chile',
    'Madagascar',
    'Russia',
    'Tunisia',
    'Angola',
    'Solomon Islands',
    'Latvia',
    'Paraguay',
    'Sweden',
    'Philippines',
    'Djibouti',
    'Tanzania',
    'Mali',
    'Vatican City',
    'North Macedonia',
    'Moldova',
    'Kazakhstan',
    'Central African Republic',
    'Tajikistan',
    'Equitorial Guinea',
    'Qatar',
    'New Zealand',
    'Ghana',
    'The Gambia',
    'Marshall Islands',
    'Iraq',
    'Pakistan',
    'Belgium',
    'Serbia',
    'Sudan',
    'Dominican Republic',
    'Sri Lanka',
    'Norway',
    'Eritrea',
    'Libya',
    'Denmark',
    'Mozambique',
    'Namibia',
    'Haiti',
    'Belarus',
    'Democratic Republic of the Congo',
    'Rwanda',
    'Kyrgyzstan',
    'Nigeria',
    'Syria',
    'Turkmenistan',
    'Spain',
    'South Africa',
    'Malawi',
    'Czech Republic',
    'Turkey',
    'Morocco',
    'Bahamas',
    'Chad',
    'Oman',
    'Vanuatu',
    'Romania',
    'France',
    'Papua New Guinea',
    'Togo',
    'San Marino',
    'Cyprus',
    'Malta',
    'Australia',
    'Uruguay',
    'Zimbabwe',
    'United Kingdom',
    'Yemen',
    'Mexico',
    'Ukraine',
    'Colombia',
    'Jamaica',
    'Saint Kitts and Nevis',
    'Antigua and Barbuda',
    'United Arab Emirates',
    'Armenia',
    'Vietnam',
    'Bosnia and Herzegovina',
    'Bangladesh',
    'Guyana',
    'Gabon',
    'Cameroon',
    'Myanmar',
    'Cambodia',
    'Palestine',
    'Mauritius',
    'Maldives',
    'Palau',
    'Saint Lucia',
    'Dominica',
    'Monaco',
    'United States of America',
    'Ivory Coast',
    'Kenya',
    'Liberia',
    'Zambia',
    'Samoa',
    'Switzerland',
    'Germany',
    'Trinidad and Tobago',
    'Micronesia',
    'Sierra Leone',
    'Jordan',
    'Lebanon',
    'India',
    'Poland',
    'Seychelles',
    'Benin',
    'Greece',
    'Kosovo',
    'Ethiopia',
    'Timor Leste',
    'Brunei',
    'Burundi',
    'Canada',
    'Thailand',
    'Taiwan',
    'North Korea',
    'Somalia',
    'Croatia',
    'Grenada',
    'Slovenia',
    'Israel',
    'Luxembourg',
    'Tonga',
    'Kiribati',
    'Suriname'];

let loggedIn = false;
const password = 'test';

//return object that associates a count of matching ingredients with an array of those countries that match that number of ingredients
function getCountriesFromIngredients(ingredients, checkedDietaryBoxes) {
    let countsByCountry = {};
    ingredients.forEach(ingredient => {
        ingredientsCountries[ingredient].forEach(country => {
          let validCountry = true;
          for (let i = 0; i < checkedDietaryBoxes.length; i++) {
            console.log(`${country}: ${checkedDietaryBoxes[i]}  ${countryDietaryInformation[country][i]}`);
            if (checkedDietaryBoxes[i] > countryDietaryInformation[country][i]) {
              validCountry = false;
            }
          }
          if (validCountry) {
            if (countsByCountry[country]) {
                countsByCountry[country] += 1;
            }
            else {
                countsByCountry[country] = 1;
            }
          }
        });
    });
    // console.log(countryCounts);
    let countries = Object.keys(countsByCountry)
    let countriesByCount = {};
    countries.forEach(country => {
        if (countriesByCount[countsByCountry[country]]) {
            countriesByCount[countsByCountry[country]].push(country);
        } else {
            countriesByCount[countsByCountry[country]] = [country];
        }
    })
    // console.log(countriesByCount);
    return countriesByCount;
}

function checkPassword(enteredPassword) {
    if (!loggedIn) {
        loggedIn = (enteredPassword == password) ? true:false;
    }
}

function getIngredientsFromCountry(country) {
    return countryIngredients[country];
}

//helper function to find intersection of two arrays
function arrayIntersect(a, b) {
    if (a && b) {
        let finalArray = [];
        a.forEach(element => {
            if (b.includes(element)) {
                finalArray.push(element);
            }
        })
        return finalArray;
    } else {
        return [];
    }
}

function getCountryDietaryInformation() {
  return countryDietaryInformation; 
}

function getCountryResults(countCountryPairs) {
    let countries = [];
    Object.keys(countCountryPairs).forEach((count) => {
        countries = countries.concat(countCountryPairs[count]);
    });
    return countries;
}

//take in an object of count:country pairs, output the HTML to populate the search result cards
function getSearchResultHTML(countCountryPairs) {
    let html = '';
    const counts = Object.keys(countCountryPairs);
    const maxCount = Math.max(...counts);
    for (let i = maxCount; i > 0; i--) {
      if (countCountryPairs[i]) {
          let text = (i>1 ? `ingredients match` : 'ingredient matches');
          html += `<div class="ingredient-match-count"><p>${i} ${text}!</p></div>`;/////redo this span obviously
          html += `<div class="country-results">`;
            countCountryPairs[i].forEach(country => {
                if (loggedIn) {//display clickable search results (logged in)
                    //console.log(country);
                    html +=
                    //include in <p> below to show picture of dish// <img src="Images/Photos/${country}/${data[country][0][0]}" class="result-card-image">
                    `<div id="${country}-result-card" class="result-card" style="filter: blur(0px);">
                        <p>
                        ${country.charAt(0).toUpperCase() + country.slice(1)}: <a href="${data[country][2]}" target="_blank">${data[country][1]}</a>
                        </p>
                        </div>`;

                } else {//display unclickable search results (not logged in)
                    //console.log(country);
                    html +=
                    `<div id="${country}-result-card" onselectstart="return false" class="result-card" style="filter: blur(4px);">
                        <p>${country.charAt(0).toUpperCase() + country.slice(1)} :&nbsp <span href="${data[country][2]}">${data[country][1]}</a></p>
                    </div>`;
                }
            })
            // html +=
            // `<div><p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------</p></div>`
            html += "</div>";
        }
    }
    return html;
}

function getIngredientListArray() {
  return ingredientListArray;
}

function getIngredientListHTML() {
    let html = ``;
    ingredientListArray.forEach(element => {
        html +=
        `<div id="ingredient-list-container-${element}" class="ingredient-list-entry-container">
          <div id="ingredient-list-${element}" class="ingredient-list-entry">
            ${element}
          </div>
        </div>`;
        // console.log(element);
    })
    return html;
}

function getSelectedIngredientsHTML(ingredients) {
    let html = ``;
    ingredients.forEach(ingredient => {
        html += `<div>
        
        <div id="${ingredient}SearchResult" class="selected-ingredient-container">
        <div class="selected-ingredient-text">
        ${ingredient}
        </div>
        <div id="${ingredient}CloseBox" class="selected-ingredient-close">
        X
        </div>
        </div>
        </input>
        </div>`;
        
    })
    return html;
}

function getCountrySearchResults(input) {
    input = input.toLowerCase();
    const results = countryListArray.filter(entry => entry.includes(input));
    return results;
}

function getIngredientSearchResults(input) {
    // console.log(input);
    input = input.toLowerCase();
    const lowerCaseResults = lowerCaseIngredientListArray.filter(entry => entry.includes(input));
    // console.log(lowerCaseResults);
    let results = lowerCaseResults.map(element => ingredientListArray[lowerCaseIngredientListArray.indexOf(element)]);
    // console.log(results);
    return results;
}