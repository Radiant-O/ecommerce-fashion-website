<!-- eslint-disable prettier/prettier -->
<template>
  <header class="header">
    <div class="logo">
        LAZ STORE
    </div>

    <nav class="navbar">
        <router-link
        class="link"
        v-for="route in routes"
        :key="route.id"
        :to="route.to"
        >
        {{route.name}}
        </router-link>
    </nav>
    <div class="xra">
      
        <div class="search">
           
    
        <div class="flex justify-start items-center py-3 relative">
          <input
            class="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
            type="text"
            placeholder="Search for Product"
          />
          <svg
            class="absolute right-3 z-10 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
              stroke="#4B5563"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L15 15"
              stroke="#4B5563"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        </div>
        

        <div class="auth">
            <p>LOGIN</p>
        </div>

        <div class="cart">

        </div>
    </div>
  </header>
</template>

<script setup>
  const routes = [
    {
      id: 1,
      name: "HOME",
      to: "/"
    },
    {
      id: 2,
      name: "STORE",
      to: "/store"
    },
    {
      id: 3,
      name: "CONTACTS",
      to: "/contacts"
    }
  ]
</script>

<style></style>
