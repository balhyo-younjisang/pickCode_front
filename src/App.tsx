import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

import SEOMetaTag from "./components/metatag.component";

const HomePage = loadable(() => import("./pages/home.page"));

const App = () => {
  return <>
    <SEOMetaTag title="PickCode | 개발자 파트너 찾기" description="코드를 통해 당신의 파트너를 찾아보세요" keywords="개발자, 개발, 코딩, 코드, 프로젝트, 토이프로젝트, 팀빌딩" />
    <Routes>
      <Route path="/" element={<HomePage />} loader={HomePage.load} />
    </Routes >
  </>
}

export default App;