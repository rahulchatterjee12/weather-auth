import initTranslations from "@/app/i18n";
import SignIn from "@/components/SignIn";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["sign_in", "common"];

const SignInPage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <SignIn />
    </TranslationsProvider>
  );
};

export default SignInPage;
