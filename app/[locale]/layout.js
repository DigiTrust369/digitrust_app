import Provider from "@/app/provider";
import { LANGUAGES } from "@/locale";
import { getMetadata } from "@/constants/metadata";
import MainLayout from './mainLayout';
import FooterLayout from './footerLayout';
import { Toaster } from "react-hot-toast";
// import { Onborda } from "onborda";
// import { steps } from "@/lib/steps";
import CustomCard from "@/components/CustomCard";

// export async function generateStaticParams() {
//   return Object.values(LANGUAGES).map((el) => {
//     return { locale: el.locale };
//   });
// }

export async function generateMetadata(props) {
  const { params: { locale } = {} } = props;

  const meta = await getMetadata({
    locale,
  });

  return meta;
}



export default async function LocaleLayout(props) {
  const { children, params: { locale } = {} } = props;

  return <Provider locale={locale}>

    <div className="flex flex-col min-h-screen">
      <MainLayout />
      <main className="flex-grow">
        <Toaster position="top-center" />
        {children}
      </main>
      <FooterLayout />
    </div>

  </Provider>;
}
