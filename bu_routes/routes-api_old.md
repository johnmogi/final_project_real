server.use('/api/auth', authController);
server.use('/api/products', productController);
server.use('/api/super', adminController);
server.use('/api/cart', cartController);

auth:

localhost:3000/api/auth/register
localhost:3000/api/auth/login

items:{
get.all: localhost:3000/api/items/
post.add: localhost:3000/api/items/add
}
