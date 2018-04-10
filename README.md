# Compose and Close Email Zimlet (Workaround for Zimbra Bugzilla #107903 )

## Introduction

In ZCS 8.6 and more often in ZCS 8.7 there's a somewhat random bug where when you open an already created appointment you'll see the text of another appointment.

You can find more information about the bug in [Zimbra Bugzilla #107903](https://bugzilla.zimbra.com/show_bug.cgi?id=107903)

This zimlet is an attempt of making a workaround for this bug according to [Thierry's comment 21](https://bugzilla.zimbra.com/show_bug.cgi?id=107903#c21) where he suggests to open a new Compose view and closing it.

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

The final user when its Zimbra UI is being loaded will be for about half a second a 'New message' titled 'Loading...'. That new message will be closed.
