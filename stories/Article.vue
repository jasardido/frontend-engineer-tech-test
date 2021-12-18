<template>
  <article>
    <my-header />

    <b-container>
      <b-row v-if="!getArticles.rows">
        <b-col class="vh-50 text-center" align-v="center">
          <div style="margin: 200px">No Data :(</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(article, index) in items"
          :key="index"
          class="mt-5"
          cols="4"
        >
          <b-card
            :title="article.title"
            :sub-title="article.author"
            :img-src="article.image"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              {{ article.intro | truncate(100, "...") }}
            </b-card-text>

            <b-button @click="visitArticle(article.id)" variant="primary"
              >Visit</b-button
            >
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-pagination
            v-if="rows !== 0"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
        <b-col>
          <b-form-input
            v-model="search"
            placeholder="Search Something Available..."
            class="mb-2"
          ></b-form-input
        ></b-col>
        <my-button
          size="small"
          @onClick="onSearch"
          label="Search"
          class="mb-2"
        />
      </b-row>
    </b-container>
  </article>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import "./page.css";
import MyHeader from "./Header.vue";
import MyButton from "./Button.vue";

export default {
  name: "my-page",

  components: { MyHeader, MyButton },

  data() {
    return {
      search: "",
      perPage: 3,
      currentPage: 1,
    };
  },
  watch: {
    currentPage(newVal, oldVal) {
      this.requestArticles({
        perPage: this.perPage,
        currentPage: newVal,
      });
    },
  },
  computed: {
    ...mapGetters(["getArticles"]),
    items() {
      return this.getArticles.list;
    },
    rows() {
      return this.getArticles.rows || 0;
    },
  },
  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  methods: {
    ...mapActions(["requestArticles", "requestArticleSearch"]),
    ...mapMutations(["resetArticle"]),
    onSearch() {
      this.$emit("onSearch");
      this.currentPage = 1;
      this.requestArticleSearch({
        data: this.search,
        page: {
          perPage: this.perPage,
          currentPage: 1,
        },
      });
    },
    visitArticle(data) {
      this.resetArticle();
      this.$router.push({ name: "article-id", params: { id: data } });
    },
  },

  created() {
    this.currentPage = this.getArticles.currentPage || 1;
    this.requestArticles({
      perPage: this.getArticles.perPage || this.perPage,
      currentPage: this.getArticles.currentPage || this.currentPage,
    });
  },
};
</script>
