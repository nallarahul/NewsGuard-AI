document.getElementById("detect").addEventListener("click", async () => {
    let newsText = document.getElementById("newsText").value.trim();

    if (!newsText) {
        document.getElementById("result").innerText = "Please paste some text.";
        return;
    }

    try {
        let apiResponse = await fetch("https://newsguard-backend.onrender.com/predict", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: newsText }),
        });

        let result = await apiResponse.json();
        document.getElementById("result").innerText = `Prediction: ${result["prediction"]}`; 
    } catch (error) {
        console.error("Detection Error:", error);
        document.getElementById("result").innerText = "Error in detection.";
    }
});
