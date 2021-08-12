<template>
    <div id="app">
        <!-- Boardコンポーネントを呼び出し -->
        <board />
    </div>
</template>

<script>
// インポート文追加
import Board from './components/Board.vue'

export default {
    name: 'App',
    components: {
        // コンポーネントに登録する
        Board
    }
}
</script>
