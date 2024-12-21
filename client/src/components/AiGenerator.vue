<script>
import axios from "axios";

export default {
  data() {
    return {
      prompt: "",
      response: null,
    };
  },
  methods: {
    async generateContent() {
      try {
        const res = await axios.post("http://localhost:5001/api/generate", {
          prompt: this.prompt,
        });
        this.response = res.data.response;
      } catch (error) {
        console.error("Error generating content:", error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>AI Story For Children Generator</h1>
    <textarea
      cols="80"
      rows="5"
      v-model="prompt"
      placeholder="Enter the theme here..."
    ></textarea>
    <div>
      <button @click="generateContent">Generate</button>
    </div>
    <div v-if="response">
      <h2>Generated Content:</h2>
      <span class="result" v-html="response"></span>
    </div>
  </div>
</template>

<style scoped>
.result {
  padding: 1rem;
}
</style>
