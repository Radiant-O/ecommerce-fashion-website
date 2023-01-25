import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    query: "",
    quantity: 1,
    singleProduct: {},
    categories: [],
    checked: [],
  }),
  getters: {
    filterProducts() {
      if (this.checked.length === 0) {
        return this.products;
      } else if (this.checked.length > 0) {
        return this.products.filter(
          (product) => this.checked.indexOf(product.category) !== -1
        );
      }
    },
    //      searchedProducts () {
    //       return products.value.filter((product) => {
    //         return (
    //           product.title
    //             .toLowerCase()
    //             .indexOf(searchQuery.value.toLowerCase()) != -1
    //         );
    //       });
    // };
  },
  actions: {
    async getProducts() {
      await axios
        .get("https://fakestoreapi.com/products?q=" + this.query)
        .then((response) => {
          this.products = response.data;
        })
        .catch(() => {
          console.log("Fail to load Api");
        });
    },

    async getCategory() {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      this.categories = res.data;
    },

    async getSingleProduct(id) {
      await axios
        .get(`https://fakestoreapi.com/products/${parseInt(id)}`)
        .then((response) => {
          this.singleProduct = response.data;
          console.log(this.singleProduct);
        })
        .catch(() => {
          console.log("Fail to load Product");
        });
    },
  },
});
