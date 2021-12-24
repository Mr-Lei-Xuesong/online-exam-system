<template>
  <div class="multiple-choice-container">
    <content-header title="单选题"></content-header>
  </div>
</template>

<script>
import ContentHeader from '../components/contentHeader.vue'
export default {
  name: 'OnlineExamSystemMultiplechoice',

  components: { ContentHeader },

  data() {
    return {
      
    };
  },

  mounted() {
    console.log(this.$route)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.multiple-choice-container {



}
</style>