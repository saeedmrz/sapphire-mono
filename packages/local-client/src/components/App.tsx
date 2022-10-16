import { Provider } from "react-redux";
import { store } from "store";
import CellList from "components/CellList/CellList";
import { Global } from "@emotion/react";
import { bodyStyle, Main } from "styles/styles";
import Header from "./Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Global styles={bodyStyle} />
      <Main>
        <Header />
        <Provider store={store}>
          <div>
            <CellList />
          </div>
        </Provider>
      </Main>
    </>
  );
};

export default App;
