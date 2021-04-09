<template>
    <div class="component2">
        <h2>Component2</h2>
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
  name: 'component2',
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
  }
}

</script>

<style>
    .component2 {
        margin: 1ex;
        border: black;
        border-width: 0.1ex;
        border-style: solid;
    }

    ul {
        text-align: left;
    }

</style>
