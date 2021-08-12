<template>
    <div>
        <header>
            my Trello
        </header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <!-- ListAddコンポーネントを呼び出し -->
            <list-add />
        </main>
    </div>
</template>

<script>
import ListAdd from './ListAdd.vue' // ListAddコンポーネントを読み込み

export default {
    components: {
        ListAdd // コンポーネントに登録する
    }
}
</script>
