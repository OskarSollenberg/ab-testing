import Header from "./components/Header";
import Control from "./components/Control";
import VariantB from "./components/VariantB";
import CTA from "./components/CTA";

import { useEffect, useState } from "react";

export default function App() {
  const [variant, setVariant] = useState("");

  useEffect(() => {
    const randVariant = Math.round(Math.random());

    if (randVariant === 0) {
      setVariant("control");
    } else {
      setVariant("variantB");
    }
  }, []);

  return (
    <>
      <Header />
      <main className="w-screen flex flex-col justify-center items-center">
        {variant === "control" ? <Control /> : <VariantB />}
        <CTA variant={variant} />
      </main>
    </>
  );
}
