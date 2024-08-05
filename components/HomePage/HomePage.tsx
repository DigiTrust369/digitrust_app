import Banner from "./Banner";
import Layout from "./HomeLayout";
import Vaults from "./Vaults";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Vaults />
      </Layout>
    </div>
  );
}
