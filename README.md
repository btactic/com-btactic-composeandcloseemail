# Compose and Close Email Zimlet (Workaround for Zimbra Bugzilla #107903 )

## Introduction

In ZCS 8.6 and more often in ZCS 8.7 there's a somewhat random bug where when you open an already created appointment you'll see the text of another appointment.

You can find more information about the bug in [Zimbra Bugzilla #107903](https://bugzilla.zimbra.com/show_bug.cgi?id=107903)

This zimlet is an attempt of making a workaround for this bug according to [Thierry's comment 21](https://bugzilla.zimbra.com/show_bug.cgi?id=107903#c21) where he suggests to open a new Compose view and closing it.

According from a support technician from Zimbra the bug is fixed in ZCS 8.8.8. This statement has not been confirmed by the Zimbra community yet.

## How to build

```
git clone https://github.com/btactic/com-btactic-composeandcloseemail/
cd com-btactic-composeandcloseemail
zip -r ../com_btactic_composeandcloseemail.zip *
```

## How to get the binary release

You can download zip files ready to use from: 
https://github.com/btactic/com-btactic-composeandcloseemail/releases .
You just need to make sure to rename the downloaded files as:
```
com_btactic_composeandcloseemail.zip
```

## How to deploy your zimlet

Just deploy your zimlet in your ZCS as you would do with any other zimlet.

## What happens when the zimlet is enabled

While Zimbra UI is being loaded a hidden 'New message' tab will be opened and a second later that hidden tab will be closed.

You can check thanks to F12 (in most of the internet browsers) your console output.

Before enabling the zimlet in ZCS 8.7 when the UI is started you get:

```
---- Loading package: MailCore
---- Loading package: ContactsCore
---- Loading package: Startup2
---- Loading package: CalendarCore, Calendar
---- Loading package: Zimlet
---- Loading package: Contacts
```
.

After enabling the zimlet in ZCS 8.7 when the UI is started you get:


```
---- Loading package: MailCore
---- Loading package: ContactsCore
---- Loading package: Startup2
---- Loading package: CalendarCore, Calendar
---- Loading package: Zimlet
---- Loading package: Contacts
---- Loading package: Mail
---- Loading package: TinyMCE
```
.
