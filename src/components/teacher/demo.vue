<template>
  <div class="demo">
     <content-header title="单选题"></content-header>
     <div class="content-container">
      <div class="content">
        
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/teacher/components/contentHeader.vue"
export default {
  name: 'demo',

  components: { ContentHeader },

  data() {
    return {
      
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.demo {
  .content-container {
    box-sizing: border-box;
    padding: 10px;
    .content {
      padding: 10px;
      background-color: #fff;
    }
  }
}
</style>