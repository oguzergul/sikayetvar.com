<template>
  <ContainerCard>
    <div class="post-detail">
      <div class="post-detail-user">
        <p @click="redirect">{{ get_user_detail.name }}</p>
      </div>
      <hr>

      <div class="post-detail-post">
        <p class="post-detail-post-text"> {{ get_post_detail.title }} </p>
        <p class="post-detail-post-text"> {{ get_post_detail.body }} </p>
      </div>
    </div>
  </ContainerCard>
</template>

<script>
import ContainerCard from "../components/cards/ContainerCard";
import {mapGetters} from 'vuex';

export default {
  name: 'PostDetail',
  components: {ContainerCard},
  computed: {
    ...mapGetters(["get_post_detail", "get_user_detail"]),
  },
  methods: {
    redirect() {
      this.$router.push({name: 'UserDetail', params: {id: this.$route.params.id}});
    }
  },
  created() {
    this.$store.dispatch('GET_POST_DETAIL', this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
