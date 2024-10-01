import { createStore } from 'vuex';

const store = createStore({
  state: {
    tours: [
      { id: 1, name: 'Taipei 101 Tour', category: 'Sightseeing', date: '2024-09-15', image: 'path/to/taipei101.jpg' },
      { id: 2, name: 'Taroko Gorge Adventure', category: 'Adventure', date: '2024-09-22', image: 'path/to/taroko.jpg' },
      // 更多行程数据
    ],
    categories: ['Sightseeing', 'Adventure', 'Culture']
  },
  mutations: {
    // 可能需要的 mutations
  },
  actions: {
    // 可能需要的 actions
  }
});




export default store;
