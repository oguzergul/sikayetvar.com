<template>
  <div>
    <ContainerCard>
      <ol>
        <ListItem
            v-for="(post,index) in paginated_post_data"
            :key="index"
            :number="index+1"
            :title="post.title"
            @onDelete="showAlert(post.id)"
            @onDetail="showDetail(post.id)"
            @onEdit="showModal(post.id)"/>
      </ol>
    </ContainerCard>

    <Alert
        v-if="alertCondition"
        :alert-body="selectedPost.title"
        @onClose="alertCondition = false"
        @submitDelete="deletePost">
    </Alert>

    <Modal
        v-if="modalCondition"
        :body-value="model.body"
        :title-value="model.title"
        title="Düzenle"
        @bodyInput="getBodyValue"
        @onClose="modalCondition = false"
        @onUpdate="updatePost"
        @titleInput="getTitleValue"/>
  </div>
</template>

<script>
import Button from "../components/buttons/Button";
import ContainerCard from "../components/cards/ContainerCard";
import ListItem from "../components/cards/ListItem";
import {mapGetters} from 'vuex';
import Modal from "../components/Modal";
import Alert from "../components/Alert";

export default {
  name: 'Home',
  components: {Alert, Modal, ListItem, ContainerCard, Button},
  data() {
    return {
      model: {
        title: "",
        body: "",
      },
      modalCondition: false,
      alertCondition: false,
      alertContent: "",
      selectedPost: null,
    }
  },
  methods: {
    showAlert(id) {
      this.alertCondition = true;
      this.selectedPost = this.paginated_post_data.find(post => post.id === id);
    },
    showModal(id) {
      this.modalCondition = true;
      this.selectedPost = this.paginated_post_data.find(post => post.id === id);
      this.model.title = this.selectedPost.title;
      this.model.body = this.selectedPost.body;
    },
    showDetail(id) {
      this.$router.push({name: 'PostDetail', params: {id: id}});
    },
    deletePost() {
      this.$store.dispatch('DELETE_POST', this.selectedPost.id);
      this.alertCondition = false;
    },
    updatePost() {
      const dataModel = {
        id: this.selectedPost.id,
        title: this.model.title,
        body: this.model.body,
        userId: this.selectedPost.userId,
      }
      this.$store.dispatch('UPDATE_POST', dataModel);
      this.modalCondition = false;
    },
    getTitleValue(e) {
      this.model.title = e;
    },
    getBodyValue(e) {
      this.model.body = e;
    }
  },
  computed: {
    paginated_post_data() {
      return this.$store.getters.get_posts_data?.splice(0, 6) || [];
    },
    ...mapGetters(["get_posts_data"])
  },
  created() {
    this.$store.dispatch('GET_POSTS');
    this.$store.dispatch('GET_USERS');
  },
}
</script>

<style scoped>

</style>
