<script setup>
// import LoginModal from './LoginModal.vue'
// import axios from "axios";

// const user = ref(null)

// onMounted(() => {
//     this.axios.get('/api/v1/user/self')
//         .then((response) => {
//             this.user = response.data
//         })
//         .catch((e) => {
//             alert(e);
//         });
// });

// const onClickLogout() => {
//     this.axios.get('/api/v1/logout')
//         .then((response) => {
//             this.user = null
//         })
//         .catch((e) => {
//             alert(e);
//         });
// }
</script>

<template>
    <div class="navbar bg-primary text-primary-content">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">楽譜交換支援システム</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <a>楽譜検索</a>
                </li>
                <li>
                    <a>マイ楽譜</a>
                </li>
            </ul>

            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
</style>
