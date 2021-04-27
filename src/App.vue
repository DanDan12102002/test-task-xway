<template>
  <div id="app">
    <div class="user-table">
      <div class="container">
        <div :class="`preloader ${_loaded ? 'hide' : ''}`" id="preloader">
          <div class="preloader-container">
            <div class="preloader-circle"></div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Информация</th>
              <th @click="sortBy('followers')">
                <span>Подписчиков</span>
                <Arrow ref="followers" class="ml-2" />
              </th>
              <th @click="sortBy('er')">
                <span>Рейтинг увлеченности</span>
                <Arrow ref="er" class="ml-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            <User
              v-for="(influencer, i) in influencers"
              :key="i"
              :influencer="influencer"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import FieldService from './FieldService';
import Arrow from './components/Arrow'
import User from './components/User'
import {mapState} from 'vuex'

export default {
  name: 'App',
  async created() {
    const fieldService = new FieldService();
    const influencers = await fieldService.getInfluencers();

    this.$store.commit('setInfluencers', influencers)
  },
  components: {
    Arrow,
    User
  },
  methods: {
    sortBy(column) {
      this.$refs[column].sortColumn(column)
    }
  },
  computed: mapState(['influencers', '_loaded'])
}
</script>