import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cartItems: [],
  }),
  getters: {},
  actions: {
    addToCart(item) {
      this.cartItems.findIndex((product) => product.id === item.id);
      // if (index !== -1) {
      //   this.products[index].quantity += 1;
      // } else {
      //   item.quantity = 1;
      this.cartItems.push(item);
      console.log(this.cartItems)
      // }
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
