//const fs = require('fs')

//Read in word list file
// const countryListText = fs.readFileSync(`C:/Users/berge/OneDrive/Desktop/Web Development/Sandbox/CARE website/recipe search/countries.txt`, `utf8`);
// const countryListArray = countryListText.split(`\r\n`)

// console.log(countryListArray);

const ingredientListArray = ["chuck beef/stew meat","brisket","rump steak","bottom round roast","flank steak","short ribs","beef shank","blade roast","veal stew meat","veal","carne seca","tripe","beef","marrow bones","ground beef","rookwurst","pork neck","pork shoulder","bacon","prosciutto","smoked sausage","italian-style sausage","paio sausage","pork belly","calabresa sausage","pig tail","pork lard","ground pork","chicken","ground lamb","lamb shoulder","leg of lamb","rack of lamb","lamb meat","crayfish","conch","anchovies","tuna","mussels","fish","stock fish","saltfish","walu","corvina","shrimp","whitefish","feta","sirene","yak cheese","ricotta","parmigiano-reggiano","mozzarella","fresh mozzarella","white cheese","gruyere","emmanthaler","fontina","queso paraguay","cotija","yogurt","sour cream","whipped cream","milk","evaporated milk","whole milk","heavy cream","unsalted butter","smen","clarified butter","ghee","margarine","egg yolks","egg whites","eggs","leek","taro","white yams","pumpkin leaves","lettuce","auyama","kale","spinach","arugula","beet","rutabaga","cassava","cucumber","sweet potato/yam","okra","bottle gourd","butternut squash","acorn squash","tomatoes","cabbage","peas","yellow split peas","pumpkin","potatoes","baby potatoes","eggplant","mushrooms","russet potatoes","yukon gold potatoes","serrano peppers","red bell pepper","green bell pepper","yellow onion","red onion","white onion","green onion","leafy greens","spring onion","scallions","shallot","green olives","black olives","celery","celery leaves","jalapeno","chili pepper","green chili","red chilis","hot peppers","habanero","sweet habanero","scotch bonnet","cardoon","zucchini","turnip","corn","carrots","plantains","strawberries","kiwi","pineapple","apple","passionfruit","bananas","lime","coconut","orange","lemon","small red beans","kidney beans","black beans","baked beans","lima beans","pinto beans","chickpeas","white beans","fava beans","legume","yellow dal","macadamia nuts","pistachios","walnuts","cashews","almonds","peanuts","beef stock","chicken stock","vegetable stock","worcestershire","tobasco","soy sauce","dijon mustard","hot sauce","locust beans","coconut milk","dark chocolate","vanilla","nougat chocolate","crisco","mayonnaise","sweet pickles","tahini","sauerkraut","apricot jam","coconut cream","dried edible roses","lingonberry jam","harissa","raisins","applesauce","grape leaves","peanut butter","tamarind juice","egusi","lemon juice","lime juice","tomato puree","italian peeled tomatoes","diced tomatoes","tomato sauce","loomi","chile paste","ginger and garlic paste","sambal oelek","barley flour","millet flour","teff flour","white vinegar","fruit vinegar","masa harina","rice flour","corn flour","cornmeal","refried beans","salsa lizano","shortening","unflavored gelatin","yellow food coloring","breadcrumbs","tomato paste","phyllo dough","white bread","sweet waffles","puff pastry","bulgur","couscous","flour tortillas","pita","flat bread","all purpose flour","long-grain rice","jasmine rice","basmati rice","sela rice","vermicelli","turkish seasoning","medium grain rice","caraway seeds","black mustard","cumin","cumin seeds","coriander","coriander seeds","oregano","tarragon","mexican oregano","herbes de provence","adobo","bhar","curry power","paprika","smoked paprika","nutmeg","onion powder","garlic powder","chili powder","red pepper flakes","chili flakes","cayenne pepper","fenugreek seeds","fenugreek powder","ground ginger","mixed herbs","bbq spice","garam masala","baharat","epis","qatari machboos spice blend","turmeric","allspice","fennel seeds","cardamom pods","cardamom seeds","ground cardamom","cinnamon stick","star anise","ground cinnamon","4 epices","ground cloves","cloves","dried thyme","lemongrass","peppercorns","saffron","jumbo/bouillon","chicken bouillon","bay leaves","curry leaves","parsley","basil","rosemary","cilantro","culantro","dill","chives","thyme","coriander","mint","kaffir lime leaves","allspice berries","ginger","garlic","olive oil","coconut oil","sesame oil","sunflower oil","red palm oil","canola oil","vegetable oil","guinness","white wine","red wine","black pepper","white pepper","salt","seasoned salt","brown sugar","icing sugar","caster sugar","sugar","baking soda","baking powder","cornstarch","active yeast","instant yeast","honey","vitamin c","transglutaminase","banana leaf","carbonated water","yellow food coloring","orange food coloring","rose water","orange flower water","water"];



const countryListArray = [
    'ireland',
    'bulgaria',
    'hungary',
    'netherlands',
    'honduras',
    'nicaragua',
    'uganda',
    'guinea',
    'guinea-bissau',
    'malaysia',
    'nauru',
    'bhutan',
    'bahrain',
    'cuba',
    'botswana',
    'ecuador',
    'azerbaijan',
    'leichtenstein',
    'venezuela',
    'republic of the congo',
    'italy',
    'uzbekistan',
    'lithuanua',
    'indoneisa',
    'brazil',
    'kuwait',
    'lesotho',
    'finland',
    'niger',
    'fiji',
    'algeria',
    'el salvador',
    'costa rica',
    'afghanistan',
    'bolivia',
    'georgia',
    'peru',
    'burkina faso',
    'albania',
    'panama',
    'austria',
    'nepal',
    'belize',
    'montenegro',
    'iran',
    'egypt',
    'yemen',
    'chile',
    'madagascar',
    'russia',
    'tunisia',
    'angola',
    'solomon islands',
    'latvia',
    'paraguay',
    'sweden',
    'philippines',
    'djibouti',
    'tanzania',
    'mali',
    'vatican city',
    'north macedonia',
    'moldova',
    'kazakhstan',
    'central african republic',
    'tajikistan',
    'equitorial guinea',
    'qatar',
    'new zealand',
    'ghana',
    'the gambia',
    'marshall islands',
    'iraq',
    'pakistan',
    'belgium',
    'serbia',
    'sudan',
    'dominican republic',
    'sri lanka',
    'norway',
    'eritrea',
    'libya',
    'denmark',
    'mozambique',
    'namibia',
    'haiti',
    'belarus',
    'democratic republic of the congo',
    'rwanda',
    'kyrgyzstan',
    'nigeria',
    'syria',
    'turkmenistan',
    'spain',
    'south africa',
    'malawi',
    'czech republic',
    'turkey',
    'morocco',
    'bahamas',
    'chad',
    'oman',
    'vanuatu',
    'romania',
    'france',
    'papua new guinea',
    'togo',
    'san marino',
    'cyprus',
    'malta',
    'australia',
    'uruguay',
    'zimbabwe',
    'united kingdom',
    'yemen',
    'mexico',
  ];

function getCountrySearchResults(input) {
    input = input.toLowerCase();
    const results = countryListArray.filter(entry => entry.includes(input));
    return results;
}

function getIngredientSearchResults(input) {
    input = input.toLowerCase();
    const results = ingredientListArray.filter(entry => entry.includes(input));
    return results;
}

// console.log(getSearchResults('OM'));