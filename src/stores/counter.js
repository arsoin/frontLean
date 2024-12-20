import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// pinia的示例代码这只是一个例子
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
