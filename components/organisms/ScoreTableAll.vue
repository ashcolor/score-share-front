<script setup lang="ts">
import { Icon } from '@iconify/vue';
import axios from 'axios'
// type Scores = {
//     data: {
//         id: number,
//         is_want: boolean,
//         is_own: boolean
//     }[],
// }

const scores = ref(null);

const searchSelected = ref('title');
const search = ref('Q');
const searchOptions: Object[] = [
    { value: 'title', text: '曲名' },
    { value: 'artist', text: 'アーティスト' },
    { value: 'genre', text: 'ジャンル' },
    { value: 'score_created_at', text: '作成日' },
];
const page = ref(1);
const isColor = ref(true);

onMounted(() => {
    getScores()
});

const getScores = async () => {
    scores.value = await axios.get('/v1/scores', {
        baseURL: 'http://score-share.net/api',
        params: {
            searchSelected: searchSelected.value,
            search: search.value,
            page: page.value,
        }
    });
};


const want = async (id: number) => {
    const index = scores.value.findIndex(score => score.id === id)
    scores.value.data.data[index].is_want = !scores.value.data.data[index].is_want
    const response = await axios.post(`/api/v1/want`, {
        'score_id': id
    })
};

const pageChange = (page: number) => {
    getScores()
};

const fields: Object[] = [
    { key: 'title', label: '曲名', class: 'align-middle' },
    { key: 'artist', label: 'アーティスト', class: 'align-middle' },
    { key: 'genre', label: 'ジャンル', class: 'align-middle' },
    { key: 'score_created_user', label: '作成者', class: 'align-middle' },
    { key: 'score_date', label: '作成日/更新日' },
    { key: 'url', label: '試聴', class: 'text-center align-middle' },
    { key: 'is_want', label: '欲しい！', class: 'text-center align-middle' },
    { key: 'is_own', label: '所持', class: 'text-center align-middle' },
];
// const rowClass = (item) => {
//     if (item.is_own === true) {
//         return 'bg-own'
//     } else if (item.is_want === true) {
//         return 'bg-want'
//     } else {
//         return
//     }
// }
</script>

<template>
    <div class="container pt-8">
        <h2 class="text-2xl border-b-4 border-primary">楽譜検索</h2>
        <div class="container flex pt-6 bg-base-100 text-center">
            <select class="select select-bordered w-full max-w-xs" v-model="searchSelected">
                <option
                    v-for="searchOption in searchOptions"
                    :value="searchOption.value"
                >{{ searchOption.text }}</option>
            </select>
            <input
                type="text"
                placeholder="Type here"
                class="input input-bordered grow"
                v-if="['title', 'artist', 'genre'].includes(searchSelected)"
                v-model="search"
            />
            <div v-if="['score_created_at', 'score_updated_at'].includes(searchSelected)">
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    v-model="search"
                />
            </div>
            <div class="inline-block">
                <button class="btn btn-primary" @click="getScores()">検索</button>
            </div>
            <div class="form-control flex-row flex-initial w-48">
                <label class="label cursor-pointer mx-auto">
                    <span class="label-text">色表示</span>
                    <input
                        type="checkbox"
                        class="toggle toggle-primary ml-2"
                        v-model="isColor"
                        checked
                    />
                </label>
            </div>
        </div>

        <div class="container overflow-x-auto w-full pt-6">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th v-for="field in fields">{{ field.label }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="score in scores?.data.data">
                        <td>{{ score.title }}</td>
                        <td>{{ score.artist }}</td>
                        <td>
                            <span class="badge badge-light">{{ score.genre }}</span>
                        </td>
                        <td>
                            <div class="avatar">
                                <div class="w-12">
                                    <img
                                        :src="score.score_created_user.twitter_profile_image_url_https"
                                    />
                                </div>
                                <small>
                                    {{ score.score_created_user.twitter_screen_name }}
                                    <span
                                        class="text-muted"
                                    >@{{ score.score_created_user.twitter_name }}</span>
                                </small>
                            </div>
                        </td>
                        <td>
                            <p class="text-muted m-0">
                                <small>作成:{{ score.score_created_at }}</small>
                            </p>
                            <p class="text-muted m-0">
                                <small>更新:{{ score.score_created_at }}</small>
                            </p>
                        </td>
                        <td>
                            <a v-if="score.url" :href="score.url" target="_blank" class="pa-2">
                                <Icon icon="fa-solid:headphones-alt" />
                            </a>
                        </td>
                        <td>
                            <a class="pa-2" @click="want(score.id)">
                                <Icon
                                    icon="ant-design:heart-filled"
                                    v-if="score.is_want"
                                    color="red"
                                />
                                <Icon icon="ant-design:heart" v-else color="red" />
                            </a>
                        </td>
                        <td>
                            <a class="pa-2">
                                <Icon
                                    icon="bi:bookmark-check-fill"
                                    v-if="score.is_own"
                                    color="green"
                                />
                                <Icon icon="bi:bookmark-check" v-else color="green" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="btn-group">
            <button class="btn">1</button>
            <button class="btn btn-active">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
        </div>
        <!-- <input
            v-model="scores.current_page"
            :total-rows="scores.total"
            :per-page="scores.per_page"
            align="center"
            @change="pageChange"
            class="mt-3"
        />-->
    </div>
</template>
