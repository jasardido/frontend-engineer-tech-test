import article from "@/api/article";

export const state = () => ({
  article: {
    temp: null,
    list: null,
    rows: null,
    view: null,
    currentPage: null,
    perPage: null,
  },
});

export const getters = {
  getArticles: (state) => {
    return state.article;
  },
};

export const mutations = {
  setArticles(state, data) {
    state.article.currentPage = data.page.currentPage;
    state.article.perPage = data.page.perPage;
    let offset = (state.article.currentPage - 1) * state.article.perPage;

    state.article.temp = data.data;
    state.article.rows = state.article.temp.length;
    state.article.list = state.article.temp.slice(offset).slice(0, state.article.perPage);
  },
  setArticleSearch(state, data) {
    state.article.currentPage = data.page.currentPage;
    state.article.perPage = data.page.perPage;
    let offset = (state.article.currentPage - 1) * state.article.perPage;

    state.article.temp = data.data;
    state.article.rows = state.article.temp.length;
    state.article.list = state.article.temp.slice(offset).slice(0, state.article.perPage);
  },
  setArticleId(state, data) {
    state.article.view = data;
  },
  resetArticle(state) {
    state.article.view = null;
  },
  resetPages(state) {
    state.article.currentPage = null;
    state.article.perPage = null;
  },
};

export const actions = {
  requestArticles(context, data) {
    if (!!context.state.article.rows) {
      context.commit("setArticles", {
        data: context.state.article.temp,
        page: data,
      });
    } else {
      article.requestArticles().then((res) => {
        context.commit("setArticles", { data: res.data, page: data });
      });
    }
  },
  requestArticleSearch(context, data) {
    article.requestArticleSearch(data.data).then((res) => {
      context.commit("setArticleSearch", { data: res.data, page: data.page });
    });
  },
  requestArticleId(context, data) {
    article.requestArticleId(data).then((res) => {
      context.commit("setArticleId", res.data);
    });
  },
};
