<template>
  <ContainerCard>
    <div v-if="get_user_detail.address" class="user-detail">
      <div class="user-detail-main">
        <div class="user-detail-main-info">
          <h1 class="user-detail-main-info-name">{{ get_user_detail.name }}</h1>
          <h2 class="user-detail-main-info-city">{{ get_user_detail.address.city || "" }}</h2>

          <div class="user-detail-main-info-user">
            <div class="user-detail-main-info-user-labels">
              <ul>
                <li>Username</li>
                <li>Email</li>
                <li>Phone</li>
                <li>Website</li>
                <li>Company</li>
              </ul>
            </div>
            <div class="user-detail-main-info-user-values">
              <ul>
                <li>{{ get_user_detail.username }}</li>
                <li>{{ get_user_detail.email }}</li>
                <li>{{ get_user_detail.phone }}</li>
                <li>{{ get_user_detail.website }}</li>
                <li>{{ get_user_detail.company.name }}</li>
              </ul>
            </div>
          </div>

        </div>
        <div class="post-detail-main-map">
          <gmaps-map class="user-detail-main-map-container">
            <gmaps-marker
                :position="{ lat: parseInt(get_user_detail.address.geo.lat), lng: parseInt(get_user_detail.address.geo.lng) }"/>
          </gmaps-map>
        </div>
      </div>
      <div class="user-detail-footer">
        <p class="user-detail-footer-description">{{ get_post_detail.title }}</p>
        <p class="user-detail-footer-description">{{ get_post_detail.body }}</p>

        <a class="user-detail-footer-link" href="/">Show More</a>
      </div>
    </div>
  </ContainerCard>
</template>

<script>
import {mapGetters} from 'vuex';
import ContainerCard from "../components/cards/ContainerCard";
import {gmapsMap, gmapsMarker} from 'x5-gmaps';

export default {
  name: 'PostDetail',
  components: {ContainerCard, gmapsMap, gmapsMarker},
  computed: {
    ...mapGetters(['get_user_detail', 'get_post_detail'])
  },
  created() {
    this.$store.dispatch('GET_POST_DETAIL', this.$route.params.id);
  },
}
</script>

<style scoped>

</style>
