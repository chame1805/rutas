import { Helmet } from "react-helmet-async";
import Form from "../components/organisms/Form";

function Login() {
    return (
      <>
      <Helmet>
        <title>app ventus - login</title>
      </Helmet>
        <Form />
      </>
      );
}

export default Login;