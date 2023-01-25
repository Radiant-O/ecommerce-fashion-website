import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cartItems: [],
    quantity: 1,
  }),
  getters: {},
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        console.log(this.cartItems);
      }
    },

    increaseQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
    },
    decreaseQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
    },

    async getProducts() {
      await axios
        .get("https://fakestoreapi.com/products?q=" + this.query)
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(() => {
          console.log("Fail to load Api");
        });
    },
    //     addToCart(title, quantity) {
    //       if (!this.cartItem[title]) this.cartItem[title] = 0;
    //       this.cartItem[title] += quantity;
    //     },
    //   },
    //   getPrice(itemName) {
    //     const productName = this.goods.find((price) => {
    //       return price.name === itemName;
    //     });
    //     return productName.price;
    //   },
  },
});
