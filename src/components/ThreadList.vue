<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div>
        <div v-for="thread in threads" :key="thread.id" class="thread">
          <div>
            <p>
              <router-link
                :to="{ name: 'ThreadShow', params: { id: thread.id } }"
                >{{ thread.title }}</router-link
              >
            </p>
            <p class="text-faded text-small">
              By <a href="">{{ userById(thread.userId).name }}</a
              >, {{ thread.publishedAt }}.
            </p>
          </div>
          <div class="activity">
            <p class="replies-count">{{ thread.posts.length }} replies</p>
            <img
              :src="userById(thread.userId).avatar"
              alt=""
              class="avatar-medium"
            />
            <div>
              <p class="text-xsmall">
                <a href="">{{ userById(thread.userId).name }}</a>
              </p>
              <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import srcData from '../data.json';

export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      posts: srcData.posts,
      users: srcData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>

<style scoped></style>
