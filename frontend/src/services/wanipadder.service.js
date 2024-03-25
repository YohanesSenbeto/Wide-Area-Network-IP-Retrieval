// wanIpAdderService.js
<<<<<<< HEAD
const api_url = `http://localhost 8000`
=======

const api_url = process.env.REACT_APP_API_URL;
//
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf
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
