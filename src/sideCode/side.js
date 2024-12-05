export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage item [${key}]:`, error);
  }
};

export const getLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value && value !== undefined ? JSON.parse(value) : "";
  } catch (error) {
    console.error(`Error getting localStorage item [${key}]:`, error);
    return "";
  }
};

export const reloadPage = () => {
  window.location.reload();
};

// export const baseUrl = "https://blogsite-drhrgqhtehcxfggj.canadacentral-01.azurewebsites.net"
export const baseUrl = "http://localhost:5000";
