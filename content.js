console.log("✅ Content script loaded!");

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("📩 Message received in content.js:", request);

    if (request.action === "extractText") {
        let extractedText = document.body.innerText.substring(0, 5000); // Extract page text
        console.log("📄 Extracted Text:", extractedText); // Debugging log

        if (!extractedText || extractedText.trim() === "") {
            console.error("🚨 No text extracted from page!");
            sendResponse({ error: "No text found." });
            return true;
        }

        sendResponse({ text: extractedText });
        console.log("📤 Response sent from content.js:", { text: extractedText });
        return true; // Ensure async response
    }
});
