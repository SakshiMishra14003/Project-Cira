const LoginForm = document.getElementById('loginForm');

const data = [{
	"id": "1",
	"name": "Product 1",
	"description": "Exude elegance with our timeless leather tote, perfect for work or play. Crafted with premium leather, it boasts ample space for essentials, while sturdy straps ensure comfortable carrying.",
	"category": "bag",
	"price": 299,
	"imageURL": "img/products/bags/1.jpg"
},{
	"id": "2",
	"name": "Product 2",
	"description": "Stay active in style with our sleek nylon backpack. Featuring multiple compartments and padded straps, it's your go-to for gym sessions or outdoor adventures.",
	"category": "bag",
	"price": 599,
	"imageURL": "img/products/bags/2.jpg"
},{
	"id": "3",
	"name": "Product 3",
	"description": "Elevate your ensemble with our versatile crossbody sling. Designed for urban warriors, its compact yet spacious design effortlessly carries your essentials from day to night.",
	"category": "bag",
	"price": 999,
	"imageURL": "img/products/bags/3.jpg"
	
},{
	"id": "4",
	"name": "Product 4",
	"description": "Embrace rugged sophistication with our durable canvas duffel. Ideal for weekend getaways or gym trips, its spacious interior and sturdy construction make it a must-have for the modern explorer.",
	"category": "bag",
	"price": 199,
	"imageURL": "img/products/bags/4.jpg"
	
},{
	"id": "5",
	"name": "Product 5",
	"description": "Add a touch of glamour to your evening ensemble with our luxurious velvet clutch. Compact yet capacious, its plush texture and sleek design make it the perfect accessory for special occasions.",
	"category": "bag",
	"price": 399,
	"imageURL": "img/products/bags/5.jpg"
	
},{
	"id": "6",
	"name": "Product 6",
	"description": "Make a statement with our whimsical printed tote. Vibrant designs meet practicality in this spacious bag, perfect for adding a pop of personality to your everyday look.",
	"category": "bag",
	"price": 499,
	"imageURL": "img/products/bags/6.jpg"
},{
	"id": "7",
	"name": "Product 7",
	"description": "Streamline your style with our minimalist laptop briefcase. Sleek and sophisticated, it offers padded protection for your tech essentials without compromising on sleek aesthetics.",
	"category": "bag",
	"price": 599,
	"imageURL": "img/products/bags/7.jpg"
},{
	"id": "8",
	"name": "Product 8",
	"description": "Embrace boho chic with our fringe shoulder bag. Crafted from soft suede and adorned with playful fringe accents, it's the epitome of free-spirited style for festival season and beyond.",
	"category": "bag",
	"price": 799,
	"imageURL": "img/products/bags/8.jpg"
},{
	"id": "9",
	"name": "Product 1",
	"description": "This irresistibly soft bunny toy is perfect for cuddling and playtime. With its velvety fur and floppy ears, it's sure to become your child's favorite companion.",
	"category": "toy",
	"price": 99,
	"imageURL": "img/products/toys/1.jpg"
},{
	"id": "10",
	"name": "Product 2",
	"description": "Our cuddly bear toy is made for endless hugs and snuggles. Its plush fabric and adorable expression make it a comforting friend for naptime and beyond.",
	"category": "toy",
	"price": 199,
	"imageURL": "img/products/toys/2.jpg"
},{
	"id": "11",
	"name": "Product 3",
	"description": "Meet our gentle giant, the plush elephant! With its big floppy ears and trunk, this huggable friend is ready for imaginative adventures and cozy bedtime stories.",
	"category": "toy",
	"price": 299,
	"imageURL": "img/products/toys/3.jpg"
},{
	"id": "12",
	"name": "Product 4",
	"description": "Our soft kitty toy is purr-fect for little ones who love animals. With its fluffy fur and sweet face, it's sure to bring smiles and warmth to any playtime.",
	"category": "toy",
	"price": 399,
	"imageURL": "img/products/toys/4.jpg"
},{
	"id": "13",
	"name": "Product 5",
	"description": "Embrace the cuteness of our cozy panda toy! Made with ultra-soft material and featuring a friendly face, this lovable companion is ready for endless snuggles and play.",
	"category": "toy",
	"price": 499,
	"imageURL": "img/products/toys/5.jpg"
},{
	"id": "14",
	"name": "Product 6",
	"description": "Dive into fun with our huggable dolphin toy! Its silky-smooth fabric and playful design make it the perfect buddy for underwater adventures and bedtime cuddles.",
	"category": "toy",
	"price": 599,
	"imageURL": "img/products/toys/6.jpg"
},{
	"id": "15",
	"name": "Product 7",
	"description": "Roar into playtime with our plush tiger toy! With its vibrant stripes and squishy body, this cuddly companion is ready to join your little one on wild adventures.",
	"category": "toy",
	"price": 699,
	"imageURL": "img/products/toys/7.jpg"
},{
	"id": "16",
	"name": "Product 8",
	"description": "Hang out with our snuggly sloth toy! With its gentle smile and super-soft fur, this laid-back friend is perfect for lazy days and cozy nights.",
	"category": "toy",
	"price": 999,
	"imageURL": "img/products/toys/8.jpg"
},{
	"id": "17",
	"name": "Product 1",
	"description":"Elegant and timeless, our Classic Silver Watch boasts a stainless steel strap and a minimalist face, perfect for any occasion.",
	"category": "watch",
	"price": 1599,
	"imageURL": "img/products/watches/1.jpg"
},{
	"id": "18",
	"name": "Product 2",
	"description": "Dive into adventure with our Waterproof Sports Watch, equipped with a durable rubber strap and precise chronograph features.",
	"category": "watch",
	"price": 2599,
	"imageURL": "img/products/watches/2.jpg"
},{
	"id": "19",
	"name": "Product 3",
	"description": "Make a statement with our Luxury Rose Gold Watch, adorned with sparkling crystals and a sophisticated dial, a must-have for glamorous evenings.",
	"category": "watch",
	"price": 3599,
	"imageURL": "img/products/watches/3.jpg"
},{
	"id": "20",
	"name": "Product 4",
	"description": "Embrace simplicity with our Casual Leather Watch, featuring a genuine leather band and a clean, understated design for everyday wear.",
	"category": "watch",
	"price": 4599,
	"imageURL": "img/products/watches/4.jpg"
},{
	"id": "21",
	"name": "Product 5",
	"description": "Stay connected with our Smart Fitness Watch, offering heart rate monitoring, activity tracking, and smartphone notifications for your active lifestyle.",
	"category": "watch",
	"price": 6599,
	"imageURL": "img/products/watches/5.jpg"
},{
	"id": "22",
	"name": "Product 6",
	"description": "Discover sophistication with our Automatic Skeleton Watch, showcasing intricate mechanics and a transparent case back for horology enthusiasts.",
	"category": "watch",
	"price": 7599,
	"imageURL": "img/products/watches/6.jpg"
},{
	"id": "23",
	"name": "Product 7",
	"description": "Capture attention with our Bold Military Watch, crafted with a rugged nylon strap and luminous hands for easy readability in any environment.",
	"category": "watch",
	"price": 8599,
	"imageURL": "img/products/watches/7.jpg"
},{
	"id": "24",
	"name": "Product 8",
	"description": "Unleash your inner adventurer with our Aviator Pilot Watch, inspired by aviation instruments and designed for precision and durability on your travels.",
	"category": "watch",
	"price": 9599,
	"imageURL": "img/products/watches/8.jpg"
},{
	"id": "25",
	"name": "Product 1",
	"description": "Timeless simplicity meets comfort in this staple piece. Crafted from soft, breathable cotton, it’s perfect for everyday wear.",
	"category": "tshirt",
	"price": 199,
	"imageURL": "img/products/tshirts/1.jpg"
},{
	"id": "26",
	"name": "Product 2",
	"description": "Make a statement with bold graphics on premium cotton. Vibrant colors and durable fabric ensure style that lasts.",
	"category": "tshirt",
	"price": 999,
	"imageURL": "img/products/tshirts/2.jpg"
},{
	"id": "27",
	"name": "Product 3",
	"description": "Elevate your casual look with this stylish striped tee. Made from high-quality cotton, it offers both comfort and sophistication.",
	"category": "tshirt",
	"price": 599,
	"imageURL": "img/products/tshirts/3.jpg"
},{
	"id": "28",
	"name": "Product 4",
	"description": "A wardrobe essential, this V-neck tee offers a relaxed fit and superior comfort. Versatile and durable, it pairs effortlessly with any outfit.",
	"category": "tshirt",
	"price": 799,
	"imageURL": "img/products/tshirts/4.jpg"
},{
	"id": "29",
	"name": "Product 5",
	"description": "Add a touch of flair to your ensemble with this tee featuring a stylish chest pocket. Crafted from soft cotton, it combines functionality with fashion.",
	"category": "tshirt",
	"price": 699,
	"imageURL": "img/products/tshirts/5.jpg"
},{
	"id": "30",
	"name": "Product 6",
	"description": "Embrace modern style with this longline tee crafted from premium cotton. Its elongated silhouette offers a contemporary twist on a classic design.",
	"category": "tshirt",
	"price": 399,
	"imageURL": "img/products/tshirts/6.jpg"
},{
	"id": "31",
	"name": "Product 7",
	"description": "Achieve a lived-in look with this vintage washed tee. Soft and comfortable, its worn-in feel adds character to any outfit.",
	"category": "tshirt",
	"price": 499,
	"imageURL": "img/products/tshirts/7.jpg"
},{
	"id": "32",
	"name": "Product 8",
	"description": "Stay cool and comfortable in this sleeveless tank top made from breathable cotton. Perfect for layering or wearing solo on warm days.",
	"category": "tshirt",
	"price": 599,
	"imageURL": "img/products/tshirts/8.jpg"
},{
	"id": "33",
	"name": "Product 1",
	"description": "Adorned with radiant diamonds, this necklace exudes elegance and sophistication, perfect for special occasions.",
	"category": "jewellery",
	"price": 3599,
	"imageURL": "img/products/jewellery/1.jpg"
},{
	"id": "34",
	"name": "Product 2",
	"description": " A stunning display of royal blue sapphire, set in luxurious white gold, destined to captivate with its timeless beauty.",
	"category": "jewellery",
	"price": 9599,
	"imageURL": "img/products/jewellery/2.jpg"
},{
	"id": "35",
	"name": "Product 3",
	"description": "Graceful and classic, these earrings feature lustrous pearls dangling delicately from sterling silver hooks.",
	"category": "jewellery",
	"price": 6599,
	"imageURL": "img/products/jewellery/3.jpg"
},{
	"id": "36",
	"name": "Product 4",
	"description": "Crafted with vibrant emeralds in a continuous line, this bracelet adds a touch of luxury to any ensemble.",
	"category": "jewellery",
	"price": 2399,
	"imageURL": "img/products/jewellery/4.jpg"
},{
	"id": "37",
	"name": "Product 5",
	"description": "Intricately designed with intricate details, this brooch adds a nostalgic charm to your outfit, reminiscent of a bygone era.",
	"category": "jewellery",
	"price": 8999,
	"imageURL": "img/products/jewellery/5.jpg"
},{
	"id": "38",
	"name": "Product 6",
	"description": "Sleek and modern, this bangle showcases the warmth of rose gold, perfect for everyday wear or special occasions.",
	"category": "jewellery",
	"price": 5699,
	"imageURL": "img/products/jewellery/6.jpg"
},{
	"id": "39",
	"name": "Product 7",
	"description": "Express your unique style with this eclectic charm bracelet, adorned with an assortment of colorful gemstones.",
	"category": "jewellery",
	"price": 3699,
	"imageURL": "img/products/jewellery/7.jpg"
},{
	"id": "40",
	"name": "Product 8",
	"description": "Masculine and rugged, this leather bracelet features a stainless steel clasp, adding a touch of sophistication to casual attire.",
	"category": "jewellery",
	"price": 8999,
	"imageURL": "img/products/jewellery/8.jpg"
},{
	"id": "41",
	"name": "Product 1",
	"description": "Make a statement with these oversized cat-eye sunglasses, exuding glamour and sophistication.",
	"category": "sunglasses",
	"price": 599,
	"imageURL": "img/products/sunglasses/1.jpg"
},{
	"id": "42",
	"name": "Product 2",
	"description": " Reflecting the hues of dusk, these sleek aviators blend style and function effortlessly.",
	"category": "sunglasses",
	"price": 9599,
	"imageURL": "img/products/sunglasses/2.jpg"
},{
	"id": "43",
	"name": "Product 3",
	"description": "Channel vintage vibes with these round frames, perfect for adding a touch of old-school cool to any look.",
	"category": "sunglasses",
	"price": 8599,
	"imageURL": "img/products/sunglasses/3.jpg"
},{
	"id": "44",
	"name": "Product 4",
	"description": ": Designed for the active adventurer, these wraparound sunglasses offer durability and UV protection without compromising on style.",
	"category": "sunglasses",
	"price": 7599,
	"imageURL": "img/products/sunglasses/4.jpg"
},{
	"id": "45",
	"name": "Product 5",
	"description": "Embrace simplicity with these timeless square frames, featuring clean lines and understated elegance.",
	"category": "sunglasses",
	"price": 6599,
	"imageURL": "img/products/sunglasses/5.jpg"
},{
	"id": "46",
	"name": "Product 6",
	"description": "Get ready to soak up the sun in style with these classic wayfarers, ideal for lazy days by the shore.",
	"category": "sunglasses",
	"price": 4599,
	"imageURL": "img/products/sunglasses/6.jpg"
},{
	"id": "47",
	"name": "Product 7",
	"description": "avigate the city streets with confidence in these bold rectangular sunglasses, combining urban flair with practicality.",
	"category": "sunglasses",
	"price": 5599,
	"imageURL": "img/products/sunglasses/7.jpg"
},{
	"id": "48",
	"name": "Product 8",
	"description": " Dare to be different with these eclectic sunglasses, featuring a fusion of textures, colors, and shapes for a truly unique look.",
	"category": "sunglasses",
	"price": 9599,
	"imageURL": "img/products/sunglasses/8.jpg"
},{
	"id": "49",
	"name": "Product 1",
	"description": "Timeless elegance meets comfort with these versatile loafers, perfect for work or leisure.",
	"category": "shoes",
	"price": 1230,
	"imageURL": "img/products/shoes/1.jpg"
},{
	"id": "50",
	"name": "Product 2",
	"description": "Elevate your casual style with our range of trendy sneakers, designed for both performance and fashion-forward looks.",
	"category": "shoes",
	"price": 5620,
	"imageURL": "img/products/shoes/2.jpg"
},{
	"id": "51",
	"name": "Product 3",
	"description": "Make a statement with every step in these glamorous high heel sandals, ideal for evening soirées or special occasions.",
	"category": "shoes",
	"price": 2365,
	"imageURL": "img/products/shoes/3.jpg"
},{
	"id": "52",
	"name": "Product 4",
	"description": "Embrace the cold weather in style with our cozy winter boots, crafted for warmth and durability without compromising on fashion.",
	"category": "shoes",
	"price": 9856,
	"imageURL": "img/products/shoes/4.jpg"
},{
	"id": "53",
	"name": "Product 5",
	"description": "Effortlessly cool and comfortable, these canvas slip-ons are a must-have for laid-back days and weekend adventures.",
	"category": "shoes",
	"price": 2365,
	"imageURL": "img/products/shoes/5.jpg"
},{
	"id": "54",
	"name": "Product 6",
	"description": "Achieve sophistication and comfort with our elegant ballet flats, perfect for both office attire and chic outings.",
	"category": "shoes",
	"price": 1452,
	"imageURL": "img/products/shoes/6.jpg"
},{
	"id": "55",
	"name": "Product 7",
	"description": "Conquer the great outdoors with confidence in our sturdy hiking boots, engineered for rugged terrain and all-day comfort.",
	"category": "shoes",
	"price": 9653,
	"imageURL": "img/products/shoes/7.jpg"
},{
	"id": "56",
	"name": "Product 8",
	"description": "Transition seamlessly from day to night in these stylish ankle boots, featuring versatile designs that complement any outfit with flair.",
	"category": "shoes",
	"price": 2563,
	"imageURL": "img/products/shoes/8.jpg"
},{
	"id": "57",
	"name": "Product 1",
	"description": " Ensuring easy navigation for seamless shopping experience.",
	"category": "traditional",
	"price": 25693,
	"imageURL": "img/products/traditionals/1.jpg"
},{
	"id": "58",
	"name": "Product 2",
	"description": "Providing customers with confidence through encrypted transactions.",
	"category": "traditional",
	"price": 56987,
	"imageURL": "img/products/traditionals/2.jpg"
},{
	"id": "59",
	"name": "Product 3",
	"description": "Adapting to various devices for on-the-go shopping convenience.",
	"category": "traditional",
	"price": 45698,
	"imageURL": "img/products/traditionals/3.jpg"
},{
	"id": "60",
	"name": "Product 4",
	"description": "Empowering customers with insights from previous buyers.",
	"category": "traditional",
	"price": 65783,
	"imageURL": "img/products/traditionals/4.jpg"
},{
	"id": "61",
	"name": "Product 5",
	"description": "Allowing users to save desired items for future purchase.",
	"category": "traditional",
	"price": 15489,
	"imageURL": "img/products/traditionals/5.jpg"
},{
	"id": "62",
	"name": "Product 6",
	"description": "Enhancing user experience with quick page loading times.",
	"category": "traditional",
	"price": 32654,
	"imageURL": "img/products/traditionals/6.jpg"
},{
	"id": "63",
	"name": "Product 7",
	"description": "Assisting shoppers with queries and concerns at any hour.",
	"category": "traditional",
	"price": 14789,
	"imageURL": "img/products/traditionals/7.jpg"
},{
	"id": "64",
	"name": "Product 8",
	"description": "Rewarding frequent customers with discounts or perks for continued patronage.",
	"category": "traditional",
	"price": 14596,
	"imageURL": "img/products/traditionals/8.jpg"
}
];

localStorage.setItem('products', JSON.stringify(data));

LoginForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const userID = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	const users = JSON.parse(localStorage.getItem('users'));
	console.log(users);

	if(userID in users) {
		const user = users[userID];
		if(user.userID === userID && user.password === password){
			localStorage.setItem('userID', user.userID);
			localStorage.setItem('cart', JSON.stringify(user.cart));
			localStorage.setItem('orders', JSON.stringify(user.orders));

			window.location.href = 'HomePage.html';
		}
	};
});