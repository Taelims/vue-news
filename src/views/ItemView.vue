<template>
  <div>
    <section>
      <user-profile :info="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{itemInfo.user}}
        </router-link>
        <div slot="time">
          {{'Posted' + itemInfo.time_ago}}
        </div>
      </user-profile>
    </section>
    <section>
      <h2> {{itemInfo.title}}</h2>
    </section>

    <section>
      <div v-html="itemInfo.content">
      </div>
    </section>

  </div>
</template>

<script>

import UserProfile from '@/components/UserProfile.vue'
export default {
  components: { UserProfile },

  computed : {
    itemInfo() {
      return this.$store.state.item
    }
  },

  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH__ITEM', itemId )
  }
}
</script>

<style scoped>


</style>