<template>
    <div class="component1">
        <h2>Component1</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                <input type="checkbox" :id="item.id" :value="item.val" v-model="item.val">
                <label :for="item.id">{{item.text}}</label>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
  name: 'component1',
  components: {

  },
  data: () => {
    return {

    }
  },
  computed: {
    items() {
        return []
    }
  },
  created() {
       let itemsNotFiltered = [
          {id:0, text: 'item1', val: false},
          {id:1, text: 'item1', val: false},
          {id:2, text: 'item1', val: false},
      ]
      this.$store.commit('items/setItems', itemsNotFiltered)
  }
}

</script>

<style>
    .component1 {
        margin: 1ex;
        border: black;
        border-width: 0.1ex;
        border-style: solid;       
    }

    ul {
        text-align: left;
    }

</style>
