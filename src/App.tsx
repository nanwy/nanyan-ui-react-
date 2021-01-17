import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
const App: React.FC = () => {
  return (
    <div className="App">
      <Button className="ciston">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        Baidu
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        Baidu
      </Button>

      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        Baidu
      </Button>
    </div>
  );
};

export default App;
