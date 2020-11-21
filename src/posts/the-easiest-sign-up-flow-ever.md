---
author: Kameron Tanseli
date: '2020-11-20T20:53:29Z'
hero_image: /static/posts/the-easiest-sign-up-flow-ever.png
title: 'The Easiest Sign Up Flow Ever'
byline: "Sometimes you come across a product that turns the notion of onboarding on its head. qrmenucreator.com was that product for me and here's why..."
---

Sometimes you come across a product that turns the notion of onboarding on its head. [qrmenucreator.com](http://qrmenucreator.com/) was that product for me.

In the SaaS world, we require that users give us a boatload of information before they sign up. Such as their name, email, phone, company name, website, or department. During the same flow, we also ask them to create a password or link their social accounts via OAuth2.

So why was qrmenucreator so refreshing? You don't even need to sign up! You give them your email so you don't lose your unique link to edit your online menu. Very clever and doesn't feel like an information grab.

## How can I use this?

For a SaaS product that doesn't use public URLs (i.e: handles sensitive data):

1. Ask for only the email on the marketing page.
2. Save the email to your database and generate a unique UUID for that account.
3. Create a session associated with the UUID and redirect the user to the app.
4. To log back into the app they can either use a magic link via email or create a password.

For a SaaS product that can use public URLs:

1. Generate a unique UUID for the "thing" your user creates.
2. Give your user a unique URL to use to edit/delete their "thing".
3. Prompt for sending the unique URL to their email to stop them from losing access to their "thing".
4. You now have a user you can email for upsells.

## Questions

### What about personalisation?
Make providing extra information part of "completing their profile" (i.e: gamify giving away data). LinkedIn does this incredibly well using a progress bar.

### I only want verified emails in my product
Then show an annoying banner asking users to verify their emails once they signed in. Hot tip you should make the "verify" button open up mail.google.com or outlook.com based on the email domain.

### I already have good conversion
Imagine what your conversion rate would look like if you removed all but one of your sign up fields?

### My sales team needs X/Y info
If the customer wants to be contacted then you can email them 🤷. The point here is to collect information when it's necessary to do so.