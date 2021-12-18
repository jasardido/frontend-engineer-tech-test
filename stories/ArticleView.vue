<template>
  <article>
    <my-header />
    <b-container>
      <b-row>
        <b-col class="vh-50 text-center" align-v="center" v-if="!items">
          <div style="margin: 200px">
            <b-spinner type="grow" label="Spinning"></b-spinner>
          </div>
        </b-col>
        <b-col v-else>
          <b-container>
            <b-row>
              <b-col />
              <b-col>
                <h2>{{ items.title }}</h2>
                <h4>{{ items.author }}</h4>
                <img :src="items.image" alt="image" />
                <p>{{ items.intro }}</p>
                <p>{{ items.text }}</p>
              </b-col>
              <b-col />
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "./page.css";
import MyHeader from "./Header.vue";

export default {
  name: "my-page",

  components: { MyHeader },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getArticles"]),
    items() {
      return this.getArticles.view;
    },
  },

  methods: {
    ...mapActions(["requestArticleId"]),
  },

  created() {
    this.requestArticleId(this.$route.params.id);
  },
};
</script>
