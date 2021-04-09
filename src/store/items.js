export default {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
        setItems(state, items) {
            state.items = []
            items.forEach(element => {
                state.items.push(element)
            });
        },
        updateItem(state, item) {
            state.items = state.items.map( i => {
                if (i.is === item.id)
                    return { ...i, ... item }
                else
                    return i
            })
        }
    },
    getters: {
        getItemById(state, id) {
            return state.items.find(i => i.id === id)
        },
        // getItems(state) {
        //     return state.items
        // }
    }
}
