<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a> -->
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >{{ company }}</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItems[menuItem]"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
            <li class="h-full ml-9 first:ml-0" data-test="main-nav-list-item">
              <router-link
                to="/jobs/results"
                class="flex items-center h-full py-2.5"
                >Jobs</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center f-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Dev Careers",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Dev Corp",
        "Now we hire",
        "Students",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
