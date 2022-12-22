import { NButton, NCard, NLayout, NTabPane, NTabs } from "naive-ui";
import { defineComponent, onMounted, Ref, ref, watch, computed } from "vue";
import { Greet } from "../wailsjs/go/main/App";
const Home = defineComponent({
  name: "Home",
  emits: [],
  setup(props, { emit, slots }) {
    return () => {
      return (
        <NLayout has-sider style="height: 100%">
          <NTabs type="line" class="m20">
            
          </NTabs>
        </NLayout>
      );
    };
  },
});
export default Home;
