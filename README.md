# NewsGuard AI - Fake News Detection Firefox Extension

## Overview
NewsGuard AI is a Firefox extension that helps users detect fake news using a fine-tuned BERT model. This extension allows users to analyze the credibility of news articles directly from their browser.

## Features
- Detects fake news using an AI model hosted on Hugging Face
- Easy-to-use interface with a dark theme
- One-click detection using the "Detect" button
- Displays confidence scores for predictions

## Installation
### Manual Installation (For Testing)
1. **Download or Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/newsguard-ai.git
   cd newsguard-ai
   ```
2. **Open Firefox and Enter Developer Mode**
   - Open Firefox.
   - Go to `about:debugging` in the address bar.
   - Click on "This Firefox" from the left panel.
   - Click "Load Temporary Add-on" and select the `manifest.json` file inside the extension folder.

### Install from Mozilla Add-ons Store (After Submission)
- Visit [Mozilla Add-ons Store](https://addons.mozilla.org/) and search for **NewsGuard AI**.
- Click "Add to Firefox" and confirm installation.

## Usage
1. Navigate to any news article.
2. Click the **NewsGuard AI** icon in the toolbar.
3. A popup will appear with a text box.
4. Enter the article content (or let it auto-fetch if supported).
5. Click the **Detect** button.
6. The extension will analyze the text and display:
   - **Prediction:** Fake or Real

## API Integration
The extension uses an API hosted on Render to classify news articles. The API endpoint is:
```sh
https://newsguard-backend.onrender.com/predict
```
Requests are sent in the following format:
```json
{
    "text": "Your news article text here"
}
```
The response format:
```json
{
    "prediction": "Fake",
    "confidence": {
        "Fake": 85.6,
        "Real": 14.4
    }
}
```
## Future Enhancements
- Auto-fetch news articles from web pages
- Improve UI/UX for a better experience
- Add support for other browsers (Chrome, Edge)

## Contributors
- **Nalla Rahul** - Developer & Maintainer

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

---

If you have any issues or feature requests, feel free to open an issue on [GitHub](https://github.com/nallarahul/newsguard-ai/issues). 🚀
