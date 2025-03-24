import supabase from '../utils/supabaseClient';

// Função para logar o usuário
export const loginUser = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw error;
  }
  return user;
};

// Função para criar um novo usuário
export const registerUser = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
};

// Função de logout
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};
