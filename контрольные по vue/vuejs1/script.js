const { createApp, ref, computed } = Vue

        createApp({
            setup() {
                const year = ref(null)

                const isLeapYear = computed(() => {
                  if(year.value === null || isNaN(year.value)){
                     return null;
                   }
                  const yearNumber = Number(year.value);
                
                 return (yearNumber % 4 === 0 && yearNumber % 100 !== 0) || yearNumber % 400 === 0;
                })

                return{
                  year,
                  isLeapYear
                }
            }
        }).mount('#app')