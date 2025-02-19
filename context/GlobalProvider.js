// import React, { createContext, useContext, useEffect, useState } from "react";

// const getCurrentUser = async () => {
//   const token = localStorage.getItem("token"); // Get the token from localStorage or cookies

//   if (!token) {
//     return null; 
//   }

//   try {
//     const response = await fetch("http://localhost:5002/current-user", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       return data.user;
//     } else {
//       return null; 
//     }
//   } catch (error) {
//     console.error("Error fetching current user:", error);
//     return null;
//   }
// };

// const GlobalContext = createContext();

// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getCurrentUser()
//       .then((res) => {
//         if (res) {
//           setIsLogged(true);
//           setUser(res);
//         } else {
//           setIsLogged(false);
//           setUser(null);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <GlobalContext.Provider
//       value={{
//         isLogged,
//         setIsLogged,
//         user,
//         setUser,
//         loading,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;
import React, { createContext, useContext, useEffect, useState } from "react";

const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const response = await fetch("http://localhost:5002/current-user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // New function to handle login
  const handleLogin = (userData, token) => {
    localStorage.setItem("token", token);
    setIsLogged(true);
    setUser(userData);
  };

  // New function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    setUser(null);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setIsLogged(true);
          setUser(userData);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        handleLogin, // Expose login handler
        handleLogout, // Expose logout handler
        setUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;