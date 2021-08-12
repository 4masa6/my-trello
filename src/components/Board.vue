<template>
    <div>
        <header>
            my Trello
        </header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <div class="list-index">
                <list
                    v-for="(item, index) in lists"
                    :key="item.id"
                    :title="item.title"
                    :listIndex="index"
                />
                <list-add />
            </div>
        </main>
    </div>
</template>

<script>
import ListAdd from './ListAdd.vue' // ListAddコンポーネントを読み込み
import List from './List'
import { mapState } from 'vuex'

export default {
    components: {
        ListAdd, // コンポーネントに登録する
        List,
    },
    computed: {
        ...mapState([  // mapStateヘルパー：stateで定義されたデータの名前と同じ名前の文字列で、stateを呼び出すことができる。
            'lists' // ここではlists
        ]),
    },
}
</script>
