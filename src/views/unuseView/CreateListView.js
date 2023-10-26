
import ListView from './ListView.vue'
import bus from '@/utils/bus'
export default function createListView(name){
  return{
    name,

    created () {
      bus.$emit('start:spinner')

        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(()=>{
            console.log('fetched')
            bus.$emit('end:spinner')
          })
          .catch((error)=>{
            console.log(error)
          })

    },

    render(createElement) {
      return createElement(ListView)
    }
  }
}