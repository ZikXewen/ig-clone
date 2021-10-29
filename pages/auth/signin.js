import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
export default ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p>Fake Instagram made for educational purposes</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
