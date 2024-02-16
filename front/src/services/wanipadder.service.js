const api_url = `https://wan-ip-info-ldlf.onrender.com`;

const addWanIp = async (wanIp) => {
  console.log(wanIp);
  try {
    const response = await fetch(`${api_url}/api/addWanIp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wanIp }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.error(
        `Error adding WAN IP. Status: ${response.status}, ${response.statusText}`
      );
      throw new Error(`Error adding WAN IP: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error adding WAN IP:", error.message);
    throw error;
  }
};

export default {
  addWanIp,
};
