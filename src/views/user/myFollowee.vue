<template>
  <div class="container">
    <el-header class="page-header">
      我的关注
    </el-header>
    <ul v-if="followees.length">
      <li v-for="followee in followees" > <router-link :to="{ name: 'User', params: { id: followee.id } }">{{ followee.get('username') }}</router-link></li>
    </ul>
    <span v-else>你没有关注任何人</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "myFollowee",
    data(){
      return {
        followees: []
      }
    },
    computed: mapState(['user']),
    created(){
      this.getFollower()
    },
    methods: {
      getFollower(){
        const q = this.user.followeeQuery();
        q.include('followee');
        q.find().then((followees)=>{
          this.followees = followees;
          this.$Progress.finish();
        }).catch(err=>console.log(err))
      }
    }
  }
</script>

<style scoped lang="scss">

</style>