# Relay Store Submission Assets

This directory is strictly for the **marketing and metadata assets** used by the Relay Store. These files are used to generate your app's store page and do not affect your app's runtime logic.


> For application-level dependencies (images, data, modules), use the `assets/` directory in your project root.

## Directory Structure

- `icon.png`: Your app's icon (at least 512x512px).
- `description.md`: A rich Markdown description of your app.
- `CHANGELOG.md`: A record of version updates and "What's New" content.
- `screenshots/`: A collection of PNG screenshots (iPhone and/or iPad).

## Best Practices for Offline Support

Relay prioritizes apps that offer a seamless, reliable experience regardless of internet connectivity.

- **Minimize External Dependencies**: Avoid relying on packages or assets loaded via external URLs at runtime.
- **Bundle Assets Locally**: Include all required icons, themes, and static resources within your project's `assets/` directory (not in `store/`).
- **Offline Reliability**: Apps that are fully functional offline are preferred and highlighted in the Relay Store.
- **Document Requirements**: If your app requires live data or external APIs to function, clearly state these dependencies in your `description.md`.

## How to Publish

When you are ready to submit your app to the Relay Store:

1.  **Prepare your assets**: Ensure your icon, description, and screenshots are updated in this folder.
2.  **Optimize for Offline**: Verify that your application doesn't have broken external URL dependencies and works reliably offline where possible.
3.  **Ensure Quality**: Double-check for bugs and broken links. Submissions with significant technical issues or low-quality assets will be declined to maintain the store's premium standard.

3.  **Define your manifest**: Ensure your `product.json` in the root directory has the correct `bundleId`.
4.  **Run the command**:
    ```bash
    relay publish
    ```

For a detailed step-by-step guide on the review process and requirements, see [PUBLISHING.md](PUBLISHING.md).

---
*Built with passion using the Relay Framework.*
