---
id: flutter-environment-setup
title: Flutter
sidebar_position: 3
---

## Install Flutter SDK

Go to <https://docs.flutter.dev/development/tools/sdk/releases>, download latest LTS version then install it.

## Add the flutter tool to your path

Follow this link to update your path to run flutter commands in any terminal session:
<https://docs.flutter.dev/get-started/install/macos#update-your-path>

## Run flutter doctor

Run the following command to see if there are any dependencies you need to install to complete the setup (for verbose output, add the -v flag):

```bash
flutter doctor
```

### 1. Install Android Studio

Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Then, click "Next" to install all of these components.

> If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

> The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

- Android SDK Platform 29
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### 3. Configure the ANDROID_HOME environment variable

The Flutter tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

> .bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

> Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

## iOS development environment

You will Xcode and CocoaPods.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your Flutter app for iOS.

### Xcode

The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

### Installing an iOS Simulator in Xcode

To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

### CocoaPods

CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)

```bash
sudo gem install cocoapods
```

For more information, please visit CocoaPods Getting Started guide.

<https://guides.cocoapods.org/using/getting-started.html>
