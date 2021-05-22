import { QueryClientProvider, QueryClient } from "react-query";
import { Grommet, grommet as theme } from "grommet";
import Content from "./Content";
import "./App.css";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Grommet background="#1D1F20" full={true} theme={theme}>
      <Content />
    </Grommet>
  </QueryClientProvider>
);

export default App;
