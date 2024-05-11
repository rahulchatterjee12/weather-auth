import initTranslations from "@/app/i18n";
import SignUp from "@/components/SignUp";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["sign_up", "common"];

const SignUpPage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <SignUp />
    </TranslationsProvider>
  );
};

export default SignUpPage;
