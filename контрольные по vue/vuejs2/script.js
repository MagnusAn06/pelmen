const { createApp, ref, computed } = Vue

        createApp({
        setup() {
        const tasks = ref([])
        const newTaskText = ref('')
        const newTaskCategory = ref('')
        const categories = ref(['Работа', 'Личное', 'Покупки'])

        const addTask = () => {
            if(newTaskText.value.trim() === '' || newTaskCategory.value === '') return
            tasks.value.push({ text: newTaskText.value, category: newTaskCategory.value })
             newTaskText.value = ''
             newTaskCategory.value = ''
        }

        const removeTask = (category, index) => {
            tasks.value = tasks.value.filter(task => task.category !== category || tasks.value.indexOf(task) !== index)
        }

        const groupedTasks = computed(() => {
            const groups = {};
            tasks.value.forEach(task => {
            if (!groups[task.category]) {
                groups[task.category] = [];
            }
            groups[task.category].push(task);
            });
            return groups;
        });

        const taskCounts = computed(() => {
            const counts = {};
            tasks.value.forEach(task => {
                counts[task.category] = (counts[task.category] || 0) + 1
            });
            return counts
        })

          return {
            tasks,
            newTaskText,
            newTaskCategory,
            categories,
            addTask,
            removeTask,
            groupedTasks,
            taskCounts,
            }
          }
        }).mount('#app')