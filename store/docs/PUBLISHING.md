# Publishing to Relay Store

This guide details the submission and review process for the Relay Store.

## Submission Checklist

Before running `relay publish`, ensure your app meets the following criteria:

- [ ] **Functional Stability**: All features work as described. No immediate crashes or broken buttons.
- [ ] **Correct Metadata**: `product.json` has a valid `bundleId` following the `com.username.app` pattern.
- [ ] **Premium Assets**: 
    - Icon is high-resolution (512x512px).
    - Description is helpful and well-formatted.
    - Screenshots represent the actual app experience.
- [ ] **Permissions**: Only requested the minimum permissions needed for the app to function.
- [ ] **GitHub Auth**: Logged in via `gh auth login`. Your username must match your `bundleId` namespace.
- [ ] **App Size**: Bundle is ideally under **100MB**. 
    > [!TIP]
    > **Relay Efficiency**: Remember that Relay apps are incredibly lean. An 800MB legacy app often compresses to ~2MB on our platform. Don't be afraid to keep it light!

## The Review Process

Relay uses an automated GitOps workflow combined with a human review phase:

1.  **Automated PR**: Running `relay publish` creates a Pull Request on the official [store](https://github.com/dotrly/store) repository.
2.  **Static Analysis**: Our bot performs safety checks and verifies the bundle signature.
3.  **Human Review**: A maintainer will review the app for quality and design standards. 
4.  **Feedback**: If issues are found, we will provide feedback directly on your PR.
5.  **Approval**: Once approved, your app will be merged and appear in the Store globally within minutes.

### Common Reasons for Decline
- Apps that are essentially "Hello World" or low-utility clones.
- Broken UI or non-functional core features.
- Misleading descriptions or doctored screenshots.
- Malicious behavior or excessive permission requests.

## Re-publishing Updates
To update an existing app, simply push your changes and run `relay publish` again. Our system will detect the existing `bundleId` and open an update PR.

---
*The Relay Store is built on trust and quality. Thank you for contributing to the ecosystem!*
