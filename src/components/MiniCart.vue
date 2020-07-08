<template>
  <div
    class="dropdown-menu p-2"
    style="min-width:320px; right:0; left:auto;"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />{{ item.quantity }} x $ {{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: $ {{ cartTotalPrice }}</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotalPrice"]),
  },
  mounted() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },
  },
};
</script>
