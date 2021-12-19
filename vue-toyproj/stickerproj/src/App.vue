<template>
  <div class="home">
    <p>여기가 홈페이지입니다.</p>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Home',
  methods: {
    getStiker : function () {
      axios.get('https://messenger.stipop.io/v1/package?userId=xxx&pageNumber=1&country=kr', {
          headers: { apikey: '8e2b8a6e14a05c53f8b184edede34e8d' },
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.warn(error);  
      })
    }
  },
  created : function () {
    this.getStiker()
  }
}
</script>