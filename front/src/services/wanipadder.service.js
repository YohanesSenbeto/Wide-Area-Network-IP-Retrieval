// wanIpAdderService.js

const api_url = process.env.REACT_APP_API_URL;

const addWanIp = async (wanIp) => {
  try {
    const response = await fetch(`${api_url}/api/addWanIp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wanIp }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error adding WAN IP: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error adding WAN IP:", error);
    throw error;
  }
};

export default {
  addWanIp,
};
