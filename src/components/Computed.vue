<template>
  <div>
    <button @click="gender='all'">全部</button>
    <button @click="gender='male'">男</button>
    <button @click="gender='female'">女</button>
    <ul>
      <li v-for="(u,i) in displayUser" :key="i">{{u.name}} {{u.age}} {{u.gender}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [
        { name: "小白", gender: "女", age: 18 },
        { name: "小红", gender: "女", age: 20 },
        { name: "小飞", gender: "男", age: 22 }
      ],
      gender: "all"
    };
  },
  computed: {
    displayUser() {
      if (this.gender === "all") return this.user;
      return this.gender === "male"
        ? this.user.filter(u => u.gender === "男")
        : this.user.filter(u => u.gender === "女");
    }
  }
};
</script>
