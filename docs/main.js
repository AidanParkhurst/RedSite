Vue.createApp({
    data() {
      return {
        current: 0,
        tabs: ['Student', 'Programmer', 'Person'],
        resetScroll: () => {document.getElementsByClassName("info")[0].scrollTop = 0;}
      }
    },
}).mount("#app")