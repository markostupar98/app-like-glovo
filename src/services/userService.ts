import { supabase } from "../lib/supabase";

export const fetchUserProfile = async (userId) => {
  if (!userId) {
    console.error("fetchUserProfile was called without a userId");
    return { profile: null, error: "No user ID provided" };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, latitude, longitude, address")
    .eq("id", userId)
    .single();

  if (profileError) {
    console.error("Error fetching user profile:", profileError.message);
    return { profile: null, error: profileError };
  }

  return { profile, error: null };
};
