import {QueryClientProvider, QueryClient} from "react-query";
import Content from "./Content";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}

export default App;
