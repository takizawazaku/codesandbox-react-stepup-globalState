import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }} />
      {children}
      <Footer />
    </>
  );
};
