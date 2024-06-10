// wanIpAdderService.js
const api_url = `http://localhost:8000`;

const addWanIp = async (formData) => {
    console.log(formData);
    try {
        const response = await fetch(`${api_url}/api/addWanIp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Fix typo here
            },
            body: JSON.stringify(formData), // Remove unnecessary object wrapping
        });

        if (response.ok) {
            // Simplify status check
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
