

export const signUpAsUser = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
            role: 'user',  // Indicate that this is a user
          }
        }
      });
  
      if (error) throw error;
  
      Alert.alert("Success", "Check your email for verification!");
      navigation.navigate("UserSignInScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  