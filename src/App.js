import {QueryClientProvider, QueryClient} from "react-query";
import Content from "./Content";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Content />
  </QueryClientProvider>
)

export default App;
