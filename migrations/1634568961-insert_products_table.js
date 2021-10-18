const products = [
  {
    name: 'Gravel Bike - Explorer Titanium',
    description:
      'The Explorer is our ultimate all-round bike for some serious business!',
    price: 4399,
    image: 'bike_kevin.jpg',
  },
  {
    name: 'Gravel Bike - Explorer Steel',
    description:
      'The Explorer is our ultimate all-round bike for some serious business!',
    price: 3399,
    image: 'bike_kevinsteel.jpg',
  },
  {
    name: 'Allroad Bike - Ultra Titanium',
    description:
      'The Ultra is our ultimate endurance machine to eat mile after mile!',
    price: 4499,
    image: 'bike_ultra.jpg',
  },
  {
    name: '1 Person Tent',
    description: 'This comfortable tent will house one person.',
    price: 199,
    image: 'tent_1person.jpg',
  },
  {
    name: '2 Person Tent',
    description: 'This comfortable tent will house two persons.',
    price: 299,
    image: 'tent_2person.jpg',
  },
  {
    name: '3 Person Tent',
    description: 'This comfortable tent will house three persons.',
    price: 399,
    image: 'tent_3person.jpg',
  },
  {
    name: 'Jenkins Handlebar Bag',
    description:
      'Bring all your important belongings in this spacious handlebar bag',
    price: 149,
    image: 'barbag.jpg',
  },
  {
    name: 'Rooter Frame Bag',
    description:
      'Bring all your important belongings in this spacious frame bag',
    price: 179,
    image: 'framebag.jpg',
  },
  {
    name: 'Cakadoo Saddle Bag',
    description:
      'Bring all your important belongings in this spacious saddle bag',
    price: 199,
    image: 'saddlebag.jpg',
  },
  {
    name: 'Mount Everest Sleeping Bag (Men)',
    description:
      'For those long and cozy nights outdoors, this sleeping bag is the perfect companion',
    price: 279,
    image: 'sleepingbag_men.jpg',
  },
  {
    name: 'Mount Everest Sleeping Bag (Women)',
    description:
      'For those long and cozy nights outdoors, this sleeping bag is the perfect companion',
    price: 279,
    image: 'sleepingbag_women.jpg',
  },
  {
    name: 'Wilma Sleeping Mat',
    description:
      'Just as small as a bottle of water when packed, this sleeping mat will unfold to a super comfy air bed in just seconds.',
    price: 129,
    image: 'sleepingmat.jpg',
  },
  {
    name: 'Chamois Cream (500ml)',
    description:
      'Do you care about your most valuable body part? Then this chamois creme is just the thing for you.',
    price: 19,
    image: 'butt_creme.jpg',
  },
  {
    name: 'Soto Cooker',
    description:
      'Fueling up on your adventure is crucial. The multi-cooker will make sure that you can enjoy your Pasta in every corner of the world.',
    price: 149,
    image: 'cooker.jpg',
  },
  {
    name: 'Park Tool Patch Kit',
    description:
      'Terrain can be rough on your adventure rig. This patch kit will make sure you can hop back on your bike and continue to enjoy the ride.',
    price: 15,
    image: 'patchkit.jpg',
  },
  {
    name: 'Park Tool Bike Repair Box',
    description:
      'This bike repair box will contain every tool needed to fix and prepare your adventure rig for the big journey.',
    price: 199,
    image: 'repairkit.jpg',
  },
];

// Inserts values into products table
exports.up = async function up(sql) {
  console.log('Inserting products...');
  for (const product of products) {
    await sql`
	  INSERT INTO products
  	(name, description, price, image)
		VALUES
		(${product.name},${product.description},${product.price},${product.image});
		`;
  }
};

// Deletes product rows
exports.down = async function down(sql) {
  console.log('Removing products...');
  for (const product of products) {
    await sql`
		DELETE FROM products
		WHERE
		name = ${product.name};
	`;
  }
};
