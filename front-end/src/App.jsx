import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { TakePicture } from "./routes/TakePicture";
import { ResultScreen } from "./routes/ResultScreen";
import { CouponScreen } from "./routes/CouponScreen";

export function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="take-picture" element={<TakePicture />} />
        <Route path="result" element={<ResultScreen />} />
        <Route path="coupon" element={<CouponScreen />} />
      </Routes>
      <GlobalStyles />
    </>
  )
}

