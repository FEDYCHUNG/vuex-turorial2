<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
        </ul>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
            <div @click="$event.stopPropagation()">
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";

export default {
  components: {
    MiniCart,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>
