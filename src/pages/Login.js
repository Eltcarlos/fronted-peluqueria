import Layout from "../Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src="/images/logo.png" alt="logo" className="w-full h-12 object-contain" />
          <div className="w-full">
            <input label="Email" placeholder="netflix@gmail.com" type="email" name="email" />
          </div>
          <div className="w-full">
            <input label="Password" placeholder="********" type="password" name="password" />
          </div>
          <button
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          ></button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
