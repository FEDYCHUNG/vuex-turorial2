

<template>
  <div class="notifications-list">
    <NotificationsMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationsMessage from "./NotificationsMessage";
import { mapState } from "vuex";

export default {
  components: {
    NotificationsMessage
  },
  computed: mapState(["notifications"])
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>