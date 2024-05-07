import Header from "./Header/Header";

import { Navigate, Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";
import { Loader } from "./Loader.js";

const MainPage = lazy(() => import("./MainPage/MainPage"));
const PsychologistPage = lazy(() =>
  import("./PsychologistsList/PsychologistsList")
);
const Favorits = lazy(() => import("./FavoriteList/FavoriteList.js"));
const LogIn = lazy(() => import("./LogIn/LogIn.js"));
const Registration = lazy(() => import("./Registration/Registration.js"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/psychologists" element={<PsychologistPage />}></Route>
            <Route path="/favorite" element={<Favorits />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
// function App() {
//   return (
//     <AppContainer>
//       {/* {<Header />}
//       {<MainPage />} */}
//       {/* {<LogIn />} */}
//       {/* {<Registration />} */}
//       {/* {<Card />} */}
//       {/* {<Appointment />} */}
//       {<PsychologistsList />}
//     </AppContainer>
//   );
// }

export default App;
