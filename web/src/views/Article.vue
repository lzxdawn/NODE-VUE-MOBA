<template>
  <div class="page-article">
      <div class="d-flex py-3 px-2 border-bottom" v-if="model">
          <div class="iconfont icon-Back text-blue"></div>
          <div class="flex-1 text-blue pl-2">
              <strong>{{ model.title }}</strong>
          </div>
          <div class="fs-sm text-grey">2020/02/11</div>   
      </div>
      <div v-html="model.body" class="px-3 body fs-lg border-bottom"></div>
      <div class="d-flex ai-center px-3 py-2">
          <i class="iconfont icon-menu1"></i>
          <div class="text-blue ml-1"><strong>相关资讯</strong></div>
      </div>
      <div class="pt-2 fs-lg px-3">
          <router-link class="py-2" 
          tag="div" 
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id">
            {{ item.title }}
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        id: {required: true}
    },
    data() {
        return {
            model: null
        }
    },
    watch:{
        id() {
            this.fetch();
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        async fetch() {
            const res = await this.$http.get(`articles/${this.id}`)
            this.model = res.data;
        }
    }
}
</script>

<style lang="scss">
.page-article {
    .body {
        img {
            width: 100%;
            height: auto;
        }
        iframe {
            width: 100%;
            height: auto;
        }
    }
}
</style>