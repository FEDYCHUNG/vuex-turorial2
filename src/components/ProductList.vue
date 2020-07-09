<template>
  <div class="d-flex align-item-strecth flex-wrap">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ProductCard from "./ProductCard";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(['products']),
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    ...mapActions(["getProducts"]),
  }
};
</script>
