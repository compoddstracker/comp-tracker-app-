# Comp Tracker app

The Comp Tracker phone app for Android and iPhone. It shows compoddstracker.co.uk and adds **Quick fill**:
players save their details once (kept only on their phone) and the app fills them into comp sites' checkouts.
The player always answers the question and presses pay themselves. The app never touches card details.

- Built with Capacitor 8 and `@capgo/inappbrowser` (opens comp sites inside the app).
- The Quick fill code lives on the website (`filler.js`, `qe-app.js`, loaded by `appbox.js` only inside the app).
- Builds run free on GitHub Actions: `Android build` (test APK + store bundle) and `iPhone build check`.
- Never commit signing keys or store passwords to this public repo.

## iPhone TestFlight
Push to the `testflight` branch (or run "iPhone TestFlight upload" from the Actions tab) to build a signed iPhone app
on GitHub's free Mac and send it to TestFlight. It uses 4 repository secrets: `ASC_KEY_ID`, `ASC_ISSUER_ID`,
`ASC_KEY_P8` (App Store Connect API key, Admin) and `APPLE_TEAM_ID`.
