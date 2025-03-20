import * as SecureStore from 'expo-secure-store';

const USER_KEY = 'user_data';

export const authService = {
  async login(email, password) {
    try {
      // Obtener usuarios almacenados
      const users = await this.getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Guardar sesión actual
        await SecureStore.setItemAsync('currentUser', JSON.stringify(user));
        return { success: true, user };
      }
      return { success: false, message: 'Credenciales inválidas' };
    } catch (error) {
      return { success: false, message: 'Error al iniciar sesión' };
    }
  },

  async register(userData) {
    try {
      const users = await this.getUsers();
      
      // Verificar si el email ya existe
      if (users.some(user => user.email === userData.email)) {
        return { success: false, message: 'El email ya está registrado' };
      }

      // Agregar nuevo usuario
      users.push(userData);
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(users));
      
      return { success: true, message: 'Usuario registrado exitosamente' };
    } catch (error) {
      return { success: false, message: 'Error al registrar usuario' };
    }
  },

  async logout() {
    try {
      await SecureStore.deleteItemAsync('currentUser');
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Error al cerrar sesión' };
    }
  },

  async getCurrentUser() {
    try {
      const userString = await SecureStore.getItemAsync('currentUser');
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      return null;
    }
  },

  async getUsers() {
    try {
      const usersString = await SecureStore.getItemAsync(USER_KEY);
      return usersString ? JSON.parse(usersString) : [];
    } catch (error) {
      return [];
    }
  }
};
