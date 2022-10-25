<script lang="ts" setup>
import { ref } from 'vue';

const checkbox1 = ref(true);
const checkbox2 = ref(false);
</script>
<template>
  <Html class="dark">
  <el-button>Default</el-button>
  <el-icon>
    <User style="font-size: 24px" />
  </el-icon>
  <el-row>
    <el-button type="primary">
      Primary Btn
    </el-button>
  </el-row>
  <el-row>
    <el-checkbox v-model="checkbox1" label="Option1"></el-checkbox>
    <el-checkbox v-model="checkbox2" label="Option2"></el-checkbox>
  </el-row>

  </Html>
</template>
<style scoped>

</style>