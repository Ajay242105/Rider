import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../../context/GlobalProvider";
import Loader from "../../components/Loader";



const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged){
    console.log(isLogged);
    return <Redirect href='/home' />
  } 


  return (
    <>
      <Stack>
        <Stack.Screen className="border-1 border-r-amber-200"
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <Loader isLoading={loading} />


      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
