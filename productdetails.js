// Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

// Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).
// Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
// В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
// Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
const productdetails = {
    data() {
        return {
            product: {
                name: 'Phone',
                price: 99.99,
                available: false,
            },
        };
    },
    computed: {
        formatedPrice(price) {
            return '$' + this.product.price;
        }
    },
    template: `
        <h2>Product Details!</h2>
        <h2>Name: {{ this.product.name }}</h2>
        <h2>Price: {{ formatedPrice }}</h2>
        <h2 v-if="product.available">Available: "Available"</h2>
        <h2 v-else="!product.available">Available: "Out of stock"</h2>
    
    `,
}